import css from "./Contact.module.css";
import { IoCallSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <li className={css.contact}>
      <div>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <IoCallSharp className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
