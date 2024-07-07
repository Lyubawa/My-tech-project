import { useSelector } from "react-redux";
import CamperCard from "../Card/CamperCard";
import css from "./CamperList.module.css";

export default function CamperList() {
  const campers = useSelector((state) => state.campers.items);
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li className={css.item} key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
