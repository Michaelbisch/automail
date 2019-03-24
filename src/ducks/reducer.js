const initialState = {
    user_id: 0, 
    email: '',
    rplatecolor: '',
    rtextcolor: '',
    rtopinput: '',
    rbottominput: '',
    order_id: 0,
    isReviewed: false,
    post_id: 0,
    openFirstModal: false,
    openSecondModal: false
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const REVIEW_AUTH = 'REVIEW_AUTH';
const EDIT_POST_ID = 'EDIT_POST_ID';
const EDIT_INPUTS = 'EDIT_INPUTS';
const CLEAR_INPUTS ='CLEAR_INPUTS';
const UPDATE_ORDER_ID = 'UPDATE_ORDER_ID';
const MODAL_FALSE = 'MODAL_FALSE';
const MODAL_ONE_TRUE = 'MODAL_ONE_TRUE';
const MODAL_TWO_TRUE = 'MODAL_TWO_TRUE';

export function modalTwoTrue(){
    return{
        type: MODAL_TWO_TRUE
    }
}

export function modalOneTrue(){
    return{
        type: MODAL_ONE_TRUE
    }
}

export function modalFalse(){
    return{
        type: MODAL_FALSE,
    }
}

export function updateOrderId(order_id){
    return {
        type: UPDATE_ORDER_ID,
        payload: order_id
    }
}

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

        case UPDATE_ORDER_ID:
            return { ...state, order_id:action.payload};

        case EDIT_INPUTS:
            const { rtopinput, rbottominput, rplatecolor, rtextcolor } = payload;
            return {...state, rtopinput, rbottominput, rplatecolor, rtextcolor};

        case CLEAR_INPUTS:
            return{ ...state, rtopinput: '', rbottominput: '', rtextcolor: '', rplatecolor: ''};

        case MODAL_TWO_TRUE:
            return{...state, openSecondModal: true}

        case MODAL_ONE_TRUE:
            return{ ...state, openFirstModal: true}

        case MODAL_FALSE:
            return{...state, openFirstModal: false, openSecondModal: false };

        case CLEAR_USER:
            return { ...state, user_id: 0, email:'', rplatecolor: '', rtextcolor: '', rtopinput: '', rbottominput: '', order_id: 0, isReviewed: false, post_id: 0 };
        default:
            return state;
    }
}