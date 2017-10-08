import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList/>', () => {
	let testGuesses = [1,2,3,4,5];
	it('Renders without crashing', () =>{
		shallow(<GuessList guesses={testGuesses}/>)
	})
})