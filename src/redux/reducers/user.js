// const locationsReducerDefaultState = [];

const userReducerDefaultState = {
    displayName: '', 
    email: '', 
    emailVerified: false, 
    photoURL: '',
    l: '',
    uid: ''
}

 
export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.user
        case 'LOG_OUT':
            return userReducerDefaultState;
        default:
            return state;
    }
};