import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push(`List ${i}`)
        }
    });

    it('Renders without crashing', () => {
        shallow(<Header/>);
    });

    it('Renders the title', () => {
        const title = "HOT or COLD";
        const wrapper = shallow(<Header title={title} />);
        expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
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


