import {FETCH_POSTS} from "../actions";

const INITIAL_STATE = {
	all: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		default:
			return state;
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
	}
}