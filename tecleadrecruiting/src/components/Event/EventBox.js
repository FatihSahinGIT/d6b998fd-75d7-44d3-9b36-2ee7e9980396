/* === GENERAL IMPORT === */
import React from "react";

/* === STYLE IMPORT === */
import "../../style/components/EventBox.scss";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const EventBox = (props) => {
  const { title, illustration, direction, start, end, venue } = props;

  /* === FUNCTION TO DEFINE A VIABLE SORT OF TIME FOR START & BEGINNING OF THE EVENT === */
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="event-container">
        <div className="event-name">
          <h2 id="event-title">{title}</h2>
        </div>

        <div className="event-header">
          <img alt="Event Header Illustraion" src={illustration}></img>
        </div>

        <div className="event-details">
          <a href={direction} target="_" id="event-venue">
            <LocationSearchingIcon /> {venue}
          </a>
          <section className="event-date">
            <h2>Start: {formatDate(start)}</h2>
            <h2>End: {formatDate(end)}</h2>
          </section>

          <button
            /* === WHENEVER THIS BUTTON IS CLICKED, IT UPDATES THE CART === */
            onClick={() => {
              props.onClick(props);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default EventBox;
