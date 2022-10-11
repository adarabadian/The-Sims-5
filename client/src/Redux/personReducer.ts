import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Person } from '../Models/Person';
import { Stats } from '../Models/Stats';
import { RootState} from './store'

interface PersonState {
    person : Person
}

// Define the initial state using that type
const initialState : PersonState = {
	person : new Person()
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPersonStat: (state, action) => {
        	let statToSet = action.payload[0];
        	let precentage = action.payload[1];
			let personCopy = {...state.person}
			personCopy.stats[statToSet as keyof Stats]  = precentage;
			state.person = personCopy;
		},

		decreasePersonStats: (state, action) =>{
			let personCopy = {...state.person};
			personCopy.stats.hunger  	= Number((personCopy.stats.hunger  - 0.2).toFixed(2));
			personCopy.stats.social  	= Number((personCopy.stats.social  - 0.1).toFixed(2));
			personCopy.stats.energy  	= Number((personCopy.stats.energy  - 0.1).toFixed(2));
			personCopy.stats.fun 	 	= Number((personCopy.stats.fun	   - 0.2).toFixed(2));
			personCopy.stats.hygene  	= Number((personCopy.stats.hygene  - 0.15).toFixed(2));
			personCopy.stats.bladder 	= Number((personCopy.stats.bladder - 0.2).toFixed(2));
			state.person = personCopy;
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

export const {setPersonStat, decreasePersonStats} = personSlice.actions
export const selectPerson = (state: RootState) => state.personState
export default personSlice.reducer