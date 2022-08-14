const {Client, Intents, MessageEmbed} = require('discord.js');
const {readFile, writeFile} = require("fs");

const PRE = "!";

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS]});

const menus = {};
const categories = {};
const commands = {};
const conflicts = {};
const roles = [];

const PLAYER_DATA = [];

const factions =
{
	Hero: {color: "0000FF", goal: "Kill every evil faction member and malign neutral."},
	Evil: {color: "990000", goal: "Win with the faction that you get assigned."},
	Demon: {color: "FF0000", goal: "Kill every hero and malign neutral."},
	Dwarf: {color: "FF00FF", goal: "Kill or corrupt every hero and malign neutral."},
	Neutral: {color: "FF9900"}
};

var day = false;
function toggle_day()
{
	day = !day;
}

function is_day()
{
	return day;
}

const FNAME = ".store.json";
var TOKEN;
readFile(FNAME, (err, data) =>
{
	if(err) throw err;

	let store = JSON.parse(data);

	if(store.TOKEN)
		TOKEN = store.TOKEN;
	else
		throw "Error: No TOKEN provided.";

	if(store.day != null)
		day = store.day;

	if(store.PLAYER_DATA)
		for(let i = 0; i < store.PLAYER_DATA.length; i++)
			PLAYER_DATA[i] = store.PLAYER_DATA[i];

	login();
})

function overwrite(chn)
{
	let json = JSON.stringify({TOKEN, day, PLAYER_DATA});

	writeFile(FNAME, json, (err) =>
	{
		if(err) throw err;
		if(chn) msg(chn, "+Data saved successfully.");
	});
}

function msg(chn, txt, nodiff, line, sent)
{
	let size = 1750;
	line = (line || 0);
	txt = (txt || "").toString();

	if(line + size < txt.length)
		while(txt[line+size-1] && txt[line+size-1] != '\n')
			size -= 1;

	if(size <= 0)
		size = 1750;

	let t = txt.substring(line, line + size);
	let message = (nodiff && t || "```diff\n" + t + "```");

	if(!sent)
	{
		chn.send(message).then((sent) =>
		{
			if(line + t.length < txt.length)
			{
				menus[sent.id] = {message: sent, page: 1, list: [message], time: new Date().getTime()};
				msg(chn, txt, nodiff, line + size, sent);
			}
		});
	}
	else
	{
		menus[sent.id].list[menus[sent.id].list.length] = message;

		if(line + t.length < txt.length)
			msg(chn, txt, nodiff, line + size, sent);
		else
		{
			sent.edit(menus[sent.id].list[0] + "\n\nPage 1 of " + menus[sent.id].list.length
				+ "\n\nReact:\n➡️ - Next Page" + (menus[sent.id].list.length > 2 ? "\n⏩ - Last Page" : "") + "\n❌ - Close Menu");
			sent.react("➕");
		}
	}
}

let c = 1;
function add_cmd(name, cmd)
{
	if(name !== name.toLowerCase())
	{
		console.log("WARNING: Command name '" + name + "' is not lowercase!");
		name = name.toLowerCase();
	}

	if(name.match(" "))
	{
		console.log("WARNING: Command name '" + name + "' contains a space!");
		name = name.replace(/ /g, "_");
	}

	if(commands[name])
	{
		let n1 = name + "-" + 1;
		let n2 = name + "-" + 2;

		if(commands[n1])
		{
			let i = 2;
			let newname = "";

			do
			{
				i = i + 1;
				newname = name + "-" + i;
			}
			while(commands[newname]);

			commands[newname] = cmd;
			conflicts[name][i-1] = {com: newname, title: cmd.title, cat: cmd.cat};
		}
		else
		{
			commands[n1] = commands[name];
			commands[n2] = cmd;
			conflicts[name] = [{com: n1, title: commands[name].title, cat: commands[name].cat}, {com: n2, title: cmd.title, cat: cmd.cat}]
			categories["Conflict"] = true;

			commands[name] =
			{
				id: "c" + c,
				cat: "Conflict",
				title: PRE + name + " Conflict",
				desc: "This command exists because of a conflict between two role names or numbers. Use it to learn how to specify which individual role you want to see.",
				param: "",
				meta: {},
				func: (chn) =>
				{
					let txt = "Command '" + PRE + name + "' refers to multiple roles. Did you mean:\n";

					for(let c in conflicts[name])
					{
						let con = conflicts[name][c];
						txt = txt + "\n " + PRE + con.com + " - " + con.title + " (" + con.cat + ")";
					}

					msg(chn, txt);
				}
			};

			c = c + 1;
		}
	}
	else
		commands[name] = cmd
}

function rHex()
{
	let h = Math.floor(Math.random() * 16);

	if(h >= 10)
		return String.fromCharCode(55 + h);
	else
		return String(h);
}

