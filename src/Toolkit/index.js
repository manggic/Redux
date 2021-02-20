
import {
    configureStore,
    getDefaultMiddleware,
    createSlice
} from '@reduxjs/toolkit'


//Each of these calls to createAction are 
//actual action creators ready to be called,
// with an optional payload:


const middleware = [
    ...getDefaultMiddleware(),
]

const authState = {
    token: 'raftaar',
    error: ''
}



const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers : {
        loginSuccess: (state, action) => {
            state.token = action.payload
        },
        loginFailed: (state, action) => {
            state.error =  action.payload
        }
    }
 })  

const authReducer = authSlice.reducer


const store  = configureStore({
    reducer: {
         auth : authReducer 
    },    
    middleware
})

export const {  loginSuccess, loginFailed }  = authSlice.actions

export default store




