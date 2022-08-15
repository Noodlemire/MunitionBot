module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["warrior", "war"], "Hero", "Warrior", {subCat: "Killing"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930957030032801812/Warrior.png";

		e.setDescription("A fighter coming from a winter land, learning that to defeat foes you have to use defense and rage.");

		e.addField("Alignment", "Hero Killing", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Broken Seal (Passive):", "You have Basic Armor.");

		e.addField("Rage (Passive, x0):", "While you have ammo for this, your attacks have their tier increased by 1. Attacking will reduce its ammo.");

		e.addField("Round Shield (Night, x2):", "Go on defense for this phase. You will gain a tier of defense, and you’ll know the name of one of the people who attacked you, if any. If you do get attacked, you will also gain ammo for “Rage,” otherwise the ammo for this will be wasted.");

		e.addField("Short Sword (Night, Infinite):", "Target someone to hit with a basic attack.");

		e.addField("Throwing Stone (Night, x3):", "Hit someone with a ranged weak attack.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A strong combat-oriented role. If you suspect that someone will attack you, you can anticipate it with your Round Shield, and then finish off whoever attacked you with a Throwing Stone empowered by your Rage, or your Short Sword if they have Basic Armor. Just be careful not to waste your shield when attention isn’t on you.");
	});

	register_role(["mage"], "Hero", "Mage", {subCat: "Support"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/949783693164175390/Mage.png";

		e.setDescription("An old sage that is studying magic. Owner of a powerful staff. Shoots people to support them.");

		e.addField("Alignment", "Hero Support", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Mage’s Staff (Night, Infinite):", "Hit your target with a weak attack.");

		e.addField("Imbue (Day, Infinite):", "Choose one of your Wands (with or without ammo) and delete it. Its effect will be transferred to your Mage's Staff permanently. Any previous effect your Staff had will be lost forever. Your Staff will always have Infinite Ammo.");

		e.addField("Wand of Prismatic Light (Night, x1):", "Hit your target with a weak attack. If they die and appear to be evil, they will be torched. This ability automatically refills itself 2 nights after depletion. If Imbued, Enchant will grant the Torching modifier.");

		e.addField("Wand of Lightning (Night, x1):", "Hit your target with a ranged weak attack. If they also visit you, you will hit yourself too. This ability automatically refills itself 2 nights after depletion. If Imbued, Enchant will grant the Ranged modifier.");

		e.addField("Wand of Transfusion (Night, x1):", "Stun your target and give them heavy armor. If they get attacked, you will gain basic armor. This ability automatically refills itself 2 nights after depletion. If Imbued, Enchant will grant the Stunning modifier.");

		e.addField("Enchant (Night, x2):", "Provide someone with a modifier based on the wand inside your Mage's Staff. Has no effect if you haven't Imbued any yet. This will apply to any and all abilities they use this night.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A multi-purpose support role that choose its specialty depending on the situation. You should imbue at least one wand to make full use of your abilities, but be careful not to do so too early. If you change your mind and imbue a different wand, you can permanently strip yourself of the previously imbued wand. Which is most important to you: Attacking people to investigate them, weakening players without fear of spread attacks, or stunning people to protect them?");
	});

	register_role(["rogue"], "Hero", "Rogue", {subCat: "Protective"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930957702056771624/Rogue.png";

		e.setDescription("A stealthy rogue that stole a shadowy cloak. He trained to strike the foe before it can do any harm.");

		e.addField("Alignment", "Hero Protective", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Cloak of Shadows (Passive, x1):", "If someone attempts to target you with any ability at Night, you will automatically turn invisible. You’ll be notified when this activates. Automatically refills itself 3 nights after use, but it cannot be refilled by any other means.");

		e.addField("Protective Shadows (Passive, x0):", "This gains ammo whenever you turn invisible. Grants basic armor.");

		e.addField("Guard (Night, Infinite):", "Choose a target. Anyone attempting to attack them will be redirected to you instead.");

		e.addField("Cover (Night, x3):", "Choose a target. If someone tries to visit them and attack them, you will hit that attacker with a Surprise Attack. If you kill them, their attack will fail. Otherwise, they will succeed in attacking your target.");

		e.addField("Track (Night, x2):", "Learn who a player visits and gets visited by during this Night.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A quite elusive protector with a wide range of skills. Early on, you should rely on skills like Cover and Track more to help your allies. Your Guard ability should be used a little more sparingly, as your actual defense is limited even after your Cloak of Shadows activates a few times.");
	});

	register_role(["huntress", "hunt"], "Hero", "Huntress", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930957844843470878/Huntress.png";

		e.setDescription("A strong woman with a good sense of justice, who has extra senses that help her find enemies.");

		e.addField("Alignment", "Hero Investigative", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Heightened Senses (Passive):", "At the end of each night, you will learn of the names of each player who was visited by a player who appears evil.");

		e.addField("Barkskin (Passive, x1):", "Provides basic defense. If this has no ammo left, you may refill it by Resting.");

		e.addField("Huntress Intuition (Night, x3):", "Learn the alignment of your target's role or disguise.");

		e.addField("Spirit Bow (Night, x2):", "Hit someone with a ranged basic attack. Does not require or use ammo if used in the night after using Huntress Intuition on your target.");

		e.addField("Eavesdrop (Night, x2):", "Choose a player. In the following day, you will overhear all whispers sent to and from your target, including the names of senders and recipients.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A good investigative role, but one that can be easily fooled if you’re not careful. Your ears will often be more reliable than your Intuition. Pay close attention to what people say when they think you aren’t listening, and check their alignment only when you’re sure they won’t have a disguise up.");
	});

	register_role(["gunslinger", "gun"], "Hero", "Gunslinger", {subCat: "Killing"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930961522073673758/Gunslinger.png";

		e.setDescription("A retired sheriff, who kept his gun with him the whole time. Now he’s ready to dispense justice like the old days, one bullet at a time.");

		e.addField("Alignment", "Unique Hero Killing", true);
		e.addField("Origin", "Moonshine PD", true);

		e.addField("Shared Ammunition (Passive, x3):", "Your other abilities rely on this one for ammo, when marked with \"(Ammo)\"");

		e.addField("Chainmail Coat (Passive, x2):", "You have passive basic armor.");

		e.addField("Disassemble (Day, Infinite):", "Deplete 1 ammo from Chainmail Coat in order to add 2 ammo to Shared Ammunition. Requires Chainmail Coat to have ammo left.");

		e.addField("Cripple (Night, Ammo):", "Shoot your target with a weak attack that ignores armor. This will stun them as well.");

		e.addField("Pistol (Night, Ammo):", "Hit your target with a ranged surprise attack.");

		e.addField("Blunderbuss (Night, 2x Ammo):", "Hit your target with a grim attack.");

		e.addField("Judgement Shot (Night, 1x):", "Reveal yourself and shoot your target with a ranged divine attack. If they die, their true role will also be revealed. If they were a hero, you will die as well. This ability cannot be refilled.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A very strong killer as long as you can manage your limited ammo. Although you pack a lot of power, you have little in terms of defense, so it might be wise to hide your identity until later. And of course, pick your targets carefully, especially when it comes to your Judgement Shot.");
	});

	register_role(["plague_doctor", "plaguedoctor", "plague", "doctor", "pd"], "Hero", "Plague Doctor", {subCat: "Support"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930962534821945375/PlagueDoctor.png";

		e.setDescription("A friendly doctor that prepared various kinds of drugs. He studied medicine to find various diseases, so it’s time to put that work on the test!");

		e.addField("Alignment", "Hero Support", true);
		e.addField("Origin", "Remixed Dungeon", true);

		e.addField("Rat Armor (Passive, x2):", "You have basic defense. Cannot be refilled.");

		e.addField("Dissect (Night, Infinite):", "Choose someone who died. You will learn their cause of death and the category of their true role. Depending on which category it is, you will gain ammunition for one of your other abilities. You cannot dissect the same person twice.");

		e.addField("Flask of Poison (Night, x1):", "Stun your target and deal a weak attack to them. Gained when dissecting killing roles.");

		e.addField("Flask of Energy (Night, x0):", "Grant 1 more ammo to each of your target's abilities. Gained when dissecting support roles.");

		e.addField("Flask of Life (Night, x1):", "Heal your target of their injuries and give them basic armor. You may use this on yourself instead. Gained when dissecting protective roles.");

		e.addField("Flask of Clarity (Night, x0):", "Choose a target. They will know the names of anybody else who visited them in this night. They won't be told your name. Gained when dissecting investigative roles.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A multi-purpose support role, but one that has very limited use if nobody has died yet. You may want to prioritize dissecting people of a specific category first, to gain ammo for whichever flask you find the most useful.");
	});

	register_role(["priestess", "priest", "pri"], "Hero", "Priestess", {subCat: "Protective"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930963655258947634/Priestess.png";

		e.setDescription("A worker of the local church. She channels the divine to protect her believers.");

		e.addField("Alignment", "Hero Protective", true);
		e.addField("Origin", "Cursed PD", true);

		e.addField("Faith is My Armor (Passive, x3):", "You have passive heavy armor and corruption immunity. This becomes disabled during any night where you target an evil player with Godly Radiance. You will not be notified of this. Not effected by disguises.");

		e.addField("Holy Revelation (Night, x3):", "Scan exactly 5 players to learn which faction(s) have the highest numbers within that group. Or, scan exactly 3 players to learn if the majority are Heroes or Non-Heroes. Counts as Ranged.");

		e.addField("Godly Radiance (Night, x2):", "Give someone basic defense, stun immunity, and corruption immunity. If someone tries to attack your target, ammo will not be consumed for this ability.");

		e.addField("Burning Light (Night, x1):", "Deal a spread basic attack to your target. Anyone who survives it will not be injured. You will be hit as well. Can’t be used in Night 1.");

		e.addField("Healing Light (Night, x1):", "Provide spread basic armor and injury immunity to your target. This will also heal previous injuries. You will be affected as well.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "This role likes to work in bulk. It investigates, attacks, and defends groups of people at once. Be careful if you do decide to protect a single person, as you’re left extremely vulnerable if you defend the wrong person. Other than that, you’re one of the bulkier hero roles, so you probably won’t have to worry about dying early.");
	});

	register_role(["sad_ghost", "sadghost", "sad", "ghost", "sg"], "Hero", "Sad Ghost", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930964576227446834/SadGhost.png";

		e.setDescription("The spirit of a lost adventurer trapped inside of a rose. They carry the rose of their lover around, in hopes that the spirits of the dead can help everyone find their true love.");

		e.addField("Alignment", "Hero Investigative", true);
		e.addField("Origin", "Pixel Dungeon", true);

		e.addField("Spiritual Connections (Passive):", "The holder of your Dried Rose cannot kill or injure you. Additionally, you can communicate with the dead each night in a separate chat.");

		e.addField("Dried Rose (Night, x1):", "Secretly plant a rose on someone. Whenever the rose holder targets someone with a non-spread ability, the rose will move along to their target. If the holder of the rose dies without passing it along, or they pass it to you, you will be notified of where the rose went, and when.");

		e.addField("Haunt (Night, x2):", "Scare off anyone who would attempt to visit your target this night, making them fail their ability. You will learn the number of people scared away.");

		e.addField("Teleport (Day, x2):", "Choose a player and teleport into their house at the start of the night, forming a private chat with them until the phase ends. Everyone, except for your target, will be unable to target you.");

		e.addField("Possess (Night, x1):", "Learn the true role of someone who has died. In the next day, you can choose one of their abilities to copy, which will always be limited to 1 ammo. You cannot copy abilities that cannot be refilled. This ability cannot be refilled.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A mobile and flexible investigator, able to gather a lot of unique information and control the map itself. Though you lack armor, you can often teleport away from danger. Just be careful of who you teleport into, as they can still kill you if you’re not careful.");
	});

	register_role(["trapper", "trap"], "Hero", "Trapper", {subCat: "Protective"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930965346763022336/Trapper.png";

		e.setDescription("An explorer who had gotten an interesting idea during his time in the dungeon. He “reclaimed” the traps around him, to use them against his enemies.");

		e.addField("Alignment", "Hero Protective", true);
		e.addField("Origin", "Shattered Trap Dungeon", true);

		e.addField("Reclaim (Passive):", "At the start of each night, you will discover and take a new trap for yourself. When you use it later, you can choose a player to trap, and it’ll count as ranged. That trap will then activate against anyone who visits your target, at which point it’ll disappear. It can’t be activated in the same night that you set it, but it’ll last indefinitely, and you can have many traps active at once. You may put a trap on yourself. You will be notified when a trap is activated, but you won’t know know who triggered it unless specified otherwise.");

		e.addField("Trap Armor (Passive, x2):", "You have basic armor. Each time you survive an attack, you’ll gain ammo for another random trap.");

		e.addField("Alarm Trap (Night, x1):", "You will be notified of the names of every player who triggered this trap.");

		e.addField("Blizzard Trap (Night, x1):", "Affected players will become stunned and immune to torching.");

		e.addField("Disrobing Trap (Night, x0):", "Affected players will have their passive abilities disabled for that night.");

		e.addField("Explosive Trap (Night, x0):", "Deals a basic attack to all affected players. If this was set on a player, they will be affected too. Players that this kills will fail their actions.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A defensive role geared for long-term support and preparation. While you’re limited by the RNG of which traps you can find, you can make up for it by planning ahead with whichever traps you find. Note that you’re able to set multiple traps on the same player to stack their effects once they’re triggered.");
	});

	register_role(["fuurai"], "Hero", "Fuurai", {subCat: "Support"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930966508019015682/Fuurai.png";

		e.setDescription("An honorable traveler that collected magical artifacts named pots. Reserved, but not afraid to show off his true power.");

		e.addField("Alignment", "Unique Hero Support", true);
		e.addField("Origin", "Fushigi-No PD", true);

		e.addField("Reserved (Passive):", "The tier of your defense is equal to the total amount of ammo you have across all of your abilities. When you are attacked, you will lose ammo for a random ability, if any is left. None of your abilities can be refilled.");

		e.addField("Pot of Storage (Day, x1):", "Jail EVERY living player. Nobody will be able to perform any actions in the next night, not even to whisper. This jail allows everyone to talk in it and acts as a special phase in which you can vote for someone to be lynched.");

		e.addField("Pot of Transmutation (Night, x1):", "You will corrupt and randomize your target’s role. Their new role will be chosen randomly based on their assigned slot in the Role Spread. They will have the default ammo for that role. Fails against Evil Faction Leaders.");

		e.addField("Pot of Restructure (Night, x1):", "Your target’s ammo counts will return to their default values, regardless of if those were higher or lower than their current amounts. Does not affect abilities that cannot be refilled.");

		e.addField("Pot of Identify (Night, x1):", "Learn the role slot of your target. If they’re disguised, they will always show up as a random slot that would be capable of holding their disguise’s role. However, if they’re the Random Any slot, that is the only one they can show up as.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A powerful role with many unique effects and abilities. While your passive means that you shouldn’t use your abilities too early, you also shouldn’t wait too long before using them, either. It can be very bad if one of your important pots is destroyed because you were attacked.");
	});

	register_role(["performer", "perf"], "Hero", "Performer", {subCat: "Killing"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/949790958248140810/Performer.png";

		e.setDescription("A man of the circus, well trained in dangerous and acrobatic arts, and armed with the strongest weapon of all: Music.");

		e.addField("Alignment", "Hero Killing", true);
		e.addField("Origin", "SPecial Surprise PD", true);

		e.addField("Glass Shield (Passive, x1):", "The first attack against you that's above Basic tier gets reduced to Basic tier. Excludes Erasing attacks.");

		e.addField("Dexterity (Passive, x4):", "Basic armor and stun immunity. Only attacks deplete ammo, but the stun immunity does require you to at least have it.");

		e.addField("Triangolo (Night, x2):", "Hit your target with a spread basic attack.");

		e.addField("Jump Shoes (Day, x2):", "Choose a player and jump into their house at the start of the night, forming a private chat with them until the phase ends. Everyone, except for your target, will be unable to target you.");

		e.addField("Pickaxe (Night, Infinite):", "Stun a target. Reduce their armor by 1 tier for this night, or get notified if their armor is already 0. If someone else hits your target, you will gain ammo for Triangolo.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A killing role with a mixture of crowd control and armor-piercing capability. Communication is vital to avoid killing a bunch of allies at once. You can also use your pickaxe to test someone who claims that they don't have any armor.");
	});

	register_role(["exile"], "Hero", "Exile", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/949790978913501265/Exile.png";

		e.setDescription("A former criminal, returning to town after a few years away. Turns out, he was just in time for the invasion of evils. Now, he can bring a little foreign expertise to the town.");

		e.addField("Alignment", "Hero Investigative", true);
		e.addField("Origin", "Darkest PD", true);

		e.addField("Outside Perspective (Passive):", "Your alignment passively appears to be part of this game's evil faction. At the start of each day, you will be notified with the number of remaining evils alive.");

		e.addField("Heavy Tolerance (Passive, x0):", "You have passive basic armor and stun immunity. Ammo for this ability is only lost if it blocks a stun attempt.");

		e.addField("Humanity (Day, x4):", "Instantly heal yourself of injuries and give yourself ammo for Heavy Tolerance. However, your next Dirty Trick will target someone at random, which may be yourself. You will know who this made you target. This effect may stack if you use it many times in a row.");

		e.addField("Dirty Trick (Night, x3):", "Select a target and a role. The next time an evil player investigates your target, their results will be based on the role you chose, instead of the true role. You will learn the category of your target's true role.");

		e.addField("The Great Blueprint (Night, x1):", "At the end of this night, you will learn of all visits that occured during this phase. Your results will be scrambled if you used Humanity in the previous night. Can’t be used Night 1. Cannot be refilled.");

		e.addField("Objective:", factions.Hero.goal);

		e.addField("Noodlemire’s Note:", "A powerful but difficult role to play, as it's very easy for evils to claim, but hard to truly prove that you're not lying. However, if you're careful, you can catch a lot of evils when they die or get caught by your Dirty Trick.");
	});
};
