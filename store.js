import {createStore} from 'redux';

import {hotColdReducer} from './reducers';

export default createStore(hotColdReducer);

/*
DISPATCH looks into the reducers, 
here the 'hotColdReducer'
*/