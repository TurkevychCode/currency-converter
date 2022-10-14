import {ICurrency} from "../../models/ICurrency";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface currencyState {
    currency: ICurrency,
    success: boolean
}

const initialState: currencyState = {
    currency: {},
    success: false
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<ICurrency>) {
            state.currency = action.payload
        },
        setSuccess(state, action: PayloadAction<boolean>){
            state.success = action.payload
        }
    }
})
export const {setCurrency,setSuccess} = currencySlice.actions
export default currencySlice.reducer
