import React from 'react'
import { Connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    
                }}
            />
        </div>
    )
}

export default Connect()(AddExpensePage)