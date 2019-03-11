const initialState = {
    user_id: 0, 
    email: '',
    placteColor: '',
    textColor: '',
    topInput: '',
    bottomInput: '',
    posts: []
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const UPDATE_POSTS = 'UPDATE_POSTS';

export function updatePosts(posts){
    return {
        type: UPDATE_POSTS,
        payload: posts
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
        case UPDATE_POSTS:
            const { posts } = payload;
            return { ...state, posts}
        case CLEAR_USER:
            return { ...state, id:0, email:'',placteColor: '', textColor: '', topInput: '', bottomInput: '', posts: '' }
        default:
            return state;
    }
}