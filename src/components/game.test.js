import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push(`List ${i}`)
        }
    });

    it('Renders without crashing', () => {
        shallow(<Game title="Foo" />);
    });

    // it('Can add lists to the state', () => {
    //     const wrapper = shallow(<Game/>);
    //     const instance = wrapper.instance();
    //     seedLists.forEach(instance.addList);
    //     expect(wrapper.state('lists').length).toEqual(seedLists.length);
    // });

    // it('Renders the lists', () => {
    //     const wrapper = shallow(<Game/>);
    //     const instance = wrapper.instance();
    //     seedLists.forEach(instance.addList);
    //     const lists = wrapper.find('List');
    //     expect(lists.length).toEqual(seedLists.length);
    //     const firstList = lists.first();
    //     expect(firstList.prop('title')).toEqual(seedLists[0]);
    // });
});


