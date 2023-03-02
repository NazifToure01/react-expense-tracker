import s from "./style.module.css";
import {useSelector} from "react-redux";

export function ExpenseTotal(props) {
    const expenseList = useSelector(store => store.EXPENSE.expenseList);
    const income = useSelector(store => store.EXPENSE.income);
    const totalExpense = expenseList.reduce((acc, curentItem)=>{
       return acc + curentItem.price;
    },0)

    const remainingMoney = income - totalExpense;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
