module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["yog-dzewa", "yog_dzewa", "yogdzewa", "yog", "dzewa", "yd"], "Demon", "Yog-Dzewa", {subCat: "Support", cannotRoll: true}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930969468253904986/YogDzewa.png";

		e.setDescription("The physical manifestation of a corrupted god. Chief of the demons, wants to devour the world and every creature in it.");

		e.addField("Alignment", "Unique Demon Support", true);
		e.addField("Origin", "Shattered PD", true);
		e.addField("Fist Version", "Divine Fist", true);

		e.addField("Demon God (Passive):", "Your vote for the Demon Attack ability is worth double. You are immune to corruption and stunning. Your abilities are Ranged.");

		e.addField("Watchful Eye (Night, x1):", "At the end of this night, you will learn of all visits that occured this phase.");

		e.addField("Charge (Night, x2):", "The tier of your next attack will be increased by 1.");

		e.addField("Demon Absorption (Night, x0):", "Devour one demon and turn them into one of your fists. This will give them their “Fist Version” ability and refill it, but it won’t kill your target. Gets one ammo at the start of every even-numbered night. Your target cannot benefit from newly gained ammo or abilities until the next night. You may choose yourself.");

		e.addField("Fists of Protection (Passive, Fist-Only):", "You have passive defense of a tier equal to the amount of living fists, including yourself.");

		e.addField("Objective:", factions.Demon.goal);

		e.addField("Noodlemire’s Note:", "The demon leader, able to empower itself and its allies over time. You start without armor, so it can be a good idea to empower yourself first. Empowerment is your strongest tool, so choose your targets wisely. Each role benefits in its own ways.");
	});

	register_role(["dm-200", "dm_200", "dm200", "dm", "200"], "Demon", "DM-200", {subCat: "Killing"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/949788603540717569/DM200.png";

		e.setDescription("A dwarven robot once meant for mining, before demon influence took it over. It comes handily equipped with many weapons of death and destruction.");

		e.addField("Alignment", "Demon Killing", true);
		e.addField("Origin", "Shattered PD", true);
		e.addField("Fist Version", "Rotting Fist", true);

		e.addField("Toxic Stream (Passive):", "As the designated attacker, you do a basic attack to your main target, followed by a spread weak attack.");

		e.addField("Solid Construction (Passive, 2x):", "You have armor that is equal in tier to the amount of ammo left on this ability. Each time you get attacked by a non-Demon, you gain ammo for Scan Threats.");

		e.addField("Corrosive Bolt (Night, x1):", "Hit your target with a surprise attack that ignores passives.");

		e.addField("Rockfall (Night, x2):", "Select a target to hit with a Spread Stunning Weak Attack.");

		e.addField("Scan Threats (Night, x1):", "Select 5 players and learn their alignments. Counts as Astral.");

		e.addField("Toxic Flood (Passive, Fist-Only):", "Each night, players who target you will get hit by a weak attack.");

		e.addField("Objective:", factions.Demon.goal);

		e.addField("Noodlemire’s Note:", "A very powerful killing role who can attack multiple targes each night. This can help break down peoples’ defenses, but runs the risk of injuring your fellow demons if you’re not careful. As a fist, you become much more capable of killing multiple people, but it’s a passive that you can’t control.");
	});

	register_role(["succubus", "succ"], "Demon", "Succubus", {subCat: "Support"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930970483057373194/Succubus.png";

		e.setDescription("A flirty demon that has a gothic look to her. Loves draining the life energy out of her targets.");

		e.addField("Alignment", "Demon Support", true);
		e.addField("Origin", "Shattered PD", true);
		e.addField("Fist Version", "Pheromone Fist", true);

		e.addField("Lust Demon (Passive):", "You are immune to stun effects.");

		e.addField("Stolen Vitality (Passive, x0):", "Grants basic defense once you get ammo for it.");

		e.addField("Seduce (Night, x3):", "Stun your target and disable their passive abilities. Each time your target gets attacked, you’ll gain ammo for Stolen Vitality, unless the stun failed.");

		e.addField("Teleport (Day, x2):", "Choose a player and teleport into their house at the start of the night, forming a private chat with them until the phase ends. Everyone, except for your target, will be unable to target you.");

		e.addField("Energy Drain (Night, x2):", "Steal ammo from a random ability of your target. It’ll be added to the ammo of one of your own abilities at random, which can include this one.");

		e.addField("Deep Seduction (Night, x3, Fist-Only, Replaces Seduce):", "In addition to its other effects, it will Silence your target. This ability is ranged.");

		e.addField("Objective:", factions.Demon.goal);

		e.addField("Noodlemire’s Note:", "A role with various ways to weaken enemies to make it easier for your fellow demons to finish them off. Seduce works best when you’re specifically targeting the demons’ current attack target, or you can use Energy Drain for a longer-lasting effect. In a pinch, you may Blink away, but this might give you away if you don’t plan to claim being a Sad Ghost.");
	});

	register_role(["arch-demon", "arch_demon", "archdemon", "arch", "demon", "ad"], "Demon", "Arch-Demon", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930971411659489373/ArchDemon.png";

		e.setDescription("A demon that promises great knowledge to those who indulge in it. Sadly, the knowledge it gives is false.");

		e.addField("Alignment", "Unique Demon Investigative", true);
		e.addField("Origin", "Darkest PD", true);
		e.addField("Fist Version", "Satanic Fist", true);

		e.addField("Shell of Lies (Passive, x1):", "You have invincible shell and appear to be a hero to investigators. Only attacks against you use up ammo for this ability.");

		e.addField("Liar’s Intuition (Passive):", "After Day 1, whenever a day starts, you will know who, out of all of the non-demons, has some kind of disguise. This excludes disguises placed by you and other demons.");

		e.addField("Disguise (Night, x3):", "Make your target appear to be any role of your choosing. This lasts 2 nights. Whenever it fools an investigator, you will gain ammo for your Shell of Lies. In addition, you will learn the role category of your target’s true role.");

		e.addField("Forge Will (Night, x2):", "Write a fake Last Will that will be shown if your target dies tonight. If successful, you will know the true Last Will that they wrote.");

		e.addField("Knowledge of Deception (Night, x1):", "For this night, every investigation will see results based on a random role of the opposite alignment. Your own role will always appear as hero-aligned. You will know the names of every person who was targeted with investigations, and what their results would have been if they were accurate. This cannot be refilled.");

		e.addField("Belie (Night, x3, Fist-Only, Replaces Disguise):", "The disguise you choose becomes permanent, and you will learn your target’s true role.");

		e.addField("Objective:", factions.Demon.goal);

		e.addField("Noodlemire’s Note:", "A master of fooling and confusing other investigative roles, and providing key info to your fellow demons. Although it’s weaker if there aren’t many investigators, you can still use your abilities to provide decent info.");
	});

	register_role(["heretic", "her"], "Demon", "Heretic", {subCat: "Protective"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930972631124041788/Heretic.png";

		e.setDescription("Once a regular mage who studied evil curse magic. Now, he serves that dark power as much as it serves him.");

		e.addField("Alignment", "Demon Protective", true);
		e.addField("Origin", "Scorched PD", true);
		e.addField("Fist Version", "Dark Fist", true);

		e.addField("Cursed Link (Night, x3):", "Select two targets. Damage towards the first target will become equal-tiered armor for the second person. This is ranged for both targets.");

		e.addField("Grave Dig (Night, x4):", "Choose a dead person. You will learn their role category and gain ammo for one of your other abilities based on what their category was.");

		e.addField("Sacrificial Curse (Night, x0):", "Whenever your target attacks someone, your target will also hit themselves with a weak attack. Gained when digging killing roles.");

		e.addField("Exhausting Curse (Night, x0):", "From now on, your target’s attacks have their tier decreased by 1, minimum of weak. Gained when digging protective roles.");

		e.addField("Friendly Curse (Night, x0):", "Each time your target attacks someone, they will be stunned next night. Gained when digging support roles.");

		e.addField("Annoying Curse (Night, x0):", "Each time your target attacks someone, everyone who visited the same person will learn your target’s name. Gained when digging investigative roles.");

		e.addField("Grave Rob (Night, x4, Fist-Only, Replaces Grave Dig):", "In addition to the previous effects, you will know your target’s cause of death, and gain twice the amount of ammo as usual.");

		e.addField("Objective:", factions.Demon.goal);

		e.addField("Noodlemire’s Note:", "A varied role that requires some people to die before it can really start to pick up in power. Try to keep various claims in mind, so you may pick up specific kinds of curses to use. Note that although your curses only counter attackers, many non-killing roles come with attacking abilities anyways.");
	});
};
