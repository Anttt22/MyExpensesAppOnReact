import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"



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

  // let expensesContent=<p>no Expenses found</p>
  
  // if(filteredExpensesArr.length>0){
  //   expensesContent=filteredExpensesArr.map((elem) => (
  //     <ExpenseItem
  //       key={elem.id}
  //       title={elem.title}
  //       amount={elem.amount}
  //       date={elem.date}
  //     />
  //   ))
  // }
  //debugger

  return (

    <div className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={onFlterChangeHandler} />
      <ExpensesList item={filteredExpensesArr}/>

    </div>
  );

}

export default Expenses;