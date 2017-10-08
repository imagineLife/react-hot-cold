import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection/>', () => {

	it('Renders without crashing', () =>{
		shallow(<GuessSection/>)
	})

	it('Displays some testFeedback text', () => {
		const testText = 'testFeedbackText';
		let wrapper = shallow(<GuessSection feedback={testText}/>);
		expect(wrapper.contains(testText)).toEqual(true);
	})
})