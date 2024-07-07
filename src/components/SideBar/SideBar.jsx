import { CiLocationOn } from "react-icons/ci";
import css from "./SideBar.module.css";

export default function SideBar() {
  return (
    <>
      <div>
        <label htmlFor="location" className={css.text}>
          Location
        </label>
        <div className={css.inputBox}>
          <input type="text" id="location" className={css.inputField} />
          <CiLocationOn className={css.icon} />
        </div>
      </div>
    </>
  );
}
