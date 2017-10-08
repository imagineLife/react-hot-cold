import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
    let seedGuesses = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedGuesses.push(`feedback`);
            seedGuesses.push(`${i}`);
        }
    });

    it('Renders without crashing', () => {
        shallow(<Game title="Foo" />);
    });

    it('Can start a new game', () => {
        //1. get/declare the component
        const wrapper =shallow(<Game />);

        //2. set the default state to something non-sensical
        wrapper.setState({
            correctAnswer : -5//-5, nonsensical
        });

        //3. run the newGame  function
        wrapper.instance().newGame();

        //4. Check to see if the newGame has a different correctAnswer than previously set
        expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    })

     it('Can make a guess', () => {
        const wrapper =shallow(<Game />);

        //set a correct answer
        wrapper.setState({
            correctAnswer : 84
        });

        //make a guess
        wrapper.instance().guess(10);

        //check the state for a new registered guess
        expect(wrapper.state('guesses')).toEqual([10]);

        //checks that feedback is COLD!
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    });
});


