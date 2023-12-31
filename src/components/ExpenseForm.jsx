import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers';


const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '')
    const [note, setNote] = useState(props.expense ? props.expense.note : '')
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100 ).toString() : '')
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment())
    const [calendarFocused, setCalendardFocused] = useState(false)
    const [error, setError] = useState('')

    const handleDescriptionChange = (e) => {
        const description = e.target.value
        setDescription(description)
    }

    const handleNoteChange = (e) => {
        const note = e.target.value
        setNote(note)
    }
    
    const handleAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount)
        }
    }

    const handleDateChange = (createdAt) => {
        if(createdAt) {
            setCreatedAt(createdAt)
        }
    }

    const handleFocusChange = (focused) => {
        setCalendardFocused(focused)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!description || !amount) {
            setError('Please provide the description and the amount')
        }
        props.onSubmit(
            {
                description,
                amount: parseFloat((amount), 10),
                createdAt: createdAt.valueOf(),
                note
            }
        )
}
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <input
                    type='text'
                    placeholder='Amount'
                    value={amount}
                    onChange={handleAmountChange}
                />
                <DatePicker
                    label="Your Expense Date Picker"
                    value={createdAt}
                    onChange={handleDateChange}
                    autoFocus={calendarFocused}
                    openTo="day"
                    orientation="landscape"
                    onClose={handleFocusChange}
                />
                <textarea
                    placeholder="Add a note for your expense (optimal)"
                    value={note}
                    onChange={handleNoteChange}/>
                <button>Add Expense</button>
            </form>
        </div> 
    )
}

export default ExpenseForm