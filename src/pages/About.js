import React, { useEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import ApiService from "../services/ApiService";
import './About.css'

const lorem = new LoremIpsum();

const About = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    ApiService.fetchCarouselData(setCarouselData);
  }, []);

  const loremIpsumSentence = lorem.generateSentences(1);
  const loremIpsumSentence2 = lorem.generateSentences(1);
  const loremIpsumSentence3 = lorem.generateSentences(1);
  const loremIpsumSentence4 = lorem.generateSentences(1);
  const loremIpsumSentence5 = lorem.generateSentences(1);
  const loremIpsumParagraph = lorem.generateParagraphs(1);
  const loremIpsumParagraph2 = lorem.generateParagraphs(1);
  const loremIpsumParagraph3 = lorem.generateParagraphs(1);
  const loremIpsumParagraph4 = lorem.generateParagraphs(1);
  return (
    <div className="about-container" style={{ fontFamily: "Prima Sans BT" }}>
         <h2 className="headline-contact-us">About us</h2>
      <div >
        <p className="about-bold">{loremIpsumSentence}</p>
        <p className="paragraph">{loremIpsumParagraph}</p>
      </div>
      <div className="image-container">
        <img
          className="about-image"
          src={carouselData.Details && carouselData.Details[1].ImageUrl}
          alt="About Image"
        />
      </div>
      <div className="words">
        
        <p className="paragraph">{loremIpsumParagraph2}</p>
      </div>
      <h5>{loremIpsumSentence}</h5>
      <ul className="list">
          <li className="bullet-item">{loremIpsumSentence2}</li>
          <li className="bullet-item">{loremIpsumSentence3}</li>
          <li className="bullet-item">{loremIpsumSentence4}</li>
          <li className="bullet-item">{loremIpsumSentence5}</li>
        </ul>
        <div className="words">
        
        <p className="paragraph">{loremIpsumParagraph3}</p>
        <p className="paragraph">{loremIpsumParagraph4}</p>
      </div>
    </div>
  );
};

export default About;
