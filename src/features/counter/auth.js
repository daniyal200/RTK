import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    totalUsers: []
}

const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDispatchUser: (state, action) => {
            state.user = action.payload
        },
        setDispatchTotalUsers: (state, action) => {
            state.totalUsers.push(action.payload)
        },
        setDispatchdeleteUser:(state,action) =>{
            console.log(action.payload.username);
            console.log(state.totalUsers);
            let aa = state.totalUsers.filter((user) => user.username !== action.payload.username);
            console.log(aa,'AA');
            state.totalUsers = state.totalUsers.filter((user) => user.username !== action.payload.username)
        },
        
    }
})
export const{setDispatchUser,setDispatchTotalUsers, setDispatchdeleteUser}=auth.actions
export default auth.reducer;

