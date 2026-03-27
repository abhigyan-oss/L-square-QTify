import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/card";
import Carousel from "../carousel/carousel";
import styles from "./section.module.css";

function Section({ title, type }) {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

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

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p className={styles.collapse} onClick={toggleCollapse}>
          {isCollapsed ? "Show All" : "Collapse"}
        </p>
      </div>

      {isCollapsed ? (
        <Carousel
          data={data}
          renderComponent={(album) => <Card album={album} />}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((album) => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;