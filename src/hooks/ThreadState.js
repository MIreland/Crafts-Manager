import React, { useReducer } from 'react';
import threadContext from './threadContext';
import threadReducer from './threadReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const ThreadState = (props) => {
	const initialState = {
		threads: [],
		thread: {},
		patterns: [],
		loading: false
	};

	const [ state, dispatch ] = useReducer(ThreadReducer, initialState);
	// SEARCH_THREADS
	// GET_THREAD
	// CLEAR_THREADS = 'CLEAR_THREADS';
	// GET_PATTERNS = 'GET_PATTERNS';
	// SET_LOADING = 'SET_LOADING';
	// SET_ALERT = 'SET_ALERT';
	// REMOVE_ALERT = 'REMOVE_ALERT';

	// Search threads
	const searchThreads = async (dmc) => {
		setLoading();

		const res = dispatch({
			type: SEARCH_USERS,
			payload: dmc
		});
	};

	// Get User
	const getThread = (dmc) => {
		setLoading();

		const res = dispatch({
			type: GET_USER,
			payload: dmc
		});
	};

	// Get Patterns
	const getPatterns = (name) => {
		setLoading();

		const res = dispatch({
			type: GET_REPOS,
			payload: name
		});
	};

	// Clear Users
	const clearThreads = () => dispatch({ type: CLEAR_THREADS });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ThreadContext.Provider
			value={{
				threads: state.threads,
				thread: state.thread,
				patterns: state.patterns,
				loading: state.loading,
				searchThreads,
				clearThreads,
				getThread,
				getPatterns
			}}
		>
			{props.children}
		</ThreadContext.Provider>
	);
};

export default ThreadState;
