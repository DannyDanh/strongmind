import React from "react";

const Exercise = (props) => {
    return (
        <div className="exercise">
            <img src={props.image} alt="Birria-Landia food truck" />
            <h3>{props.name}</h3>
            <p>{props.detail}</p>
            <a href={props.link}>
                <button>View More</button>
            </a>
            
        </div>

    )
}

export default Exercise;

