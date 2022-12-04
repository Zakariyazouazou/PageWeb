import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'web page',
    text: 'A document which can be displayed in a web browser such as Firefox, Google Chrome, Opera, Microsoft Internet Explorer or Edge, or Apple s Safari. These are also often called just pages.',
  },
  {
    title: 'website',
    text: 'A collection of web pages which are grouped together and usually connected together in various ways. Often called a "web site" or a "site.".',
  },
  {
    title: 'web server',
    text: 'A computer that hosts a website on the Internet..',
  },
  {
    title: 'search engine',
    text: 'A web service that helps you find other web pages, such as Google, Bing, Yahoo, or DuckDuckGo. Search engines are normally accessed through a web browser (e.g. you can perform search engine searches directly in the address bar of Firefox, Chrome, etc.) or through a web page .',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
