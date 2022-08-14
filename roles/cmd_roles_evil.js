const evils = ["Demon", "Dwarf"];
const rate = 0.5;

module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["giant_piranha", "giantpiranha", "giant", "piranha", "gp"], "Evil", "Giant Piranha", {subCat: "Killing", spawnCat: evils, spawnRate: 0.5}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930968145999593492/GiantPiranha.png";

		e.setDescription("A ferocious fish that can only survive in water. Luckily, it has a disguise that doubles as a mobile breathing tank.");

		e.addField("Alignment", "Common Evil Killing", true);
		e.addField("Origin", "Pixel Dungeon", true);
		e.addField("Fist Version", "Aquatic Fist", true);

		e.addField("Vital Disguise (Passive):", "You have basic defense and appear as a random killing hero role to investigators. However, if your true role is ever revealed, you will die instantly.");

		e.addField("Ferocious Bite (Passive):", "As the designated attacker, you hit your enemies with a basic attack that always injures them if their armor is a higher tier.");

		e.addField("Smell of Blood (Night, x1):", "Once the night ends, you will learn the names of everyone who is injured, as well as who they visited.");

		e.addField("Deep Bite (Night, x3):", "Hit your target with a weak attack that stuns them and ignores defense. If you injure your target without killing them, you will gain ammo for Smell of Blood.");

		e.addField("Retreat (Night, x1):", "Hide away underwater and become invisible for this night. Nothing will be able to target you. This cannot be refilled.");

		e.addField("Taste of Blood (Passive, Fist-Only):", "Each time you kill a player, the tier of your Ferocious Bite will be permanently increased by 1.");

		e.addField("Objective:", factions.Evil.goal);

		e.addField("Noodlemire’s Note:", "A mildly tanky role with some very strong attacks. In any night where one of your teammates is pulling off the faction’s attack, you can bite a separate person to weaken them and later to track them if needed. And if needed, you can turn invisible for a night, avoiding all possible danger.");
	});

	register_role(["animated_statue", "animatedstatue", "animated", "statue", "as"], "Evil", "Animated Statue", {subCat: "Protective", spawnCat: evils, spawnRate: 0.5}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930968884603916348/Animated_Statue.png";

		e.setDescription("Just another ugly statue standing around? Those glowing red eyes would beg to differ…");

		e.addField("Alignment", "Common Evil Protective", true);
		e.addField("Origin", "Pixel Dungeon", true);
		e.addField("Fist Version", "Fist of Steel", true);

		e.addField("Armaments (Passive):", "At the start of the game, you will have a random attack modifier assigned to you, which will stick with your for the rest of the game. This modifier could be: Torching, Stunning, or Ranged.");

		e.addField("Statue (Passive, x3):", "You have passive heavy defense.");

		e.addField("Bodyguard (Night, x2):", "Redirect all attacks against your target to yourself.");

		e.addField("Arm (Night, x2):", "Share your attack modifier with your target for this night, combining it with the properties of their own attack.");

		e.addField("Standstill (Day, x1):", "Reroll your attack modifier permanently and provide your other abilities with 1 more ammo.");

		e.addField("Steel Armor (Passive, Fist-Only):", "Every defense applied to you has its tier increased by 1. You are passively immune to injuries.");

		e.addField("Objective:", factions.Evil.goal);

		e.addField("Noodlemire’s Note:", "A bulky role with plenty of utility. You might not be the best attacker, but you can use Standstill if your current modifier doesn’t suit your preferred strategy. Other than that, you can protect your teammates at key moments or work together with your faction’s attacker for a stronger attack than what either of you could perform individually.");
	});

	register_role(["wraith"], "Evil", "Wraith", {subCat: "Support", spawnCat: evils, spawnRate: 0.5}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930968984017326140/Wraith.png";

		e.setDescription("The vengeful spirit of a sinner, using its ethereal nature to bring its own fate upon the living souls of the world.");

		e.addField("Alignment", "Common Evil Support", true);
		e.addField("Origin", "Yet Another PD", true);
		e.addField("Fist Version", "Ethereal Fist", true);

		e.addField("Demonic Connections (Passive):", "Each night, you can talk with the dead in a separate chat. Additionally, you have a shared chat with any allies of yours that die.");

		e.addField("Deathly Defense (Passive, x0):", "You gain ammo for this ability whenever your faction kills someone. It provides you with basic defense.");

		e.addField("Ghastly Blast (Night, x3):", "Hit your target with a ranged weak attack. If they attacked anyone this night, their attack will be reduced to weak tier.");

		e.addField("Horrify (Night, x2):", "Scare off everyone who would attempt to visit your target this night, making them fail their ability. You will learn the number of people scared away. You will not scare away people who are on your side.");

		e.addField("Teleport (Day, x2):", "Choose a player and teleport into their house at the start of the night, forming a private chat with them until the phase ends. Everyone, except for your target, will be unable to target you.");

		e.addField("Ghastly Blight (Night, x3, Fist-Only, Replaces Ghastly Blast):", "Hit your target with a basic attack that stuns them and disables their passive abilities. If they’re stun immune, any attack they perform will still be weakened.");

		e.addField("Objective:", factions.Evil.goal);

		e.addField("Noodlemire’s Note:", "The evil version of the Sad Ghost, sharing many similar abilities. You can very effectively control visiting, ensuring that only you and your fellow faction members have access to certain people. And, if it seems like someone will try to attack your allies, you can blast them to make their attack fail.");
	});

	register_role(["mimic"], "Evil", "Mimic", {subCat: "Investigative", spawnCat: evils, spawnRate: 0.5}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930969387870072883/Mimic.png";

		e.setDescription("A shapeshifter that typically prefers the form of a chest. Likes to lure adventurers into deadly traps.");

		e.addField("Alignment", "Common Evil Investigative", true);
		e.addField("Origin", "Pixel Dungeon", true);
		e.addField("Fist Version", "Golden Fist", true);

		e.addField("Shapeshift (Infinite):", "Choose a new role to appear as. This disguise will last indefinitely until you choose a different disguise.");

		e.addField("Anticipate (Night, x3):", "Gain invincible shell for this night. You will learn the names and roles of anyone who visits you while this is active. If you get attacked, you will gain ammo for Power Shift.");

		e.addField("Power Shift (Night, x0):", "Choose an ability from any role from the faction you were assigned, except for its leader, and use it. You cannot choose passive abilities, or abilities that cannot be refilled.");

		e.addField("Sense of Desire (Night, x2):", "Peek into your target’s objective to learn their alignment, or if they’re a neutral, their role. May be influenced by disguises.");

		e.addField("Transmogrification Blast (Night, x1):", "Disguise your target as any role you choose. This disguise lasts 3 nights before wearing off, which includes the night it was applied.");

		e.addField("Lure (Night, x2, Fist-Only, Replaces Anticipate):", "Gain Ankh-Like Defense. In addition to the other properties of Anticipate, you can choose a person to redirect any attacks they perform to you.");

		e.addField("Objective:", factions.Evil.goal);

		e.addField("Noodlemire’s Note:", "A very tricky role that can keep itself and an ally disguised, or trick another investigator by framing someone as evil. In addition, you can keep yourself armored using Anticipate, though you should be careful not to waste it. If you successfully block attacks using it, you can become far more versatile, using additional abilities depending on which faction you belong to.");
	});
};
