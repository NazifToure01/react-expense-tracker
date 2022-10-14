import s from "./style.module.css";

export function IncomeInput(props) {
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 col-md-4 col-lg-7 ${s.label}`}>Income</div>
      <div className="col-6 col-md-8 col-lg-3">
        <input type="text" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
