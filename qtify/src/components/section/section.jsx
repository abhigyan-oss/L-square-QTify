import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Card from "../card/card";
import Carousel from "../carousel/carousel";
import styles from "./section.module.css";

function Section({ title, type }) {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "songs") {
          const [songsRes, genresRes] = await Promise.all([
            axios.get("https://qtify-backend.labs.crio.do/songs"),
            axios.get("https://qtify-backend.labs.crio.do/genres"),
          ]);

          setData(songsRes.data);
          setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
        } else {
          const res = await axios.get(
            `https://qtify-backend.labs.crio.do/albums/${type}`
          );
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [type]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredSongs = useMemo(() => {
    if (type !== "songs") return data;
    if (selectedTab === "all") return data;
    return data.filter((song) => song.genre.key === selectedTab);
  }, [data, selectedTab, type]);

  const renderCards = (items) =>
    items.map((item) => (
      <Card key={item.id} data={item} type={type} />
    ));

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {type !== "songs" && (
          <p className={styles.collapse} onClick={toggleCollapse}>
            {isCollapsed ? "Show All" : "Collapse"}
          </p>
        )}
      </div>

      {type === "songs" && (
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={styles.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              className={styles.tab}
            />
          ))}
        </Tabs>
      )}

      {type === "songs" ? (
        <Carousel
          data={filteredSongs}
          renderComponent={(item) => <Card data={item} type={type} />}
        />
      ) : isCollapsed ? (
        <Carousel
          data={data}
          renderComponent={(item) => <Card data={item} type={type} />}
        />
      ) : (
        <div className={styles.grid}>{renderCards(data)}</div>
      )}
    </div>
  );
}

export default Section;