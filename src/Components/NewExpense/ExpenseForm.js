import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')


    const titleChangeHandler = (e) => {
        /* var title = e.target.value
        setTitle(title) */          // it works as below
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        /* var amount = e.target.value
        setAmount(amount) */        // it works as below
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        var date = e.target.value
        setDate(date)
        /* setDate(e.target.value)  */// it works as above
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }

    return <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2021-01-01"
                    max="2023-12-31"
                    value={date}
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={amountChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add a New Expense</button>
        </div>
    </form>
}

export default ExpenseForm;