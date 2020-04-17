import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}












