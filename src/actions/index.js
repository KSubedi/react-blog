import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE = 'FETCH_SINGLE';
export const CREATE_POSTS = 'CREATE_POSTS';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = "http://reduxblog.herokuapp.com/api"; 
// const API_KEY = "";
const API_KEY = "?key=a90sd8h9ae0f8has0dj";

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POSTS,
		payload: request
	}
}

export function fetchSinglePost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_SINGLE,
		payload: request
	}
}

export function clearCurrentPost(){
	return {
		type: CLEAR_CURRENT,
		payload: true
	}
}

export function deletePost(id){
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	}
}