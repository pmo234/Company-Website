import React from "react";
import "./LogIn.css";
import { LoremIpsum } from "lorem-ipsum";


const LogIn = (props) => {

  const lorem = new LoremIpsum();
  const loremIpsumParagraph = lorem.generateParagraphs(1);
  const loremIpsumSentence = lorem.generateSentences(1);


  return (
    <div className="log-in-container" style={{ fontFamily: "Prima Sans BT" }}>
      <div className="log-in-words">
        <h3 className="log-in-headline">{loremIpsumSentence}</h3>
        <p className="log-in-paragraph">{loremIpsumParagraph}</p>

        <button className="log-in-button">
          Log in
        </button>
      </div>
      <img className="log-in-image" src={props.picture} />
    </div>
  );
};

export default LogIn;
