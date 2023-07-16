import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters.jsx'
import Header from './Header'



const ExpenseDashboardPage= (props) => {
    return (
        <div>
        <Header />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export default ExpenseDashboardPage