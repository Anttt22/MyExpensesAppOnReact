import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


const NewExpence = (props) => {

    const saveExpence = (dataToSave) => {
        debugger
        var data = {
            ...dataToSave,
           
            id: Math.random().toString()

        }
        //console.log("from newEpense.js")
        //console.log(data)
        props.onSaveExpence(data)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpence} />
        </div>
    )
}

export default NewExpence