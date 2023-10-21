import React, { useState } from "react";

export default function About(props) {
  const [state, setState] = useState(null);
  const toggle = (i) => {
    if (state === i) {
      return setState(null);
    } else {
      return setState(i);
    }
  };

  return (
    <div className="aboutcomp">
      <div className="accordion">
        {data.map((item, i) => {
          return (
            <div className="acc-item" key={i}>
              <div
                className={props.mode==="dark"?"acc-title acc-title-dark dark-txt":"acc-title acc-title-light"}
                onClick={() => {
                  toggle(i);
                }}
              >
                <h2>{item.question}</h2>
                <span>{state === i ? "-" : "+"}</span>
              </div>
              <div id={props.mode==="dark"?"ac-d":"ac-l"}className={state === i ? "acc-content show" : "acc-content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const data = [
  {
    question: "Question1",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam odit, sunt in maiores neque ducimus assumenda. Sunt, hic praesentium eveniet iste consequuntur ducimus suscipit ut, pariatur fuga dolorem delectus.",
  },
  {
    question: "Question2",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam odit, sunt in maiores neque ducimus assumenda. Sunt, hic praesentium eveniet iste consequuntur ducimus suscipit ut, pariatur fuga dolorem delectus.",
  },
  {
    question: "Question3",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam odit, sunt in maiores neque ducimus assumenda. Sunt, hic praesentium eveniet iste consequuntur ducimus suscipit ut, pariatur fuga dolorem delectus.",
  },
  {
    question: "Question4",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quisquam odit, sunt in maiores neque ducimus assumenda. Sunt, hic praesentium eveniet iste consequuntur ducimus suscipit ut, pariatur fuga dolorem delectus.",
  },
];
