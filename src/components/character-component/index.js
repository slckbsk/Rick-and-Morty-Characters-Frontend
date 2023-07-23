import React from "react";
import "antd/dist/antd.css";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Character = ({ id, name }) => {
  const [character, setCharacter] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");

  const apiUrl = "https://rickandmortyapi.com/api/character";

  const url = apiUrl + "/" + id;
  console.log(name + " YENİ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [url]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <center>
      <div>
        {character ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>
                  <p className={styles.uppercase}>{character.name}</p>
                </th>
              </tr>
              <tr>
                <td>
                  <center>
                    <img
                      src={character.image}
                      alt={character.name}
                      className={styles.images}
                    />
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Id: {character.id}</h4>
                  <h4>Name: {character.name}</h4>
                  <h4>Status: {character.status}</h4>
                  <h4>Gender: {character.gender}</h4>
                  <h4>Species: {character.species}</h4>
                  <h4>Type: {character.type}</h4>
                  <h4>Location: {character.location.name}</h4>
                  <h4>Origin: {character.origin.name}</h4>
                  <h4>Created: {character.created}</h4>
                  <h4>
                    URL:{" "}
                    <a href={character.url} target="_blank" rel="noreferrer">
                      {character.url}
                    </a>
                  </h4>
                  <div>
                    <h4>
                      Episode:{" =>  "}
                      <select
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                      >
                        <option value=""> Select a Episode URL</option>
                        {character.episode.map((item, index) => (
                          <option
                            key={index}
                            value={item}
                            onClick={() => handleItemClick(item)}
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                      <p>
                        Selected URL:{" "}
                        <a href={selectedItem} target="_blank" rel="noreferrer">
                          {selectedItem}
                        </a>
                      </p>
                    </h4>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>
            <h4 className={styles.uppercase}>
              Loading character {name} data...
            </h4>
          </div>
        )}
      </div>
    </center>
  );
};

export default Character;
