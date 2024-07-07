import { TbCamper } from "react-icons/tb";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <TbCamper className={css.icon} />
      <h3>Discover the Freedom of the Open Road with Our Camper Rentals!</h3>
      <p className={css.text}>
        Are you ready for your next adventure? Experience the ultimate freedom
        and flexibility with our top-of-the-line camper rentals! Whether
        you&apos;re planning a weekend getaway or a cross-country expedition, we
        have the perfect camper to suit your needs.
      </p>
    </div>
  );
}
