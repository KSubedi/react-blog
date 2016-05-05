import {FETCH_SINGLE, CLEAR_CURRENT} from "../actions";

const INITIAL_STATE = null

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		default:
			return state;
		case FETCH_SINGLE:
			return action.payload.data;
		case CLEAR_CURRENT:
			return null;
	}
}