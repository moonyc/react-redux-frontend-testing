import React from 'react'
import { useState } from 'react'
import moment from 'moment'


const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '')
    const [note, setNote] = useState(props.expense ? props.expense.note : '')
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100 ).toString() : '')
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment())
    const [calendarFocused, setCalendardFocused] = useState(false)
    const [error, setError] = useState('')

    const handleDescriptionChange = (e) => {
        const description = e.target.value
        setDescription({description})
    }

    return (
        <div>
            <h1>Add Expense</h1>
        </div>
    )
}

export default Form