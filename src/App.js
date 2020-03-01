import React from 'react';
import logo from './logo.svg';
import './App.css';
import student from './components/student';
import {Store} from "./action/store";
import {Provider} from "react-redux";
import {Container} from "@material-ui/core";


function App() {
  return (
    <Provider store={Store}>
      <Container maxWidth="lg">
      <student/>
      </Container>
    </Provider>
  );
}

export default App;
