import { Component } from 'react';
import Notiflix from 'notiflix';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppBox } from './App.styled';
import { Modal } from './Modal/Modal';

const URI = 'https://pixabay.com/api/';
const API_KEY = '27666563-e68b1d227a46c65a42bf27c59'


const axios = require('axios').default;
const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});