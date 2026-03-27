import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/card";
import styles from "./section.module.css";

function Section({ title, type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://qtify-backend.labs.crio.do/albums/${type}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p className={styles.collapse}>Collapse</p>
      </div>

      <div className={styles.grid}>
        {data.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Section;