import React from "react";

export default function FormattedDate(props) {
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[props.date.getMonth()];
  if (month < 10) {
    month = `0${month}`;
  }
  let year = props.date.getFullYear();
  return (
    <span className="FormattedDate">
      {date} / {month} / {year}
    </span>
  );
}
