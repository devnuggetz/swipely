import Axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./SwipelyCards.css";
import axios from "./axios";
function SwipelyCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/swipely/cards");
      setPeople(request.data);
      console.log(request);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screne");
  };
  return (
    <div className="swipelyCards">
      <div className="swipelyCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imageUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default SwipelyCards;
