import {FC, useEffect, useState} from "react";
import './header.scss'
import {format} from '../../helpers/toFixed'

interface Currency {
    currency: {}
    success: boolean
}

export const Header: FC<Currency> = ({currency, success}) => {
    const [amount, setAmount] = useState<string>('')
    const [amount2, setAmount2] = useState<number>(1)

    const [currencyValue] = useState<string>('USD')
    const [currencyValue2] = useState<string>('UAH')

    useEffect(() => {
        if (currency) {
            currencyUAH_USD(1)
            // @ts-ignore
            setAmount(format(currency[currencyValue2]))
        }
    }, [success])


    function currencyUAH_USD(amount: number) {
        // @ts-ignore
        setAmount2(format(amount * currency[currencyValue2] / currency[currencyValue]))
    }

    return (
        <div className='head'>
            <div className='head-header'>
                <div>
                    <h1>Currency converter</h1>
                </div>
                <div className='head-header-currency'>
                    <p>EUR: {amount}грн</p>
                    <p>USD: {amount2}грн</p>
                </div>
            </div>
        </div>
    );
}
