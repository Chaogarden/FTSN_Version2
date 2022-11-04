import React from "react";
import "./Card.css";


function Card({ title, content, width = '200px', height = '200px' }) {
    return(
        <div className = "Card" style = {{ width: width, height: height }}>

            <div className = "body" style = {{ width: "175px", height: "175px" }}>
                <h2>
                    {title}
                </h2>

                <p>
                    {content}
                </p>


            </div>

        </div>
    )

}

export default Card
