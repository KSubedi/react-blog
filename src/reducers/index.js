import { combineReducers } from 'redux';
import {reducer as FormReducer} from "redux-form";

import PostsReducer from "./posts_reducer";
import SinglePostReducer from "./single_post_reducer";


const rootReducer = combineReducers({
  posts: PostsReducer,
  currentPost: SinglePostReducer,
  form: FormReducer
});

export default rootReducer;
