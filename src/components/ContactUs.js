import React from "react";
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import "./ContactUs.css";

const ContactUs = () => {
  const lorem = new LoremIpsum();
  const paragraphCount = 4; 
  const sentenceCount = 8; 

  const loremIpsumSentence = lorem.generateSentences(1)
  const loremIpsumSentence2 = lorem.generateSentences(1)

  const loremIpsumParagraphs = Array.from({ length: paragraphCount }, () =>
    lorem.generateSentences(sentenceCount)
  );

  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  return (
    <div className="contact-us-container" style={{ fontFamily: "Prima Sans BT" }}>
      <div className="contact-us-titles">
      <h3>{loremIpsumSentence}</h3>
      <h4>{loremIpsumSentence2}</h4>
      </div>
      <div className="columns">
        {loremIpsumParagraphs.map((paragraph, index) => (
          <p key={index} className={`paragraph ${index === 0 ? "bold" : ""}`}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="button-container">
        <button className="contact-us-button" onClick={handleContactUsClick}>
          Contact us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
