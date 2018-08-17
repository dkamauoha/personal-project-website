const initialState = {
    user: {},
    appointment: [],
    events: []
}

//Action Descriptors
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
const UPDATE_EVENTS = 'UPDATE_EVENTS';
const LOGOUT = 'LOGOUT';

//Reducer
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, ...action.payload};

        case UPDATE_APPOINTMENT:
            return {...state, ...action.payload};

        case UPDATE_EVENTS:
            return {...state, ...action.payload};

        case LOGOUT:
            return {...state, ...action.payload}
            
        default:
            return state;
    }
}

//Action Builders
export function updateUser (value) {
    return {
        type: UPDATE_USER,
        payload: value
    }
}

export function updateAppointment (value) {
    return {
        type: UPDATE_APPOINTMENT,
        payload: value
    }
}

export function updateEvents (value) {
    return {
        type: UPDATE_EVENTS,
        payload: value
    }
}

export function logout () {
    return {
        type: LOGOUT,
        payload: initialState
    }
}