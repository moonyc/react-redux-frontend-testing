import uuid from 'uuid'

// ADD EXPENSE
export const addExpense = (
    {
        description = ''
    }
) => ({
    type: 'ADD_EXPENSE'
})