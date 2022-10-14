import {AppDispatch} from "../store";
import axios from "axios";
import {setCurrency, setSuccess} from "../reducer/Reducer";

export const fetchCurrency = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284')
        dispatch(setCurrency(response.data.rates))
        dispatch(setSuccess(response.data.success))
    } catch (e) {
        console.log(e)
    }
}
