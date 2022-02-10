import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {selectAnHighway} from '../redux/actions/highwayActions';
import {  useDispatch } from 'react-redux';


const CardItems = styled.div`
  width: 10rem;
  margin: auto;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 10px;


  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }


  ul {
    list-style: none;
    padding: 0;
  }
  li{
    padding: 0.5rem;

  }

  a{
    text-decoration: none;
    color: black;
  }

`;


export default function HighwayItems({ highway }) {

  const dispatch = useDispatch();


  return (
    <CardItems onClick={() => {
      dispatch(selectAnHighway(highway))
      console.log(highway)

    }} class="card mb-3 mr-3" style={{ cursor: 'pointer' }}>
      <Link to={`/highway/${highway}`} >
      <ul>
        <li >{highway}</li>
      </ul>
      </Link>
  </CardItems>
  )
}
