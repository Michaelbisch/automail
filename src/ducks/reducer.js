const initialState = {
    user_id: 0, 
    email: '',
    placteColor: '',
    textColor: '',
    topInput: '',
    bottomInput: '',
    order_id: 0,
    isReviewed: false
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const REVIEW_AUTH = 'REVIEW_AUTH';

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

export function clearUser (){
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
            return { ...state, order_id, isReviewed}
        case CLEAR_USER:
            return { ...state, user_id: 0, email:'',placteColor: '', textColor: '', topInput: '', bottomInput: '', order_id: 0, isReviewed: false }
        default:
            return state;
    }
}