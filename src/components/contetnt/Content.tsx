import {FC} from "react";
import './content.scss'
import {ICurrency} from "../../models/ICurrency";

interface Currency {
    currency: ICurrency
    amount: number
    amount2: number
    currencyValue: string
    currencyValue2: string
    onAmountChange: any
    onCurrencyChange: any
    onAmountChange2: any
    onCurrencyChange2: any
}

export const Content: FC<Currency> = ({
                                          currency,
                                          amount,
                                          amount2,
                                          currencyValue,
                                          currencyValue2,
                                          onAmountChange,
                                          onCurrencyChange,
                                          onAmountChange2,
                                          onCurrencyChange2
                                      }) => {

    const handleSubmitInputFirst = (e: any) => {
        onAmountChange(e.target.value)
    }
    const handleSubmitInputSecond = (e: any) => {
        onAmountChange2(e.target.value)
    }
    const handleSubmitSelectFirst = (e: any) => {
        onCurrencyChange(e.target.value)
    }
    const handleSubmitSelectSecond = (e: any) => {
        onCurrencyChange2(e.target.value)
    }

    return (
        <div className='content'>
            <div className='content-currency'>
                <div className='content-currency-inputs'>
                    <h2>Converter</h2>
                    <div>
                        <input type="number" value={amount} onChange={handleSubmitInputFirst}/>
                        <select value={currencyValue} onChange={handleSubmitSelectFirst}>
                            {
                                Object.keys(currency).map(((currency, index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                )))
                            }
                        </select>
                    </div>
                    <div>
                        <input type="number" value={amount2} onChange={handleSubmitInputSecond}/>
                        <select value={currencyValue2} onChange={handleSubmitSelectSecond}>
                            {
                                Object.keys(currency).map(((currency, index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                )))
                            }
                        </select>

                    </div>
                </div>
            </div>
        </div>
    );
}
