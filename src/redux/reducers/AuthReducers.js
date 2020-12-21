const INITIAL_STATE = {
    username:'',
    isLogin:false,
    foto: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, isLogin:true, username:action.payload}
        case 'LOGOUT':
            return INITIAL_STATE
        case 'SETPICTURE':
            return {...state, foto:action.payload}
        default:
            return state
    }
}