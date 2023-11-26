import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import Layout from "../components/Layout";

const Index = () => {
ReactDOM.render(
  <Layout><WeatherApp /></Layout>,
  document.getElementById('root')
);
}
export default Index;