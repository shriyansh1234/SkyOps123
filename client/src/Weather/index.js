// Index.js
import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import Layout from '../components/Layout';

const Index = () => {
  const { id, source, destination } = useParams();

  return (
  <WeatherApp id={id} source={source} destination={destination} />
    
  );
};

export default Index;
