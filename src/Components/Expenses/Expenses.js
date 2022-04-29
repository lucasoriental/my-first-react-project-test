import React from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {




    return (
        <Card>
            <ExpenseItem
                title={props.expenseVar[0].title}
                date={props.expenseVar[0].date}
                amount={props.expenseVar[0].amount}
            />
            <ExpenseItem
                title={props.expenseVar[1].title}
                date={props.expenseVar[1].date}
                amount={props.expenseVar[1].amount}
            />
            <ExpenseItem
                title={props.expenseVar[2].title}
                date={props.expenseVar[2].date}
                amount={props.expenseVar[2].amount}
            />
            <ExpenseItem
                title={props.expenseVar[3].title}
                date={props.expenseVar[3].date}
                amount={props.expenseVar[3].amount} />
        </Card>
    )
}


export default Expenses