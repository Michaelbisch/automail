const initialState = {
    user_id: 0, 
    email: '',
    plateColor: '',
    textColor: '',
    topinput: '',
    bottominput: '',
    order_id: 0,
    isReviewed: false,
    post_id: 0
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const REVIEW_AUTH = 'REVIEW_AUTH';
const EDIT_POST_ID = 'EDIT_POST_ID';
const EDIT_INPUTS = 'EDIT_INPUTS';
const CLEAR_INPUTS ='CLEAR_INPUTS';

export function editInputs(inputs){
    return {
        type: EDIT_INPUTS,
        payload: inputs
    }
}

export function clearInputs(){
    return{
        type: CLEAR_INPUTS
    }
}

export function editPostId(post_id){
    return {
        type: EDIT_POST_ID,
        payload: post_id
    }
}

export function reviewAuth(review){
    return {
        type: REVIEW_AUTH,
        payload: review
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user 
    }
}

export function clearUser(){
    return {
        type:CLEAR_USER
    }
}

export default function reducer(state=initialState,action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            const { user_id, email } = payload; 
            return { ...state, user_id, email }; 

        case REVIEW_AUTH:
            const {order_id, isReviewed } = payload;
            return { ...state, order_id, isReviewed};

        case EDIT_POST_ID:
            return { ...state, post_id:action.payload};

        case EDIT_INPUTS:
            const { topinput, bottominput } = payload;
            return {...state, topinput, bottominput};

        case CLEAR_INPUTS:
            return{ ...state, topinput: '', bottominput};

        case CLEAR_USER:
            return { ...state, user_id: 0, email:'',plateColor: '', textColor: '', topInput: '', bottomInput: '', order_id: 0, isReviewed: false, post_id: 0 };
        default:
            return state;
    }
}