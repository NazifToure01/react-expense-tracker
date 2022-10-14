import s from "./style.module.css";
export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-2  ${s.logo}`}>Logo</div>
        <div className={`col-md-4 col-sm-12 ${s.income}`}>Income</div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.form}`}>form</div>
        <div className={`col-12 ${s.expense_history}`}>Expense History</div>
      </div>
    </div>
  );
}
