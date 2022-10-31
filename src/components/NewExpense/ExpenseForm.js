import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEntereAmount] = useState('')
    const [enteredDate, setEntereDate] = useState('')
    // const [enteredItem, setEnteredItem] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const onChangeTitle = (event) => {
        setEnteredTitle(event.target.value)
        // setEnteredItem({
        //     ...enteredItem,
        //     enteredTitle: event.target.value
        // })
        console.log(enteredTitle)
    }

    const onChangeAmount = (event) => {
        setEntereAmount(event.target.value)
        console.log(enteredAmount)
        // setEnteredItem({
        //     ...enteredItem,
        //     enteredAmount: event.target.value
        // })     
    }

    const onChangeDate = (event) => {
        //debugger
        setEntereDate(event.target.value)  //?
        console.log(Date(enteredDate))
    

    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)    //?? format//
        }
        props.onSaveExpense(expenseData)
        //console.log(expenseData)
        setEnteredTitle('')
        setEntereAmount('')
        setEntereDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label className="new-expense__control label">Title</label>
                    <input className="new-expense__control input"
                        type='text'
                        onChange={onChangeTitle}
                        value={enteredTitle} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number'
                        min='0.01'
                        step='0.01'
                        onChange={onChangeAmount}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date'
                        min='2019-02-01'
                        max='2022-12-11'
                        onChange={onChangeDate}
                        value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.stopEdditing} type='button'>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm