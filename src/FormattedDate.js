import React from "react";

export default function FormattedDate(props){
    console.log(props.date);
    let date = props.date.getDate();
    let month = props.date.getMonth();
    let year = props.date.getYear();
    return (
        <span>
            {date}/{month}/{year}
        </span>
    );
}