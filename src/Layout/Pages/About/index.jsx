import React from 'react';
import Banner from '../About/Banner';
import Welcome from './Welcome';
import Team from './Team';
import People from './People';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <>
    <Banner/>
    <Welcome/>
    <Team/>
      <People/>
      <Testimonials/>
    </>
  );
}

export default About;
