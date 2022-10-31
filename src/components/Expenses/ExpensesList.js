import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

let ExpensesList = (props) => {

    if (props.item.length === 0) {
        return(
             <h2 className='expenses-list__fallback'>no expenses found</h2>
             )
    }

    //let expensesContent=<p>no Expenses found</p>

    if (props.item.length > 0) {
        return (
            <ul className="expenses-list">
                {props.item.map((elem) => (
                    <ExpenseItem
                        key={elem.id}
                        title={elem.title}
                        amount={elem.amount}
                        date={elem.date}
                    />
                ))}
            </ul>
        )

    }
}

export default ExpensesList
