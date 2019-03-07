const initialState = {
    user_id: 0, 
    email: '',
    placteColor: '',
    textColor: '',
    topInput: '',
    bottomInput: ''
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user 
    }
}

export function clearUser (){
    return {
        type:CLEAR_USER
    }
}

export default function reducer(state=initialState,action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            const { id, email } = payload; 
            return { ...state, id, email }; 
        case CLEAR_USER:
            return { ...state, id:0, email:'',placteColor: '', textColor: '', topInput: '', bottomInput: '' } 
        default:
            return state;
    }
}