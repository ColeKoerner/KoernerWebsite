import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Builds!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/wondra.jpg'
              text='Built from scratch beautiful homes'
              label='New Builds'
              path='/services'
            />
            <CardItem
              src='images/soon.jpg'
              text='Additions and Renovations'
              label='Renovations'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/soon.jpg'
              text='Sheds and outdoor construction'
              label='Odds & Ins'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
