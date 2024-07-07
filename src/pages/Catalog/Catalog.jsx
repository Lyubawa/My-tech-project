import CamperList from "../../components/CamperList/CamperList";
import SideBar from "../../components/SideBar/SideBar";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={css.catalogPage}>
      <SideBar />
      <CamperList className={css.mainContent} />
    </div>
  );
}
