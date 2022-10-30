import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"



let Expenses = (props) => {
  //debugger

  const [enteredYear, setEnteredYear] = useState("2011")

  const onFlterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear)
  }

  var filteredExpensesArr = props.expenses.filter(elem => {
     return elem.date.getFullYear().toString() === enteredYear }
  )
  console.log(filteredExpensesArr)

  //debugger

  return (

    <div className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={onFlterChangeHandler} />

      {filteredExpensesArr.map(elem =>
        <ExpenseItem
          key={elem.id}
          title={elem.title}
          amount={elem.amount}
          date={elem.date} />)}

    </div>
  );

}

export default Expenses;