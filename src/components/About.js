import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Car from './Car';
import Team from './Team';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Routes>
        <Route path="car" element={<Car/>} />
        <Route path="team" element={<Team/>} />
      </Routes>
    </div>
  );
}

export default About;
