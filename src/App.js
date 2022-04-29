import React from 'react';
import './App.css'

import NewExpense from './Components/NewExpense/NewExpense'
import Expenses from './Components/Expenses/Expenses'

import TestFunc from './test/Test'

const App = () => {
    const expenses1 = [
        {
            id: 'e1',
            title: 'This is the first Title',
            amount: 1,
            date: new Date(2022, 4, 13),
        },
        {
            id: 'e2',
            title: 'This is the Sec Title',
            amount: 2,
            date: new Date(2022, 2, 20),
        },
        {
            id: 'e3',
            title: 'This is the Third Title',
            amount: 3,
            date: new Date(2022, 5, 22),
        },
        {
            id: 'e4',
            title: 'This is the Forth Title',
            amount: 4,
            date: new Date(2022, 1, 12),
        }
    ]



    return (
        <div>
            <NewExpense />
            <div className="expenses">
                <Expenses
                    expenseVar={expenses1}
                />
            </div>
            <TestFunc />
        </div>

    )
}

export default App