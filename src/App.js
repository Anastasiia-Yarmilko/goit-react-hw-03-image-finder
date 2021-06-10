import React, { Component } from 'react';
import pixabayApi from './services/pixabay.api';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    largeImage: '',
    showModal: false,
    q: '',
    isLoading: false,
    error: null,
  };

}
export default App;