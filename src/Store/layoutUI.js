
import { createSlice } from "@reduxjs/toolkit" ; 

const layoutUI = createSlice({
    name : "layoutUI" ,
    initialState : {
        displayMenu : false ,
        loginShow : false , 
    },
    reducers:{
        setOpenMenu : (state,action) => {
            state.displayMenu = action.payload; 
        },
    }
})

export const { setOpenMenu } = layoutUI.actions ; 

export default layoutUI.reducer ; 