import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [contador, setContador] = useState(1);
    const [amount, setAmount] = useState(props.amount);

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item-title">
                <h2>
                    {title}
                </h2>
                <div className="expense-item-Amount">
                    ${amount}
                </div>
            </div>

        </Card >
    )
}

export default ExpenseItem
