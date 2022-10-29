import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"



let Expenses = (props) => {
  debugger
 
  const[enteredYear, setEnteredYear]=useState("2011")

  const onFlterChangeHandler=(selectedYear)=>{
    setEnteredYear(selectedYear)
  }

  var expenseItemsArr=props.expenses.map(elem=><ExpenseItem title={elem.title} amount={elem.amount} date={elem.date}/>)
  //console.log(expenseItemsArr)
  debugger
  return (
    
    <div className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterChange={onFlterChangeHandler}/>
      
      {expenseItemsArr}

    </div>
  );

}

export default Expenses;