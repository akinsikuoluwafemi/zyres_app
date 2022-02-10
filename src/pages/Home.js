import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highwaylist from '../components/Highwaylist';
import {fetchHighwayAsync} from '../redux/actions/highwayActions';



export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHighwayAsync());

  },[])

  const highways = useSelector(state => {
    return state.highways.roads;
  });





  const loading = useSelector(state => {
    return state.isFetching;
  });

  return (
    <div className=" m-auto">

      {loading ? (
        <div class="spinner-border m-5" role="status">
            <span class="sr-only text-center">Loading...</span>
        </div>

      ) : (
          <div className="container">
            <Highwaylist highways={highways} />
          </div>
      )}

    </div>
  )
}
