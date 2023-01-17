import { Person } from "../Models/Person";
import { Skills } from "../Models/Skills";
import { Stats } from "../Models/Stats";

function getActivePersonIndex(state: any) {
	return state.persons.map((person: Person) => person.isActive).indexOf(true);
}

function handleSkillLevelUp(
	state: any,
	personCopy: Person,
	skillToSet: String,
	precentage: number
) {
	precentage =
		(precentage / personCopy.skills[skillToSet as keyof Skills].level) *
		1.5;

	if (personCopy.skills[skillToSet as keyof Skills].level < 10) {
		personCopy.skills[skillToSet as keyof Skills].xp += precentage;
		if (personCopy.skills[skillToSet as keyof Skills].xp > 99) {
			personCopy.skills[skillToSet as keyof Skills].xp =
				personCopy.skills[skillToSet as keyof Skills].xp - 100;
			personCopy.skills[skillToSet as keyof Skills].level++;
		}
	}

	return personCopy;
}

function decreaseStats(stats: Stats) {
	stats.hunger = Number((stats.hunger - 0.12).toFixed(2));
	stats.social = Number((stats.social - 0.11).toFixed(2));
	stats.energy = Number((stats.energy - 0.08).toFixed(2));
	stats.fun = Number((stats.fun - 0.15).toFixed(2));
	stats.hygene = Number((stats.hygene - 0.14).toFixed(2));
	stats.bladder = Number((stats.bladder - 0.13).toFixed(2));

	return stats;
}

export { getActivePersonIndex, handleSkillLevelUp, decreaseStats };
