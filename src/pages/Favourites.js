import React from 'react'
import { useSelector } from 'react-redux';
import { Highwaycard } from './HighwayDetail';

export default function Favourites() {

  const favoritesArr = useSelector(state => {
    return state.favorites;
  });



  return (
    <div className="mt-4">

      {favoritesArr.map(highway => {
        return (
          <Highwaycard key={highway.name} highway={highway} >
            <p>Name: {highway.name}</p>
            <p>Comment: {highway.comments}</p>
            <p>ColorCode: { highway.colorCode}</p>
          </Highwaycard>
        )
      })}




      </div>
  )
}
