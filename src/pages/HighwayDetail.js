import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';



const HighwayDetailsWrapper = styled.div`
  // background-color: #f5f5f5;
  margin: 3rem auto;
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

 @media (max-width: 900px) {
    grid-template-columns: 1fr;
 }


`

const Highwaycard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 3rem;
  font-size: 1.5rem;



  & > p > span{
    font-weight: bold;
  }
`


export default function HighwayDetail() {

  const {name} = useParams();

  const selectedHighway = useSelector(state => {
    return state.selectedHighway || name;
  });

  console.log(selectedHighway);





  return (
    <div className="container mt-5">

      <Link to="/">Back to Highways</Link>

      <HighwayDetailsWrapper>

        <div>

          <Highwaycard>

            <p>Name: <span>{name} Highway</span></p>

          </Highwaycard>



        </div>

        <div>


          <button type="button" class={`btn btn-primary`}>Add To Favorites</button>

        </div>



      </HighwayDetailsWrapper>




    </div>
  )
}
