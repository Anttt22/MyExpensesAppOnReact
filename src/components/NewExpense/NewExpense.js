import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import { useState } from 'react'


const NewExpence = (props) => {
    const[isAdditing, SetisAdditing]= useState(false)

    const saveExpence = (dataToSave) => {

        var data = {
            ...dataToSave,
           
            id: Math.random().toString()

        }

        props.onSaveExpence(data)
        SetisAdditing(false)
    }

    const startEditingHandler=()=>{
        SetisAdditing(true)
 
    } 
    const stopEditingHandler=()=>{
        SetisAdditing(false)
       
    } 


    return (
        <div className='new-expense'>
            {!isAdditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
            {isAdditing&&<ExpenseForm onSaveExpense={saveExpence}
                                      stopEdditing={stopEditingHandler}  
            />}
        </div>
    )
}

export default NewExpence