import * as types from './../constants/ActionType';

/*
const InitialState = [
    {
        id : '1',
        name : 'React js',
        status : true
    }
];
*/
var data = JSON.parse(localStorage.getItem('tasks'));

const InitialState = data ? data : [];

const myReducer = (state = InitialState, action) => {
    switch (action.type) {

        case types.LIST_ALL:
            return state;
        default:
            return state;
    }
  
}

export default myReducer;