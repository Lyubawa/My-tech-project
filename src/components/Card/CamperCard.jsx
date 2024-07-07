import css from "./CamperCard.module.css";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { PiForkKnife } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { MdOutlineLocalGasStation } from "react-icons/md";

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",");
}

export default function Card({ camper }) {
  const reviewsCount = camper.reviews.length;
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img
          src={camper.gallery[0]}
          alt={`${camper.name} image`}
          className={css.image}
        />
      </div>

      <div className={css.detailsCard}>
        <div className={css.detailsTitle}>
          <div className={css.title}>
            <p>{camper.name}</p>
            <div>
              <p>€ {formatPrice(camper.price)}</p>
              <CiHeart />
            </div>
          </div>

          <div className={css.ratingLocation}>
            <div className={css.containerStar}>
              <FaStar className={css.iconStar} />
              <p>
                {camper.rating} ({reviewsCount} Reviews)
              </p>
            </div>
            <div>
              <CiLocationOn className={css.location} />
              <p>{camper.location}</p>
            </div>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.details}>
          <div className={css.containerDetail}>
            <BsPeople />
            <p>{camper.adults} adults</p>
          </div>
          <div className={css.containerDetail}>
            <TbAutomaticGearbox />
            <p>{camper.transmission}</p>
          </div>
          <div className={css.containerDetail}>
            <MdOutlineLocalGasStation />
            <p>{camper.engine}</p>
          </div>
          <div className={css.containerDetail}>
            <PiForkKnife />
            <p>Kitchen</p>
          </div>

          <div className={css.containerDetail}>
            <IoBedOutline />
            <p>{camper.details.beds} beds</p>
          </div>
          <div className={css.containerDetail}>
            <FaWind />
            <p>AC</p>
          </div>
        </div>
        <button className={css.button}>Show more</button>
      </div>
    </div>
  );
}
