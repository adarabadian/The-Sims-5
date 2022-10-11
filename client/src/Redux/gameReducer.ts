import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RootState} from './store';

// export const getGames = createAsyncThunk('GamesState/getGames',
//     async (token : string, thunkAPI) => {
//         try {
//             if (token == ''){
//                 axios.defaults.headers.common['authorization'] = null;
//             } else{
//                 axios.defaults.headers.common['authorization'] = "Bearer " + token;
//             }
//             const response = await axios.get("https://adar-gamerank.herokuapp.com/games");
//             return response.data;
//         } catch (err: any) {
//             if (err.response.data.error !== undefined){
//                 toast.error(err.response.data.error);
//             }
//             toast.error(err);         
//         }
//     }
// )

// Define a type for the slice state
interface GameState {
    clock : { 
		days : number,
		hours : number,
		minutes : number
	},
}

// Define the initial state using that type
const initialState: GameState = {
    clock :{
		days : 0,
		hours : 0,
		minutes : 0
	},
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // setGamesArray: (state, action) => {
        //     state.gamesArray = action.payload;
        // },
        // setGameData: (state, action) => {
        //     const index = state.gamesArray.findIndex(game => 
        //         action.payload.id == game.id
        //     );
       
        //   state.gamesArray[index] = action.payload;
        // }
		runClock: (state, action) =>{
			let clock = {...state.clock}
			clock.minutes++;

			if (clock.minutes == 60){
				clock.hours++;
				clock.minutes = 0;
				if (clock.hours == 24){
					clock.days++;
					clock.hours = 0;
				}
			}
			
			state.clock = clock;
		}
    },
    extraReducers: (builder) => {
        // builder.addCase(getGames.fulfilled, (state, action: any) => {
        //     state.gamesArray = action.payload;
        // })
    }
})

export const {runClock} = gameSlice.actions
export const selectGames = (state: RootState) => state.gameState
export default gameSlice.reducer