module.exports = (g) =>
{
	const {register_role, rHex} = g;

	register_role(["sufferer", "suff"], "Neutral", "Sufferer", {subCat: "Benign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930977591425388564/Sufferer.png";

		e.setDescription("A tortured soul who secretly escaped the underworld alongside the other demons. It seeks death, for itself and for anyone who would dare vanquish it.");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Origin", "SPecial Surprise PD", true);
		e.addField("Type", "Benign", true);

		e.addField("Suffer (Passive):", "If you get lynched, you may choose one of the people who voted for you. If you don’t choose before the night ends, a random person will be chosen for you. At the end of the night, you will hit them with a grim rampage at wherever they’re at, even if they’ve teleported into someone else’s house to hide. This cannot be copied or disabled.");

		e.addField("Web of Lies (Passive, x2):", "You have passive invincible shell. Cannot be refilled.");

		e.addField("Fake Guilt (Night, x2):", "Choose a target, which may be yourself. The target will be disguised as a random evil role for this night and the next.");

		e.addField("Shift (Night, x2):", "For this night, any attacks against you will be redirected to your target. If they’re evil, investigations will be redirected to them, too.");

		e.addField("Forge Vote (Day, Infinite):", "Sacrifice ammo from one of your other random abilities to secretly submit a second vote to Lynch someone. Cannot be used Day 1 or for an Abstain vote.");

		e.addField("Objective:", "Get lynched.");

		e.addField("Noodlemire’s Note:", "A role with limited direct capabilities prior to winning, but massive potential in terms of what you can claim and how you can mess with other people. And of course, if you do finally get voted off, you can potentially obliterate a lot of people. Just be careful about acting suspicious while the Center is inactive. You have strong armor, but it is very limited, and may randomly be used up by Forge Vote.");
	});

	register_role(["necromancer", "necro"], "Neutral", "Necromancer", {subCat: "Benign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930977619896307732/Necromancer.png";

		e.setDescription("An apprentice dark mage that was attracted by the evil lurking within the town. Now that people are dying, it’s free to practice is magic. But what shall it do with this newfound power?");

		e.addField("Alignment", "Neutral Support", true);
		e.addField("Origin", "Shattered PD", true);
		e.addField("Type", "Benign", true);

		e.addField("Necromantic Connection (Passive):", "The first time someone dies without corruption immunity, you will be notified about their role, convert them to your side, and gain a permanent private chat with them. They will regain use of their abilities, however many were left. Their new goal will be to help you survive. If your skeleton doesn’t submit their own action, you can submit one for them.");

		e.addField("Protection of Death (Passive, x3):", "You initially have passive invincible shell. After you gain a skeleton, your armor diminishes to basic level instead.");

		e.addField("Deadly Harnessing (Passive):", "Each time someone other than your skeleton dies, you will gain ammo for a random ability below.");

		e.addField("Spell of Energy (Night, x0):", "Grant 1 more ammo to each of your skeleton’s abilities.");

		e.addField("Spell of Adrenaline (Night, x1):", "Allow your skeleton to use a second action this night. Their second action will fail if you get roleblocked.");

		e.addField("Spell of Power (Night, x1):", "Increase the tier of your skeleton’s next attack by 1. If they have no attack, you will instead grant them a single-use basic attack.");

		e.addField("Objective:", "Survive until the end of the game.");

		e.addField("Noodlemire’s Note:", "A powerful, versatile role that can grant someone a second life in the game. Note that you become fairly fragile once you get your skeleton, so be prepared to rely on their abilities to help you either survive, or simply end the game faster.");
	});

	register_role(["archivist", "arch", "archi"], "Neutral", "Archivist", {subCat: "Benign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930977709432123452/Archivist.png";

		e.setDescription("A researcher of the various dungeons that exist in this universe and some even say other universes. They are currently studying the creatures in this town before moving on.");

		e.addField("Alignment", "Neutral Investigative", true);
		e.addField("Origin", "SPecial Surprise PD", true);
		e.addField("Type", "Benign", true);

		e.addField("Mental Fortress (Passive, x0):", "You can gain passive basic defense. Each time you get more correct roles using List Guessing than your previous record, this gains ammo equal to the difference between your new record and the last.");

		e.addField("Research (Passive):", "At the start of each Day and Night, you will gain a set of up to 2 roles that exist in the game, aside from roles that are guaranteed to exist. You will only receive a duplicate role if there’s another person with that role. If someone’s role changes, their new role will be provided at some point as simply another role that exists.");

		e.addField("List Guessing (Night, Infinite):", "Create full list of players and which roles they have. Once the Night ends, you will be notified of the number of incorrect roles, if any. Disguises do not affect your results.");

		e.addField("Deep Search (Night, Infinite):", "Sacrifice 2 ammo from Mental Fortress to learn someone’s exact role. You may use this on a dead person. Cannot be used if Mental Fortress has less than 2 ammo.");

		e.addField("Study Guessing (Night, x1):", "Use List Guessing and learn specifically which player’s role is correct or incorrect. This ability cannot be refilled.");

		e.addField("Objective:", "Use List Guessing without getting a single guess wrong.");

		e.addField("Noodlemire’s Note:", "The most powerful investigator in the game. You start out very frail, so you should wait until later in the game before sharing anything. Similarly, you should wait before using your more powerful abilities. Deep Search is only really good if there’s anyone without a possible way to learn their role, and Study Guessing is best used if you suspect that someone’s role has changed (I.E. you Research more roles than there are players in the game)");
	});

	register_role(["golden_bee", "goldenbee", "golden", "bee", "gb"], "Neutral", "Golden Bee", {subCat: "Benign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930978869740208128/GoldenBee.png";

		e.setDescription("A large yellow bee, furiously protecting its honey from anyone who would dare steal it.");

		e.addField("Alignment", "Neutral Protective", true);
		e.addField("Origin", "Pixel Dungeon", true);
		e.addField("Type", "Benign", true);

		e.addField("Honeypot (Passive):", "At the start of the game, a random person other than Warden Smith will be assigned as the “Honeypot” that you must protect. As long as they survive until the end of the game, you may win, even if you don’t live.");

		e.addField("Sweet Sense (Passive):", "At the start of each Day, you will be notified of the name of up to one person who visited your Honeypot last night. If nobody visited them, you will gain Basic Defense for the following night.");

		e.addField("Honey Dip (Night, x5):", "Provide refreshment to yourself or your Honeypot. This provides a 1-Night defense tier increase, injury immunity, and ammo to a random ability other than this one. This ability is ranged.");

		e.addField("Buzz Guard (Night, x2):", "Redirect all attacks against your Honeypot to yourself.");

		e.addField("Fierce Swarm (Night, x2):", "Deal a surprise attack against your target. If you kill them, their attack will fail.");

		e.addField("Objective:", "Ensure your Honeypot survives until the end of the game.");

		e.addField("Noodlemire’s Note:", "A defensive role who can be good or evil, all depending on who you’re assigned to protect. Generally, you should try to contact your Honeypot in private as soon as possible, so you can notify them of their need to live without letting others know of your true purpose. Communication is key, as you are severely weakened if you move away from your Honeypot.");
	});

	register_role(["tengu"], "Neutral", "Tengu", {subCat: "Malign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930978937876647966/Tengu.png";

		e.setDescription("A strong assassin that wants to regain his reputation by killing every creature in his way.");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Origin", "Shattered PD", true);
		e.addField("Type", "Malign", true);

		e.addField("Assassin for Hire (Passive):", "At the start of the game, the following ability will be provided to two random Heroes, the Evil Faction’s Leader, and one other Evil person at random:\nTengu Hire (Night, x1, Extra): Send the Tengu (Without visiting him) to attack someone with a ranged grim attack. When hired, Tengu has heavy armor, but can’t use whichever action he chose to do that Night. Tengu will always know who he was hired to kill, but he won’t be told who hired him. This will fail and get refunded if Tengu is hired against someone he can’t target (I.E. himself) or he gets roleblocked.");

		e.addField("Payment (Passive, x0):", "Each time you get hired, you will gain ammo for this and one other random ability. With ammo, this ability provides you with basic defense.");

		e.addField("Murder (Night, Infinite):", "Attack your target with a basic attack.");

		e.addField("Shock Bomb (Night, x1):", "Hit your target with a surprise attack and a spread roleblock.");

		e.addField("Fire Bomb (Night, x1):", "Inflict a spread torching basic attack upon your target.");

		e.addField("Smoke Bomb (Night, x0):", "Hit your target with a basic attack. At the end of the night, your target and their other visitors will not receive any notification that they normally would for anything else that happened. They will only know their vision was obscured by smoke. Ammo for this ability can only be gained by a Hire.");

		e.addField("Objective:", "Half of the players must be dead, as well as all other Unique roles. At least three of those must be dead by your hands.");

		e.addField("Noodlemire’s Note:", "A very lethal role with lots of options for killing people. Having your chosen action be taken from your due to a hire can be inconvenient sometimes, but the reward of additional ammo and armor will usually make it worth it. As for those who can Hire you, the Hire should probably not be used too often. It can be refilled, but each hire makes the Tengu stronger and stronger…");
	});

	register_role(["alchemist", "alch"], "Neutral", "Alchemist", {subCat: "Malign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930979683359662181/Alchemist.png";

		e.setDescription("A medic testing out various medicines on unsuspecting people. These medicines can range from good to not very good.");

		e.addField("Alignment", "Neutral Support", true);
		e.addField("Origin", "Scorched PD", true);
		e.addField("Type", "Malign", true);

		e.addField("Pharmacist’s Curse (Passive):", "Each time you use an ability, your target will be inflicted by Pharmacophobia at the end of the next night. This ability cannot be copied. Each time someone dies to Pharmacophobia, you will gain ammo for Holy Immunity.\nPharmacophobia (Passive, x1, Extra): Your defense level is decreased by the amount of ammo on this ability. At the end of each night, this will gain 1 ammo, and if your armor level is negative, you will immediately die. This cannot be copied, cured, or drained by any means.");

		e.addField("Holy Immunity (Passive, x0):", "Grants you one self-use of any of your abilities without causing yourself to die by Pharmacophobia.");

		e.addField("Last Aid (Passive, x1):", "The first time you would die, you will instead automatically consume a Holy Elixir (If you have any) to save yourself. Pharmacophobia may be applied to you if you lack ammo for Holy Immunity.");

		e.addField("Holy Elixir (Night, x4):", "Grant your target Ankh-Like defense for tonight.");

		e.addField("Holy Rage (Night, x2):", "Select a target. At the start of the next night, they will be notified that they may use a second ability.");

		e.addField("Holy Fuel (Night, x1):", "Provide your target with 1 ammo to all abilities that can be refilled. If you use this on yourself, only Holy Elixir and Holy Rage will be refilled.");

		e.addField("Objective:", "At least 4 people must die to your medicine.");

		e.addField("Noodlemire’s Note:", "A supportive role that works to secretly kill people while (usually) pretending to help them. However, you can die easily if you aren’t careful with how you use your abilities, Holy Immunity especially. Your overall goal is simply to kill 4 people. Don’t let the game end too quickly with your more aggressive abilities; stall as necessary by actively preventing others’ deaths.");
	});

	register_role(["championslayer", "champion", "champ", "cs"], "Neutral", "Championslayer", {subCat: "Malign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930980014407680061/Championslayer.png";

		e.setDescription("A legendary mercenary that found out some champions are in this town. Now, he’s here and ready to murder ‘em for good.");

		e.addField("Alignment", "Unique Neutral Investigative", true);
		e.addField("Origin", "Too Cruel PD", true);
		e.addField("Type", "Malign", true);

		e.addField("Hostile Champions (Passive):", "Three random players, other than you, will get a random champion title when the game starts. If you kill them, you’ll take their title. Otherwise, when they die, this title will be given to a random killer or a random person if that fails. You will be told which titles exist.\n> Blazing: Your attacks become Torching. If you had no attacks, you will gain an infinite basic attack as an Extra ability.\n> Anti-Magic: You are roleblock and torching immune. Roleblock immune roles can’t roll this.\n> Giant: Increases the tier of your attack and defense. If you target someone who was also visited by at least two other people, your ability will fail.\n> Projecting: All your actions now count as ranged.");

		e.addField("Champion’s Strength (Passive, x1):", "You have passive heavy defense. Each time you take a Champion title, you gain ammo for this ability.");

		e.addField("Arcane Nuke (Night, x1):", "Attack someone. Your attack will be Weak-tier against a non-Champion, or Divine-tier against a Champion.");

		e.addField("Power Gauge (Night, x4):", "Select three people. You will be notified about how many of them are champions. If at least one is a champion, you will gain 1 more ammo for Arcane Nuke. This ability is ranged.");

		e.addField("Power Sense (Night, x1):", "Choose a player, which may be yourself. At the start of the next Day, you will learn the names of anybody who visited them, and if they are Champions or not. If any of them are, you will gain 1 more ammo for Arcane Nuke.");

		e.addField("Objective:", "Kill all other champions and take their titles.");

		e.addField("Noodlemire’s Note:", "A chaotic role, immediately making multiple people stronger just for existing. Pay attention to what people do and the result of their actions, in case they reveal a clue about if they have a title or not. Save your Power Sense for when you know many people will gather in one place, such as due to a major town role revealing itself.");
	});

	register_role(["lightning_crab", "lightningcrab", "lightning", "crab", "lc"], "Neutral", "Lightning Crab", {subCat: "Malign"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930980809383510066/LightningCrab.png";

		e.setDescription("A crab who had gathered powerful artifacts together, eventually creating some of the toughest armor ever. Its only weakness is weakness itself.");

		e.addField("Alignment", "Unique Neutral Protective", true);
		e.addField("Origin", "Sprouted PD", true);
		e.addField("Type", "Malign", true);

		e.addField("Adamantite Armor (Passive):", "You have inverted defense. Weak attacks kill you, while basic attacks injure you. Anything more powerful than that will have no effect on you. Doesn’t work against Erasing Attacks.");

		e.addField("Lightning Tower (Passive, x0):", "Each night where you take a hit, this ability will gain ammo, up to a maximum of 4. It cannot be filled by any other means.");

		e.addField("Intercept (Night, Infinite):", "Redirect all attacks against your target to yourself.");

		e.addField("Zap (Night, x0):", "Attack someone. The tier is equal to the amount of ammo in your Lightning Tower. You gain ammo for this every time you are attacked.");

		e.addField("Shell Shield (Night, x1):", "Give yourself basic defense. Cannot be refilled.");

		e.addField("Objective:", "Charge your Lightning Tower to full.");

		e.addField("Noodlemire’s Note:", "A very dangerous role with a unique weakness. If you aren’t careful about who you Intercept or about keeping yourself hidden, it’ll be very easy for someone to throw a weak attack at you and kill you instantly. If you do fill your Lightning Tower, you no longer have to worry about staying alive, so you can zap and kill people as you please.");
	});

	register_role(["chaos_elemental", "chaoselemental", "chaos", "elemental", "ce"], "Neutral", "Chaos Elemental", {subCat: "Any", spawnRate: 0.75}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930982689824186368/ChaosElemental.png";
		e.setColor(rHex() + rHex() + rHex() + rHex() + rHex() + rHex());

		e.setDescription("A newly created elemental. It’s trying to stabilize itself, but in the meantime it’s causing uncontrollable chaos.");

		e.addField("Alignment", "Neutral Unstable", true);
		e.addField("Origin", "sHaTtErEd pD", true);
		e.addField("Type", "?", true);

		e.addField("Unstable (Passive):", "This role may spawn in either the Malign Neutral slot, or the  Benign Neutral slot. When investigated, your category shows up as either Killing, Support, Protective, or Investigative at random. Each night, you must use one of your Chaos abilities. If you don’t choose one, you will automatically use Chaos Burst against a random target.");

		e.addField("Discordant Shield (Passive, x4):", "Each night, you will be “protected” by a random passive ability, drawing from all roles in the game. As long as you have ammo for this, you cannot be hurt by your own abilities. This ability cannot be refilled.");

		e.addField("Chaos Burst (Night, Infinite):", "Target someone with a completely random non-passive ability, drawing from all roles in the game. You may target yourself, and if you do, you will gain ammo for Chaos Control.");

		e.addField("Chaos Control (Night, x1):", "Target someone with a random ability from a category of your choice, other than Unique and Unstable. You may target yourself.");

		e.addField("Zap (Night, x0):", "Attack someone. The tier is equal to the amount of ammo in your Lightning Tower. You gain ammo for this every time you are attacked.");

		e.addField("Objective:", "Survive until the end of the game.");

		e.addField("Noodlemire’s Note:", "A simple objective, with no well-defined way to get there. Although you have limited control over what you do, trying to abuse it can easily result in all of your Shield’s ammo being used up, even despite the large initial ammo amount.");
	});
};
