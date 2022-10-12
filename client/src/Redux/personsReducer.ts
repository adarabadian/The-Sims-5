import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { Person } from '../Models/Person';
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

		decreasePersonStats: (state, action) =>{
			let personIndex = getActivePersonIndex(state)
			let personCopy = {...state.persons[personIndex]};

			personCopy.stats.hunger  	= Number((personCopy.stats.hunger  - 0.2).toFixed(2));
			personCopy.stats.social  	= Number((personCopy.stats.social  - 0.1).toFixed(2));
			personCopy.stats.energy  	= Number((personCopy.stats.energy  - 0.1).toFixed(2));
			personCopy.stats.fun 	 	= Number((personCopy.stats.fun	   - 0.2).toFixed(2));
			personCopy.stats.hygene  	= Number((personCopy.stats.hygene  - 0.15).toFixed(2));
			personCopy.stats.bladder 	= Number((personCopy.stats.bladder - 0.2).toFixed(2));
			
			state.persons[personIndex] = personCopy;
		},

		getActivePerson: (state, action) =>{
			state.persons.map(person => person.isActive).indexOf(true)
		}

        // setGameData: (state, action) => {
        //     const index = state.gamesArray.findIndex(game => 
        //         action.payload.id == game.id
        //     );
       
        //   state.gamesArray[index] = action.payload;
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(getGames.fulfilled, (state, action: any) => {
        //     state.gamesArray = action.payload;
        // })
    }
})

export const {setPersonStat, decreasePersonStats, getActivePerson} = personsSlice.actions
export const selectPersons = (state: RootState) => state.personsState.persons
export default personsSlice.reducer