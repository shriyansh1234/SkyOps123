// Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const Index = () => {
  const { source, destination } = useParams();

  ReactDOM.render(
    <Layout>
      <WeatherApp source={source} destination={destination} />
    </Layout>,
    document.getElementById('root')
  );

  return <div id="root" />;
};

export default Index;
