import { useState } from "react";

import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"



let Expenses = (props) => {
  //debugger

  const [enteredYear, setEnteredYear] = useState("2011")

  const onFlterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear)
  }

  var filteredExpensesArr = props.expenses.filter(elem => {
    return elem.date.getFullYear().toString() === enteredYear
  }
  )
  console.log(filteredExpensesArr)



  return (

    <div className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={onFlterChangeHandler} />
      <ExpensesChart expenses={filteredExpensesArr} />
      <ExpensesList item={filteredExpensesArr}/>

    </div>
  );

}

export default Expenses;