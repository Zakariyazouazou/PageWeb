import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="web server" text="A web service that helps you find other web pages, such as Google, Bing, Yahoo, or DuckDuckGo. Search engines are normally accessed through a web browser (e.g. you can perform search engine searches directly in the address bar of Firefox, Chrome, etc.) or through a web page (e.g. bing.com or duckduckgo.com)." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Page web" text="A web page (or webpage) is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser.[1] A website consists of many web pages linked together under a common domain name. The name web page is a metaphor of paper pages bound together into a book." />
      <Feature title="Web navigation" text="Each web page is identified by a distinct Uniform Resource Locator (URL). When the user inputs the URL for a web page into their browser, the browser downloads an HTML file from a web server and transforms all of its elements into an interactive visual representation on the user's device.[4]" />
      <Feature title="Deployment" text="From the perspective of server-side website deployment, there are two types of web pages: static and dynamic. Static pages are retrieved from the web server's file system without any modification,[5] while dynamic pages must be created by the server on the fly, typically reading from a database to fill out a template, before being sent to the user's browser" />
    </div>
  </div>
);

export default WhatGPT3;
