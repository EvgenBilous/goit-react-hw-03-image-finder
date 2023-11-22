import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import { Component } from 'react';
import { searchPhoto } from 'services/api';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showModal: false,
    modalData: null,
  };
  // componentDidMount() {
  //   searchPhoto('cars', 1).then(data => {
  //     console.log(data);
  //   });
  // }

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log('fetch');
    }
  }

  getQuery = query => {
    this.setState({ query, page: 1, images: [] });
    console.log(query);
  };
  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  render() {
    return (
      <>
        <SearchBar getQuery={this.getQuery} />
        <ImageGallery />
        <Button handleLoadMore={this.handleLoadMore} />
        <Loader />
        {false && <Modal />}
      </>
    );
  }
}
