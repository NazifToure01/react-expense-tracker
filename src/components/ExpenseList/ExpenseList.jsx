import { ExpenseListItem } from "../ExpenseListItem/ExpenseListItem";
import s from "./style.module.css";

export function ExpenseList(props) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
        </tbody>
      </table>
    </div>
  );
}
