import React, { useState } from 'react'

const TestFunc = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')



    const text2ChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const text3ChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const InputChangeHandler = (event) => {
        event.preventDefault()

        const Objects = {
            id: Math.random(2),
            title: title,
            amount: amount
        };

        console.log(Objects);
        setTitle('')
        setAmount('')

    }

    return (
        <div>
            <form onSubmit={InputChangeHandler} >
                {/* <div>
                    <label></label>
                    <input type="text" value={id} onChange={text1ChangeHandler} />
                </div> */}
                <div>
                    <label>Expense Title</label> <br />
                    <input type="text" value={title} onChange={text2ChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>  <br />
                    <input type="text" value={amount} onChange={text3ChangeHandler} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default TestFunc