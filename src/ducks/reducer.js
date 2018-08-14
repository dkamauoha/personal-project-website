const initialState = {
    user: {},
    appointment: {}
}

//Action Descriptors
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';

//Reducer
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload};

        case UPDATE_APPOINTMENT:
            return {...state, appointment: action.payload};
            
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