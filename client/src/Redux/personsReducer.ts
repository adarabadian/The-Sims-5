import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { number } from 'prop-types';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { Person } from '../Models/Person';
import { Skills } from '../Models/Skills';
import { Stats } from '../Models/Stats';
import { RootState} from './store'

interface PersonsState {
    // person : Person
	persons: Array<Person>
}

// Define the initial state using that type
const initialState : PersonsState = {
	// person : new Person(),
	persons: [new Person()]
}

function getActivePersonIndex (state : PersonsState){
	return state.persons.map(person => person.isActive).indexOf(true);
}

function handleSkillLevelUp (state : PersonsState, personCopy : Person, skillToSet : String, precentage: number){
	precentage = (precentage / personCopy.skills[skillToSet as keyof Skills].level * 1.5);

	if (personCopy.skills[skillToSet as keyof Skills].level < 10 ){
		personCopy.skills[skillToSet as keyof Skills].xp += precentage;
		if (personCopy.skills[skillToSet as keyof Skills].xp > 99){
			personCopy.skills[skillToSet as keyof Skills].xp = personCopy.skills[skillToSet as keyof Skills].xp - 100;
			personCopy.skills[skillToSet as keyof Skills].level++;
		}
	}

	return personCopy;
}

function decreaseStats (stats : Stats){
	stats.hunger  	= Number((stats.hunger  - 0.12).toFixed(2));
	stats.social  	= Number((stats.social  - 0.11).toFixed(2));
	stats.energy  	= Number((stats.energy  - 0.08).toFixed(2));
	stats.fun 	 	= Number((stats.fun	    - 0.15).toFixed(2));
	stats.hygene  	= Number((stats.hygene  - 0.14).toFixed(2));
	stats.bladder 	= Number((stats.bladder - 0.13).toFixed(2));

	return stats;
}

export const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        setPersonStat: (state, action) => {
        	let statToSet = action.payload[0];
        	let precentage = action.payload[1];

			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};

			personCopy.stats[statToSet as keyof Stats]  = precentage;
			state.persons[personIndex] = personCopy;
		},

		increasePersonSkill:(state, action) =>{
        	let skillToSet = action.payload[0];
        	let precentage = action.payload[1];

			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};
			
			personCopy = handleSkillLevelUp (state, personCopy, skillToSet, precentage);
			state.persons[personIndex] = personCopy;
		},

		decreasePersonStats: (state, action) =>{
			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};

			personCopy.stats = decreaseStats(personCopy.stats);
			state.persons[personIndex] = personCopy;
		},

		getActivePerson: (state, action) =>{
			state.persons.map(person => person.isActive).indexOf(true)
		},

		addToTaskQueue: (state, action) =>{
			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};

			personCopy.tasksQueue.push(action.payload);
			state.persons[personIndex] = personCopy;
		},

		shiftQueue: (state) =>{
			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};

			personCopy.tasksQueue.shift();
			state.persons[personIndex] = personCopy;
		},
    },
    extraReducers: (builder) => {
        // builder.addCase(getGames.fulfilled, (state, action: any) => {
        //     state.gamesArray = action.payload;
        // })
    }
})

export const {setPersonStat, decreasePersonStats, getActivePerson, increasePersonSkill, addToTaskQueue, shiftQueue, } = personsSlice.actions
export const selectPersons = (state: RootState) => state.personsState.persons
export default personsSlice.reducer