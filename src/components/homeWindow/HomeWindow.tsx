import {FC, useEffect, useState} from "react";
import {Header} from "../header/Header";
import './homeWindow.scss'
import {Content} from "../contetnt/Content";
import {fetchCurrency} from "../../redux/actionCreators/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {format} from '../../helpers/toFixed';

export const HomeWindow: FC = () => {
    const {currency,success} = useAppSelector((state) => state.currencyReducer)
    const dispatch = useAppDispatch();

    const [amount, setAmount] = useState<number>(1);
    const [amount2, setAmount2] = useState<number>(1);
    const [currencyValue, setCurrencyValue] = useState<string>('USD');
    const [currencyValue2, setCurrencyValue2] = useState<string>('UAH');

    useEffect(()=>{
        if (currency) {
            handleAmountChange(1)
        }
        if (!success){
            dispatch(fetchCurrency())
        }
    },[success])


    function handleAmountChange(amount: number) {
        // @ts-ignore
        setAmount2(format(amount * currency[currencyValue2] / currency[currencyValue]))
        setAmount(amount)
    }

    function handleCurrencyChange(currencyValue: string) {
        // @ts-ignore
        setAmount2(format(amount * currency[currencyValue2] / currency[currencyValue]))
        setCurrencyValue(currencyValue)
    }

    function handleAmount2Change(amount: number) {
        // @ts-ignore
        setAmount(format(amount * currency[currencyValue] / currency[currencyValue2]))
        setAmount2(amount2)
    }

    function handleCurrency2Change(currencyValue2: string) {
        // @ts-ignore
        setAmount(format(amount * currency[currencyValue] / currency[currencyValue2]))
        setCurrencyValue2(currencyValue2)
    }


    return (
        <div className='homeWindow'>
            <Header currency={currency} success={success}/>

            <Content currency={currency}
                     onAmountChange={handleAmountChange}
                     onCurrencyChange={handleCurrencyChange}
                     onAmountChange2={handleAmount2Change}
                     onCurrencyChange2={handleCurrency2Change}
                     currencyValue={currencyValue}
                     currencyValue2={currencyValue2}
                     amount={amount}
                     amount2={amount2}/>
        </div>
    );
}
