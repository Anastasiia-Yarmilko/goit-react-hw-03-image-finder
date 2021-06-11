import React, { Component } from 'react';
import Container from './components/Container/Container';
import Gallery from './components/Gallery/Gallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import PropTypes from 'prop-types';
import pixabayApi from './services/pixabay.api';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    largeImage: '',
    showModal: false,
    que: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.que !== this.state.que) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.setState({ que: query, page: 1, gallery: [], error: null });
  };
  fetchGallery = () => {
    const { que, page } = this.state;
    const options = { que, page };

    this.setState({ isLoading: true });
    pixabayApi
      .fetchPixabayImgs(options)
      .then(({ data }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  imgClick = largeImageURL => {
    this.setState({
      largeImage: largeImageURL,
    });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, gallery, isLoading, error, largeImage } = this.state;
    const showLoadMoreBtn = gallery.length > 0 && !isLoading;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Search onSubmit={this.onChangeQuery} />
        <Gallery showGallery={gallery} onImgClick={this.imgClick} />

        {isLoading && <Loader />}
        {showLoadMoreBtn && <Button onClick={this.fetchGallery} />}

        {showModal && (
          <Modal onClose={this.imgClick}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  gallery: PropTypes.array,
  page: PropTypes.number,
  que: PropTypes.string,
  largeImage: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default App;