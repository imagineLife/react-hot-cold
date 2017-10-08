import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	})

	it('fires the onGuess function when submitted', () => {
		let testOnGuess = jest.fn();
		let component = mount(<GuessForm onGuess={testOnGuess}/>);
		let testGuessVal = 84;
		component.find('input[type="text"]').node.value = testGuessVal;
		component.simulate('submit');
		expect(testOnGuess).toHaveBeenCalledWith(testGuessVal.toString());
	})
})