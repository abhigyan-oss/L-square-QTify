import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";

function Card({ album }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={album.image}
          alt={album.title}
        />
        <div className={styles.chipWrapper}>
          <Chip
            label={`${album.follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{album.title}</p>
    </div>
  );
}

export default Card;