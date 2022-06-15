/* === GENERAL IMPORT === */
import React from "react";

/* === COMPONENT IMPORT === */
import EventBox from "./EventBox";

/* === STYLE IMPORT === */
import "../../style/components/Event.scss";

const Event = (props) => {
  const { filterEvents } = props;
  return (
    <>
      {/* === MAPPING THROUGH THE FILTERED EVENTS AND DISPLAYING EACH OF THEM IN AN EVENTBOX === */}
      <ul className="event-list">
        {filterEvents.map((event) => {
          return (
            <EventBox
              key={event._id}
              title={event.title}
              illustration={event.flyerFront}
              direction={event.venue.direction}
              venue={event.venue.name}
              start={event.startTime}
              end={event.endTime}
              onClick={props.handleCartItem}
              onDelete={props.deleteCart}
              cart={props.cart}
              event={props.event}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Event;
