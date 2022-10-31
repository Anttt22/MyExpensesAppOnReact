import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import React, { useState } from 'react'

//?
let ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const onClickHandler = () => {

        setTitle("updated!!")
        console.log(title)

    }

    return (
        <li>
            <Card className="expense-item">
                <div>
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        ${props.amount}</div>
                    <button onClick={onClickHandler}>click on me</button>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem