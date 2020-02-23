import * as ActionTypes from '../constants/action-types.js'

export function increment(payload) {
    return {
        type: ActionTypes.INCRE,
        payload
    }
}

export function decrement(payload) {
    return {
        type: ActionTypes.DECRE,
        payload
    }
}
