import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpence from "./components/NewExpense/NewExpense";


const DummyExpenses =
  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '294.32',
      date: new Date(2021, 4, 28)
    },

    {
      id: 'e2',
      title: 'NewTV',
      amount: '234.32',
      date: new Date(2021, 3, 28)
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: '42.32',
      date: new Date(2031, 2, 5)
    },

    {
      id: 'e4',
      title: 'Meal',
      amount: '65.32',
      date: new Date(2011, 2, 28)
    }
  ]


let App = () => {
//debugger
  const[expenses, SetExpenses]=useState(DummyExpenses)

 
  const saveExpenceHandler=expense=>{
    SetExpenses( (prevExpenses)=>{
      return[expense, ...prevExpenses]
    });
   
    console.log("in App.js")
    console.log(expense)

    console.log("expenses")
    console.log(expenses)
  }

  return (
    <div>  
      
      <NewExpence onSaveExpence ={saveExpenceHandler}/>
      
      <Expenses expenses={expenses}/>
    </div>
  );

}

export default App


//66