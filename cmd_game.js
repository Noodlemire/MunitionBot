const HOME = "856335792221454367";

function getPlayerByID(players, id)
{
	for(let i = 0; i < players.length; i++)
		if(players[i].id === id)
			return players[i]
}

function getPlayerByName(players, name)
{
	name = name.toLowerCase();

	for(let a = 0; a < players.length; a++)
		for(let b = 0; b < players[a].nicknames.length; b++)
			if(players[a].nicknames[b] === name)
				return players[a]
}

function isInt(v)
{
	return parseInt(v, 10).toString() === v;
}

function firstname(p)
{
	let name = p.nicknames[0] || "unknown (bug)";

	return name.substring(0, 1).toUpperCase() + name.substring(1);
}

module.exports = (g) =>
{
	const {PRE, categories, commands, msg, overwrite, PLAYER_DATA, is_day, toggle_day} = g;
	categories["Game"] = true;
	let i = 0;
	
	function register_cmd(name, param, title, desc, func, admin_only)
	{
		let cmd = 
		{
			id: "g" + i,
			cat: "Game",
			title,
			desc,
			param,
			meta: {},
			func: (chn, message, e, args) =>
			{
				if(!admin_only || (message.member.permissions.has("ADMINISTRATOR") && message.guildId === HOME))
					func(chn, message, e, args);
				else
					msg(chn, "-You do not have elevated permissions for this bot.");
			}
		};

		i = i + 1;

		if(typeof name === "string")
			commands[name] = cmd;
		else
			for(let i in name)
				commands[name[i]] = cmd;
	}

	register_cmd("add_player", "<Player ID> <#Player Channel> [Nickname(s)...]", "Add Player", "Add a player into the bot's local storage, enabling use with Whispers.", (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-USAGE: " + PRE + "register <Player ID> <#Player Channel> [Nickname(s)...]");
			return;
		}

		let user_promise = message.guild.members.fetch(args[0]).catch(console.error);
		let player_channel = message.guild.channels.cache.get(args[1].substring(2, args[1].length-1));

		user_promise.then((user) =>
		{
			if(!user || !player_channel)
			{
				if(!user)
					msg(chn, "-Invalid member ID: " + args[0]);

				if(!player_channel)
					msg(chn, "-Invalid player channel: " + args[1]);

				return;
			}

			for(let i = 0; i < PLAYER_DATA.length; i++)
			{
				if(PLAYER_DATA[i].channel === player_channel.id)
				{
					msg(chn, "-Cannot register duplicate player.");
					return;
				}
			}

			let num = PLAYER_DATA.length;

			PLAYER_DATA[num] =
			{
				id: user.id,
				channel: player_channel.id,
				nicknames: [],
				alive: true,
				tags: {}
			};

			for(let i = 2; i < args.length; i++)
				PLAYER_DATA[num].nicknames[i-2] = args[i].toLowerCase();

			overwrite();

			msg(chn, "+Player " + (num+1) + " registered successfully!");
		});
	}, true);

	register_cmd("toggle_day", "", "Toggle Day", "Toggle between Night and Day, determining if whispers are allowed or not.", (chn, message, e, args) =>
	{
		toggle_day();

		if(is_day())
		{
			for(let i = 0; i < PLAYER_DATA.length; i++)
				PLAYER_DATA[i].whispers = 3;

			msg(chn, "+It is now Day.");
		}
		else
			msg(chn, "-It is now Night.");

		overwrite();
	}, true);

	register_cmd("toggle_alive", "<Player Name or Number>", "Toggle alive", "Toggle between a player's status as Alive or Dead, determining if whispers are allowed or not.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-Usage: " + PRE + "toggle_alive <Player Name or Number>");
			return;
		}

		let player = isInt(args[0])
			&& PLAYER_DATA[parseInt(args[0])-1]
			|| getPlayerByName(PLAYER_DATA, args[0]);

		if(!player)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		player.alive = !player.alive;

		if(player.alive)
			msg(chn, "+They live.");
		else
			msg(chn, "-They die.");

		overwrite();
	}, true);

	register_cmd("whisper", "<Player Name or Number> <Message>", "Whisper", "Whisper to a player of your choice. You may whisper them by their name or Player Number.\n\nThis command can only be used within your own player channel.", (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "whisper <Player Name or Number> <Message>");
			return;
		}

		let sender = getPlayerByID(PLAYER_DATA, message.member.id);

		if(!sender)
		{
			msg(chn, "-ERROR: You are not a registered player!");
			return;
		}

		if(chn.id !== sender.channel)
		{
			msg(chn, "-ERROR: You may only send whispers from within your own Player Channel.");
			return;
		}

		if(sender.whispers <= 0)
		{
			msg(chn, "-ERROR: You are out of whispers.");
			return;
		}

		if(!sender.alive)
		{
			msg(chn, "-ERROR: You cannot whisper while dead.");
			return;
		}

		let recipient = isInt(args[0])
			&& PLAYER_DATA[parseInt(args[0])-1]
			|| getPlayerByName(PLAYER_DATA, args[0]);

		if(!recipient)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		if(!recipient.alive)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is dead.");
			return;
		}

		if(sender === recipient)
		{
			msg(chn, "-ERROR: You cannot whisper to yourself.");
			return;
		}

		if(!is_day())
		{
			msg(chn, "-ERROR: You cannot use whispers right now.");
			return;
		}

		let rchannel = message.guild.channels.cache.get(recipient.channel);

		if(!rchannel)
		{
			msg(chn, "-ERROR: Recipient's channel is invalid. This is probably a bug.");
			return;
		}

		let whisper = args[1];

		for(let i = 2; i < args.length; i++)
			whisper = whisper + ' ' + args[i];

		msg(rchannel, "Whisper from " + firstname(sender) + ": " + whisper, true);
		msg(chn, "+Sent!");
		sender.whispers--;

		for(let i = 0; i < PLAYER_DATA.length; i++)
		{
			let plr = PLAYER_DATA[i];

			if(plr !== sender && plr !== recipient && (plr.tags.overhear_all || 
					(plr.tags.overhear_target === sender.id || plr.tags.overhear_target === recipient.id)))
			{
				let pchannel = message.guild.channels.cache.get(plr.channel);

				msg(pchannel, "Whisper from " + firstname(sender) + " to " + firstname(recipient) + ": " + whisper, true);
			}
		}
	});

	register_cmd("tag", "<Player Name or Number> <Key> [Value]", "Tag", "Give a player a Tag, a type of variable related to gameplay.\n\nTo check what a Tag currently is, use this command without providing a Value.\n\nTo remove a Tag, use this command with the Value set to \"-\" (without the quotes).", (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "tag <Player Name or Number> <Key> [Value]");
			return;
		}

		let player = isInt(args[0])
			&& PLAYER_DATA[parseInt(args[0])-1]
			|| getPlayerByName(PLAYER_DATA, args[0]);

		if(!player)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		if(args[2] === "-")
		{
			delete player.tags[args[1]];
			msg(chn, "+Tag \"" + args[1] + "\" deleted.");
		}
		else if(args[2])
		{
			player.tags[args[1]] = args[2];
			msg(chn, "+Tag \"" + args[1] + "\" set to \"" + args[2] + "\".");
		}
		else
			msg(chn, "+Tag \"" + args[1] + "\" is currently set to \"" + (player.tags[args[1]] || "null") + "\".");

		overwrite();
	}, true);
};
