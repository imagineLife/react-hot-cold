import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount/>', () => {

	it('Renders without crashing', () =>{
		shallow(<GuessCount/>)
	})

	it('Displays guesses', () => {
		//1.add guesses to the component
		let guesses = [1,2,3,4,5];

		//2. set the wrapper to be the object WITH the guesses included?!
		let wrapper = shallow(<GuessCount count={guesses.length}/>);


		//3.Does the component display the correct guess number next
		expect(wrapper.text()).toEqual(`Guess #${guesses.length}!`);

	})
})