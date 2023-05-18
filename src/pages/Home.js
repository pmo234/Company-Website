import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';
import SimpleSwiper from '../components/SimpleSwiper';
import LearnMore from '../components/LearnMore';
import LogIn from '../components/LogIn';
import ContactUs from '../components/ContactUs';

import './home.css';


const Home = () => {
  const [carouselData, setCarouselData] = useState([]);
  

  useEffect(() => {
    ApiService.fetchCarouselData(setCarouselData);
}, []);

  return (
    <div className='home-container'>
      
      <SimpleSwiper card={carouselData.Details}></SimpleSwiper>
      <LearnMore picture={carouselData.Details && carouselData.Details[1].ImageUrl}></LearnMore>
      <LogIn picture={carouselData.Details && carouselData.Details[2].ImageUrl}></LogIn>
      <ContactUs></ContactUs>
     
      
    </div>
  );
};

export default Home;
