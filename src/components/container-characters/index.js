import { List, Spin } from "antd";
import "antd/dist/antd.css";
import styles from "./styles.module.css";
import React from "react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Character from "../character-component";

const Characters = ({ getCharacters, getFilterCharacters }) => {
  const apiUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (typeof window !== "undefined") {
    Modal.setAppElement("#root");
  }

  const openModal = (id, name) => {
    setSelectedId(id);
    setSelectedName(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedId(null);
    setSelectedName(null);
    setModalOpen(false);
  };

  let displayCharacters = [];
  let filteredData = [];
  let searchData = [];
  let all = [];
  let result = [];
  let text = "";

  useEffect(() => {
    async function fetchAllPages(url) {
      let allData = [];
      let page = 1;
      for (page; page <= 42; page++) {
        const data = await fetchData(`${url}?page=${page}`);
        allData = allData.concat(data.results);
      }
      setCharacters(allData);
      setIsLoading(false);
    }

    fetchAllPages(apiUrl);
  }, [apiUrl]);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  console.log(getFilterCharacters.length + " getFilterCharacters");
  console.log(getCharacters.length + " getCharacters");

  searchData = characters.filter(
    (item) =>
      item.name.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.species.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.location.name.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.status.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.gender.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.type.toLowerCase().includes(getCharacters.toLowerCase()) ||
      item.origin.name.toLowerCase().includes(getCharacters.toLowerCase())
  );

  displayCharacters = getCharacters.length !== 0 ? searchData : characters;
  result = displayCharacters;

  if (getFilterCharacters[0] === "GENDER") {
    for (let a of getFilterCharacters) {
      all = displayCharacters.filter(
        (item) => item.gender.toLowerCase() === a.toLowerCase()
      );
      filteredData.push(...all);
    }

    result =
      getFilterCharacters.length !== 0 ? filteredData : displayCharacters;

    if (filteredData.length === 0) {
      result = filteredData;
    }

    if (getFilterCharacters.length === 1) {
      result = displayCharacters;
    }
  } else if (getFilterCharacters[0] === "SPECIES") {
    for (let a of getFilterCharacters) {
      all = displayCharacters.filter(
        (item) => item.species.toLowerCase() === a.toLowerCase()
      );
      filteredData.push(...all);
    }

    result =
      getFilterCharacters.length !== 0 ? filteredData : displayCharacters;

    if (filteredData.length === 0) {
      result = filteredData;
    }

    if (getFilterCharacters.length === 1) {
      result = displayCharacters;
    }
  } else if (getFilterCharacters[0] === "LOCATION") {
    for (let a of getFilterCharacters) {
      all = displayCharacters.filter(
        (item) => item.location.name.toLowerCase() === a.toLowerCase()
      );
      filteredData.push(...all);
    }

    result =
      getFilterCharacters.length !== 0 ? filteredData : displayCharacters;

    if (filteredData.length === 0) {
      result = filteredData;
    }

    if (getFilterCharacters.length === 1) {
      result = displayCharacters;
    }
  }

  text = result.length + " Characters";

  return (
    <div>
      <header className="container-header container-options">
        <h1> {text} </h1>
      </header>

      {isLoading ? (
        <Spin tip="Loading" size="large">
          <div className={styles.spin} />
        </Spin>
      ) : (
        <List
          pagination={{
            onChange: (page) => {
              console.log(page);
            },

            position: "top",
            align: "end",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          dataSource={result}
          renderItem={(item) => (
            <List.Item>
              <div className={styles.itemPadding}>
                <img
                  onClick={() => openModal(item.id, item.name)}
                  width={200}
                  alt="logo"
                  src={item.image}
                />
                <h5 className={styles.uppercase}>
                  <strong>{item.species} </strong>
                </h5>
                <p>
                  <strong>{item.name} </strong>
                  <br />
                  {item.location.name}
                </p>
              </div>
            </List.Item>
          )}
        />
      )}
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            border: "1px solid #880000",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "20px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        isOpen={modalOpen}
        onRequestClose={closeModal}
      >
        <Character id={selectedId} name={selectedName} />
        <button className={styles.close} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Characters;