let r = 1;
function register_role(name, cat, desc, meta, func)
{
	if(!categories[cat])
		categories[cat] = true;

	if(!func)
	{
		func = meta;
		meta = {};
	}

	let cmd = 
	{
		id: "r" + r,
		cat,
		title: desc,
		desc: "View details of the " + desc + " role.",
		param: "",
		meta,
		func: (chn, message, e, args) =>
		{
			let fac = factions[cat] || {color: "808080"};
			let color = fac.color

			if(color === "random")
				color = rHex() + rHex() + rHex() + rHex() + rHex() + rHex();

			e.setAuthor({name: desc, iconURL: fac.icon});
			e.setColor(color || "808080");

			try
			{
				func(e);

				for(let f in e.fields)
				{
					if(e.fields[f].value.length > 1024)
					{
						msg(chn, "-ERROR: Command " + PRE + (typeof name === "string" ? name : name[0]) + " contains a Field which is longer than 1024 characters!");
						return;
					}
				}

				chn.send({embeds: [e]});
			}
			catch(error)
			{
				console.log(error.message + "\n\n" + error.stack);
				msg(chn, "-ERROR: " + error.message + "\n\n" + error.stack);
			}
		}
	};

	r = r + 1;

	if(typeof name === "string")
		add_cmd(name, cmd);
	else
		for(let i in name)
			add_cmd(name[i], cmd);

	roles[roles.length] = {cmd, rate: cmd.meta.spawnRate || 1};
}

const GLOBAL = {
	PRE,
	
	bot,
	categories,
	commands,
	factions,
	roles,
	msg,
	register_role,
	overwrite,
	rHex,

	PLAYER_DATA,
	is_day,
	toggle_day,
};

require("./cmd_basics.js")(GLOBAL);
require("./cmd_rng.js")(GLOBAL);
require("./cmd_game.js")(GLOBAL);

require("./roles/cmd_roles_hero.js")(GLOBAL);
require("./roles/cmd_roles_evil.js")(GLOBAL);
require("./roles/cmd_roles_demon.js")(GLOBAL);
require("./roles/cmd_roles_dwarf.js")(GLOBAL);
require("./roles/cmd_roles_neutral.js")(GLOBAL);



bot.on("ready", () =>
{
	console.log("Logged in as " + bot.user.tag + "!");

	console.log("Guilds:");
	bot.guilds.cache.forEach(g =>
	{
		g.members.fetch(bot.user.id).then(b =>
		{
			g.members.fetch(g.ownerId).then(o =>
			{
				console.log(g.id + " - " + g.name + " - " + g.memberCount + " - " + o.user.tag + " - " + b.permissions.has("CREATE_INSTANT_INVITE") + " - " + b.permissions.has("ADMINISTRATOR"));
			});
		});
	});
});

bot.on("messageCreate", (message) =>
{
	if(message.content.substring(0, PRE.length) === PRE)
	{
		let channel = message.channel;
		let embed = new MessageEmbed();
		let args = message.content.substring(PRE.length).split(" ");
		let cmd = args[0].toLowerCase();
		args = args.splice(1);

		if(commands[cmd])
			commands[cmd].func(channel, message, embed, args);
		else
			msg(channel, "-ERROR: Unknown command: " + PRE + cmd);
	}
});

bot.on("messageReactionAdd", (reaction, user) =>
{
	if(user.id === bot.user.id)
		return;

	let message = reaction.message;

	if(menus[message.id])
	{
		let menu = menus[message.id];
		let emoji = reaction.emoji.name;
		let edit = false;

		if(emoji === "⬅️" && menu.page > 1)
		{
			menu.page -= 1;
			edit = true;
		}
		else if(emoji === "⏪" && menu.page > 2)
		{
			menu.page = 1;
			edit = true;
		}
		else if(emoji === "➡️" && menu.page < menu.list.length)
		{
			menu.page += 1;
			edit = true;
		}
		else if(emoji === "⏩" && menu.page < menu.list.length - 1)
		{
			menu.page = menu.list.length;
			edit = true;
		}
		else if(emoji === "❌")
		{
			message.edit(menu.list[menu.page-1]);
			message.reactions.removeAll();
			delete menus[message.id];
		}

		if(edit)
		{
			let etext = menu.list[menu.page-1] + "\n\nPage " + menu.page + " of " + menu.list.length + "\n\nReact:";
			message.reactions.removeAll();

			if(menu.page > 1)
				etext = etext + "\n⬅️ - Previous Page";

			if(menu.page > 2)
				etext = etext + "\n⏪ - First Page";

			if(menu.page < menu.list.length)
				etext = etext + "\n➡️ - Next Page";

			if(menu.page < menu.list.length - 1)
				etext = etext + "\n⏩ - Last Page";

			etext = etext + "\n❌ - Close Menu";

			message.edit(etext);
			message.react("➕");

			menu.time = new Date().getTime();
		}
	}
});

bot.on("guildMemberAdd", (member) =>
{
	if(!member.user.bot && member.guild.id === "970041597590929519")
		member.roles.add("990419145944334366");
});

bot.on("debug", (e) => console.log(e));
bot.on("error", (error) => console.log(error.message + "\n\n" + error.stack));
bot.on("shardError", (error) => console.log(error.message + "\n\n" + error.stack));

function login()
{
	bot.login(TOKEN);
}

setInterval(() =>
{
	let now = new Date().getTime();

	for(let mid in menus)
	{
		let menu = menus[mid];

		if(now - menu.time >= 3600000)
		{
			let message = menu.message;

			message.edit(menu.list[menu.page]);
			message.reactions.removeAll();
			delete menus[mid];
		}
	}
}, 1000)
