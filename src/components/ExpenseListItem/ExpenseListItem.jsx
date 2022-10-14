import s from "./style.module.css";

export function ExpenseListItem(props) {
  return (
    <tr>
      <th>Apple</th>
      <td className={s.price}>3.99$</td>
    </tr>
  );
}
