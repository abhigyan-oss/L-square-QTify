import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";

function Card({ data, type }) {
  const label =
    type === "songs" ? `${data.likes} Likes` : `${data.follows} Follows`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={data.image}
          alt={data.title}
        />
        <div className={styles.chipWrapper}>
          <Chip
            label={label}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{data.title}</p>
    </div>
  );
}

export default Card;