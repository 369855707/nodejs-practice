import * as ActionTypes from '../constants/action-types.js'

const initialState = {
    count: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCRE:
            return Object.assign({}, state, { count: state.count + 1 });
        case ActionTypes.DECRE:
            return Object.assign({}, state, { count: state.count - 1 });
        default:
            return state;
    }
}

export default rootReducer;