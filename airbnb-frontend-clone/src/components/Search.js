import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//Date Picker
function Search() {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="search__right">
        <h2>
          Number Of Guests
          <EmojiPeopleIcon />
        </h2>

        <input min={0} defaultValue={1} type="number" />
        <br />
        <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
      </div>
    </div>
  );
}

export default Search;
