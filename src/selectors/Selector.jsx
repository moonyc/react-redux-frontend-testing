import moment from 'moment'

// A Selector is a function that accepts Redux state as an argument and returns
// data that is derived from the state


export default function Selector(expenses, {text, sortBy, startDate, endDate}){
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}