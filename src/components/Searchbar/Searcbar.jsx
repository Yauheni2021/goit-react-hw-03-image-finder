import propTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchBarBox,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

const INIT_VALUES = {
  queue: '',
};

export class SearchBar extends Component {
  state = { ...INIT_VALUES };

  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ queue: value });
    };
    
  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit({ ...this.state });
  };


  render() {
    const { queue } = this.state;
    return (
      <SearchBarBox>
        <SearchBarForm onSubmit={this.handleSubmit}>
          <SearchBarButton type="submit">
            <BsSearch />
          </SearchBarButton>
          <SearchBarInput
            type="text"
            name="SearchBar"
            autoComplete="off"
            autoFocus
            value={queue}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchBarForm>
      </SearchBarBox>
    );
  }
}