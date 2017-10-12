import * as actions from '../actions';

const initialState = {
	  	guesses: [],
	    feedback: 'Make your guess!',
	    correctAnswer: Math.floor(Math.random() * 100) + 1
};