import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../Models/Person";
import { Stats } from "../Models/Stats";
import {
	getActivePersonIndex,
	handleSkillLevelUp,
	decreaseStats,
} from "./personsActions";
import { RootState } from "./store";

interface PersonsState {
	// person : Person
	persons: Array<Person>;
}

// Define the initial state using that type
const initialState: PersonsState = {
	// person : new Person(),
	persons: [new Person()],
};

export const personsSlice = createSlice({
	name: "persons",
	initialState,
	reducers: {
		setPersonStat: (state, action) => {
			let statToSet = action.payload[0];
			let precentage = action.payload[1];

			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };

			personCopy.stats[statToSet as keyof Stats] = precentage;
			state.persons[personIndex] = personCopy;
		},

		increasePersonSkill: (state, action) => {
			let skillToSet = action.payload[0];
			let precentage = action.payload[1];

			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };

			personCopy = handleSkillLevelUp(
				state,
				personCopy,
				skillToSet,
				precentage
			);
			state.persons[personIndex] = personCopy;
		},

		decreasePersonStats: (state) => {
			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };

			personCopy.stats = decreaseStats(personCopy.stats);
			state.persons[personIndex] = personCopy;
		},

		getActivePerson: (state) => {
			state.persons.map((person) => person.isActive).indexOf(true);
		},

		addToTaskQueue: (state, action) => {
			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };

			personCopy.tasksQueue.push(action.payload);
			state.persons[personIndex] = personCopy;
		},

		shiftQueue: (state) => {
			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };

			personCopy.tasksQueue.shift();
			state.persons[personIndex] = personCopy;
		},

		updatePersonTasks: (state, action) => {
			let personIndex = getActivePersonIndex(state);
			let personCopy = { ...state.persons[personIndex] };
			if (personCopy.tasksQueue[0] != action.payload[0]) {
				personCopy.isCancelTask = true;
			}

			personCopy.tasksQueue = action.payload;
			state.persons[personIndex] = personCopy;
		},
	},

	extraReducers: (builder) => {
		// builder.addCase(addToTaskQueue.fulfilled, (state, action: any) => {
		//	 state.TaskQueue = action.payload;
		// })
	},
});

export const {
	setPersonStat,
	decreasePersonStats,
	getActivePerson,
	increasePersonSkill,
	addToTaskQueue,
	shiftQueue,
	updatePersonTasks
} = personsSlice.actions;
export const selectPersons = (state: RootState) => state.personsState.persons;
export default personsSlice.reducer;
