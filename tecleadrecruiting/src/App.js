/* === GENERAL IMPORT === */
import React, { useEffect, useState } from "react";

/* === COMPONENTS IMPORT === */
import Navigation from "./components/Navigation/Navigation";
import Event from "./components/Event/Event";

/* === STYLES IMPORT === */
import "./style/index.scss";

const App = () => {
  const [event, setEvent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  /* === GETTING THE EVENT DATA VIA USE EFFECT HOOK === */
  useEffect(() => {
    fetch("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then((response) => response.json())
      .then((data) => {
        /* === SORTING THE DATA FROM THE API DEPENDING ON THE DATE === */
        const result = data.sort((a, b) => a.date.localeCompare(b.date));
        setEvent(result);
      });
  }, []);

  /* === UPDATING THE SEARCH STATE VIA USERINPUT === */
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  /* === FILTERING THE EVENTS === */
  const filteredEvents = event.filter((searchingEvent) =>
    searchingEvent.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  /* === SETTING THE CART ITEM === */
  const handleCartItem = (eventItem) => {
    setCart([...cart, eventItem]);
  };

  const deleteCart = () => {
    setCart([]);
  }

  const date = event.date;

  return (
    <>
      <Navigation searchHandler={searchHandler} cart={cart} deleteCart={deleteCart}/>
      <Event
        filterEvents={filteredEvents}
        cart={cart}
        date={date}
        handleCartItem={handleCartItem}
      />
    </>
  );
};

export default App;
