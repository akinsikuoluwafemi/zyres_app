import React from 'react';
import HighwayItems from './HighwayItems';


export default function Highwaylist({highways}) {
  return (

    <>
      <h2 className="text-center m-3">Highway List</h2>

    <div className="text-center d-flex flex-wrap justify-content align-content mt-5">
        {highways?.map(highway => <HighwayItems key={highway} highway={highway}/> )}
      </div>
      </>
  )
}
