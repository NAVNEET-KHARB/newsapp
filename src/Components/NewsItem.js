import React from "react";

export default function NewsItem(props) {
  let d = new Date(props.date)
  let publish = d.toGMTString()
  return (
    <div>
      <div className={props.mode==="dark"?"card dark dark-txt":"card card-light"}>
        <center>
          <img src={props.imageUrl} className="card-img" alt="Failed to load" />
        </center>
        <div className="card-body">
          <h3 className={props.mode==="dark"?"card-newssrc card-newssrc-dark":"card-newssrc card-newssrc-light"}>{props.source}</h3>
          <h3 className="card-title">{props.title}...</h3>
          <p className="card-text">{props.description}...</p>
          <p className="card-credentials">
            {" "}
            By <b>{props.author}</b> on {publish}{" "}
          </p>
        </div>
        <button className={props.mode==="dark"?"cardbtn cardbtn-dark":"cardbtn cardbtn-light"}>
          <a href={props.newsUrl} target="_blank" rel="noreferrer">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
}
