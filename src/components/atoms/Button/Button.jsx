import styles from "./button.module.css";
import { Link } from "react-router-dom";

function Button({ href, size, label, active, primary, onClick }) {
  const classList = ["button", size];
  primary ? null : classList.push("secondary");
  active ? null : classList.push("disabled");

  const CLASS_LIST = classList.map((item)=>(styles[item])).join(" ");

  return (
    <>
      {href ? (
        <Link to={href} className={CLASS_LIST}>
          {label}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={CLASS_LIST}
        >
          {label}
        </button>
      )}
    </>
  );
}

export default Button;
