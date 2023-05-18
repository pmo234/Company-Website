import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { useNavigate } from "react-router-dom";
import "./LearnMore.css";

const lorem = new LoremIpsum();

const LearnMore = (props) => {
  const loremIpsumParagraph = lorem.generateParagraphs(1);
  const loremIpsumSentence = lorem.generateSentences(1);
  const loremIpsumSentence2 = lorem.generateSentences(1);
  const loremIpsumSentence3 = lorem.generateSentences(1);
  const loremIpsumSentence4 = lorem.generateSentences(1);
  const loremIpsumSentence5 = lorem.generateSentences(1);

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="learnMore-container" style={{ fontFamily: "Prima Sans BT" }}>
      <div className="words">
        <h3 className="headline">{loremIpsumSentence}</h3>
        <p className="paragraph">{loremIpsumParagraph}</p>
        <ul className="list">
          <li className="bullet-item">{loremIpsumSentence2}</li>
          <li className="bullet-item">{loremIpsumSentence3}</li>
          <li className="bullet-item">{loremIpsumSentence4}</li>
          <li className="bullet-item">{loremIpsumSentence5}</li>
        </ul>
        <button className="learn-more-button" onClick={handleLearnMoreClick}>
          Learn more
        </button>
      </div>
      <img className="learn-more-image" src={props.picture} />
    </div>
  );
};

export default LearnMore;
