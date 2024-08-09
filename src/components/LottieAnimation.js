// src/components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/example.json'; // Make sure to adjust the path to your JSON file

const LottieAnimation = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieAnimation;
