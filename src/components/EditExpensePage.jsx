import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const EditExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    navigate('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                navigate('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(EditExpensePage);