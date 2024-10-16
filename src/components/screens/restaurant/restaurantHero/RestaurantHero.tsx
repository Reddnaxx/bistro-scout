import React from "react";
import Image from "next/image";
import styles from "./restaurantHero.module.scss";
import Rating from "@/components/shared/raiting/Rating";
import Button from "@/components/shared/controls/button/Button";
import rating from "@/components/shared/raiting/Rating";

type RestaurantHeroProps = {
  imgSrc: string;
  logoSrc: string;
  title: string;
  description: string;
  editable?: boolean;
  rating: number;
};

const RestaurantHero = ({
  imgSrc,
  logoSrc,
  description,
  title,
  editable,
  rating,
}: RestaurantHeroProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.imgContainer}>
        {imgSrc && <Image
          className={styles.preview}
          src={imgSrc}
          alt={"Фон ресторана"}
          fill
          sizes={"1"}
          priority
        />}
      </div>
      <div className={styles.info}>
        <div className={styles.logoContainer}>
          {logoSrc && <Image
              className={styles.logo}
              src={logoSrc}
              alt={"Логотип"}
              fill
              sizes={"1"}
          />}
        </div>
        <div className={styles.info__wrapper}>
          <Rating
            className={styles.rating}
            value={rating}
            withNumber
            withText
          />
          <div className={styles.info__text}>
            <h2 className={styles.title}>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <Button
          btnType={"link"}
          btnStyle={"filled"}
          fontSize={"small"}
          href={"?state=booking"}
        >
          Забронировать столик
        </Button>
        {editable && (
          <Button
            btnType={"link"}
            color={"gray"}
            fontSize={"small"}
            btnStyle={"filled"}
            iconSrc={"/icons/Edit.svg"}
            href={"?state=profileEdit"}
          >
            Редактировать профиль ресторана
          </Button>
        )}
      </div>
    </section>
  );
};

export default RestaurantHero;
