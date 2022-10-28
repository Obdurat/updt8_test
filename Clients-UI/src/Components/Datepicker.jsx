import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Picker(props) {
    return (
      <DatePicker
        selected={props.startDate}
        onChange={(date) => props.setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dateFormat="dd/MM/yyyy"
        dropdownMode="select"
      />
    );
  };