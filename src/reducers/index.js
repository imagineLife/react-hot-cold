import {MAKE_GUESS, NEW_GAME} from '../actions';

let randomAnswer = () => {return Math.floor(Math.random() * 100) + 1};

const initialState = {
	  	guesses: [],
	    feedback: 'Make your guess!',
	    correctAnswer: randomAnswer(),
	    showInfoModal: false
};

export const hotColdReducer = (state=initialState, action) => {
	switch (action.type){
		case MAKE_GUESS:
			
			state.guess = parseInt(action.guess, 10);

	        if (isNaN(state.guess)) {
				return Object.assign({}, state, {
					feedback: 'Please enter a valid number'
				});
	        }

	        const difference = Math.abs(state.guess - state.correctAnswer);

	        let feedback;
	        if (difference >= 50) {
	            feedback = 'You\'re Ice Cold...';
	        }
	        else if (difference >= 30) {
	            feedback = 'You\'re Cold...';
	        }
	        else if (difference >= 10) {
	            feedback = 'You\'re Warm';
	        }
	        else if (difference >= 5) {
	            feedback = 'You\'re Hot!';
	        }
	        else if (difference >= 1) {
	            feedback = 'You\'re BLAZIN!';
	        }
	        else {
	            feedback = 'You got it!';
	        }


			return Object.assign({}, state, {
				guesses: [...state.guesses, action.guess],
				feedback : feedback
			});

		case NEW_GAME:
			return initialState;

		default: return initialState;
	}
}

//make a new case, NEW_GAME
//make new action in actions index
//state = initialState;
//return state, shortcut   return initialState;