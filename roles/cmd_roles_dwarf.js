module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["dwarf_king", "dwarfking", "king", "dk"], "Dwarf", "Dwarf King", {subCat: "Protective", cannotRoll: true}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930974807703584879/DwarfKing.png";

		e.setDescription("A necromancer that took full control of the dwarven city and tasked himself with making sure the demon god that his warlocks summoned does not devour the world.");

		e.addField("Alignment", "Unique Dwarf Protective", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Dwarf Lord (Passive):", "You have basic armor, corruption immunity, and stun immunity. While you are alive, dead dwarves can still talk in the Dwarf Chat. Your abilities are Ranged.");

		e.addField("Life Link (Night, x4):", "Link yourself with your target. Both of you will gain injury immunity. Whenever either of your get attacked, the attack hits both of you but has its tier halved, rounded down. Weak attacks will fail.");

		e.addField("Soul Drain (Night, x0):", "Deal the equivalent of a surprise attack to your target. If they would die, they will instead be corrupted into a Dwarven Ghoul. Gets one ammo at the start of every even-numbered night.\n- Dwarven Ghoul (Support): Has the infinite ability to roleblock someone once per night. No other passives or abilities.");

		e.addField("Bone Shield (Night, x2):", "Select a target, which may be yourself. Your target gains heavy armor, and any other defensive buff they recieve will have its tier increased by 1.");

		e.addField("Objective:", factions.Dwarf.goal);

		e.addField("Noodlemire’s Note:", "The defensive leader of the dwarves, with the unique ability to convert enemies into allies to do your bidding. Ghouls may be simple in nature, but being able to roleblock anyone is still a strong tool, in addition to potentially giving yourself a “confirmed townie” as a partner.");
	});

	register_role(["dwarf_monk", "dwarfmonk", "monk", "dm"], "Dwarf", "Dwarf Monk", {subCat: "Killing"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930975343681085450/DwarfMonk.png";

		e.setDescription("A puritan dwarf, opposed to all magic other than his king’s. Though he fights unarmed, his martial arts training turns him into a formidable foe.");

		e.addField("Alignment", "Dwarf Killing", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Trained Reflexes (Passive, x1):", "You have passive basic defense when you aren’t using Monk’s Focus.");

		e.addField("Double Strike (Passive):", "As the designated attacker, you hit your opponent two times with basic attacks. You can still only choose one person to attack.");

		e.addField("Monk’s Focus (Night, x4):", "Give yourself heavy defense for this night. In addition, a random non-dwarf player that visits you will be hit with a surprise attack. Whenever this ability kills someone, you will gain ammo for Disarming Attack. You will learn the name of whoever you attack using this ability.");

		e.addField("Disarming Attack (Night, x1):", "Hit your target with a basic attack. If they try to attack anyone, their attack will fail.");

		e.addField("Concentrate (Night, x1):", "After using this ability, the next attack you perform using any ability will ignore armor.");

		e.addField("Objective:", factions.Dwarf.goal);

		e.addField("Noodlemire’s Note:", "A destructive role with a mixture of defense and armor-piercing abilities. Although you can benefit greatly from attention, you should be careful not to abuse your abilities and reveal yourself. If no attention is on you, you can instead break through people’s defensive passives by attacking them multiple times per night, or outright ignore their defense a single time.");
	});

	register_role(["golem"], "Dwarf", "Golem", {subCat: "Protective"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930975669674967110/Golem.png";

		e.setDescription("A resilient stone golem built using the soul of an earthen elemental.");

		e.addField("Alignment", "Dwarf Protective", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Stone Body (Passive, x2):", "You have passive heavy armor.");

		e.addField("Guard (Night, Infinite):", "Select a target. Any attack directed at them will be redirected to yourself instead.");

		e.addField("Warping Blast (Night, x3):", "Select a target. They will be redirected to a different player at random.");

		e.addField("Self-Repair (Night, x2):", "Grant 2 more ammo for your Stone Body. You can only use this ability if Stone Body is out of ammo, and the defense will not protect you in the same Night that you use this.");

		e.addField("Self-Destruct (Night, x1):", "Hit your target with a Divine Attack, and yourself with an Erasing Attack. You can only use this if Stone Body is out of ammo.");

		e.addField("Objective:", factions.Dwarf.goal);

		e.addField("Noodlemire’s Note:", "A defensive role that can take a lot of punishment, as long as it can keep up the self repairs. You can protect an ally directly, or mess with an important enemy by forcing their action to fail and making them go to someplace they probably wouldn’t want to be. And if all else fails, you can sacrifice yourself to destroy a key enemy.");
	});

	register_role(["dwarf_warlock", "dwarfwarlock", "warlock", "dw"], "Dwarf", "Dwarf Warlock", {subCat: "Support"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930975690759733248/DwarfWarlock.png";

		e.setDescription("A dwarf corrupted by evil magic. They work on making their targets much weaker by using the most hated mechanics people have ever seen.");

		e.addField("Alignment", "Dwarf Support", true);
		e.addField("Origin", "Shattered PD", true);

		e.addField("Dark Barrier (Passive, x0):", "Provides passive basic defense once it has ammo.");

		e.addField("Ritual (Night, Infinite):", "Provide ammo to one of the below abilities at random.");

		e.addField("Degrading Bolt (Night, x2):", "Drain 1 ammo from up to 3 of your target’s abilities at random. If they already have no ammo left across all of their abilities, you will instead roleblock them. Whenever you drain 3 total ammo from your target, you will gain 1 ammo for Dark Barrier.");

		e.addField("Silencing Bolt (Night, x1):", "Silence your target at the start of the next Day. Using this will also provide 1 ammo to Dark Barrier.");

		e.addField("Weakening Bolt (Night, x1):", "Weaken your target without notifying them. The next time they attack, their tier will be reduced by 1, and if they used a weak attack, it will instead fail. This effect can last indefinitely until they attack. Once they attack, you will be notified and gain 1 ammo for Dark Barrier.");

		e.addField("Objective:", factions.Dwarf.goal);

		e.addField("Noodlemire’s Note:", "A very disruptive role that starts out frail, but can accumulate a large number of ammo for its defense if used right. You can completely shut down various people using your abilities, possibly even permanently if you can take all of their ammo.");
	});

	register_role(["dwarf_lich", "dwarflich", "lich", "dl"], "Dwarf", "Dwarf Lich", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930976401853677609/Dwarf_Lich.png";

		e.setDescription("Although it has the title of “Lich”, this wizard’s real purpose is to house a part of the King’s soul, allowing him to survive death itself. As a side effect, this gives it an attunement to other people’s souls.");

		e.addField("Alignment", "Dwarf Investigative", true);
		e.addField("Origin", "Sprouted PD", true);

		e.addField("Walking Phylactery (Passive, x1):", "For a single Night, if the Dwarf King is about to die, all attacks will be redirected to yourself instead. This can allow the Dwarf King to survive a Lynch, but if it does, both his role and your own will be revealed.");

		e.addField("Soul Shield (Passive, x1):", "You have passive heavy defense. Whenever any Dwarf other than the King dies, this gains 1 ammo.");

		e.addField("Soul Read (Night, x5):", "Investigate someone to learn one of the following, of your choice: Which role they appear as, their current defense and ammo levels, or everyone they have targeted and been targeted by up to this point.");

		e.addField("Power of Death (Night, x2):", "Choose a target. You will use a basic attack against everyone else who tries to visit them. Whenever someone gets attacked by this, you will learn their name and gain ammo for Soul Shield.");

		e.addField("Soul Spy (Night, x1):", "Use all of the Soul Read options at once against a single target. This ability is ranged, but cannot be refilled.");

		e.addField("Objective:", factions.Dwarf.goal);

		e.addField("Noodlemire’s Note:", "A role with only a limited ability to directly help the other dwarves. Aside from its passive ability to protect the King, it can gather a lot of information. In particular, knowing someone’s defense level can let you know if it’s a good idea to use a regular attack against them, or if they’ll need something stronger.");
	});
};
