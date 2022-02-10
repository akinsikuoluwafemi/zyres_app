import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {addToFavorites, removeFromFavorites, modifySelectedHighway, fetchRoadWorksAsync} from '../redux/actions/highwayActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Cookies from 'js-cookie';


const HighwayDetailsWrapper = styled.div`
  // background-color: #f5f5f5;
  margin: 3rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

 @media (max-width: 900px) {
    grid-template-columns: 1fr;
 }


`

export const Highwaycard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 2rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  & > p > span{
    font-weight: bold;
  }
`

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const CommentWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`

const RoadWorkWrapper = styled.div`
  margin-top: 2rem;

`




export default function HighwayDetail() {

  const { TextArea } = Input;


  const dispatch = useDispatch();

  const {name} = useParams();

  // const selectedHighway = useSelector(state => {
  //   return { ...state.selectedHighway, name };
  // });

  const [highwayComment, setHighwayComment] = useState('')
  const [colorCode, setColorCode] = useState('');

  const selectedHighway = useSelector(state => {
    return state.selectedHighway
  });


  const favoritesArr = useSelector(state => {
    return state.favorites;
  });

  console.log(favoritesArr);



  useEffect(() => {

    dispatch(modifySelectedHighway({
      ...selectedHighway,
      colorCode: colorCode,
      comments: highwayComment
    }));

  }, [colorCode, highwayComment]);


  useEffect(() => {
    dispatch(fetchRoadWorksAsync(name));

  }, []);


  const loading = useSelector(state => {
    return state.isFetching;
  });


  console.log(selectedHighway);


  const roadWorks = useSelector(state => {
    return state.roadworks.roadworks;
  });

  // console.log(roadWorks);


  return (
    <div className="container mt-5">



      <HighwayDetailsWrapper>

        <div>
          {/* <Highwaycard> */}

            <h1>Name: <span>{name} Highway</span></h1>

          {/* </Highwaycard> */}

        </div>

        <div>
          {
            selectedHighway.inFavorites ? (

              <ActionWrapper>
               <button onClick={() => {
                  dispatch(removeFromFavorites(selectedHighway));
                  selectedHighway.inFavorites = false;
                  // Cookies.set('favorites', favoritesArr);





                }} type="button" class={`btn btn-danger`}>Remove From Favorites</button>

                <div>
                  <p className="mt-3">Add Color Code:</p>
                  <Input value={colorCode} onChange={(e)=> setColorCode(e.target.value)}  placeholder="Add Color Code" />
                </div>

                <CommentWrapper>
                  <p style={{textAlign: 'center', fontWeight: 'bold'}}>Add A comment</p>
                  <TextArea placeholder="Add a comment" value={highwayComment} onChange={(e) => setHighwayComment(e.target.value) } rows={4} style={{ width: '100%'}} />
                </CommentWrapper>

            </ActionWrapper>

            ): (
                <button onClick={() => {

                dispatch(addToFavorites(selectedHighway));
                  selectedHighway.inFavorites = true;
                  console.log(selectedHighway);


          }} type="button" class={`btn btn-success`}>Add To Favorites</button>

            )
          }

        </div>
      </HighwayDetailsWrapper>


      {loading ? (
        <div class="spinner-border m-5" role="status">
            <span class="sr-only text-center">Loading...</span>
        </div>

      ) : (
          <RoadWorkWrapper>
          {roadWorks?.map(roadwork => (

          <Highwaycard>
              <List component="div" aria-label="high-way-roadworks">
              <ListItem>
                <Typography style={{ fontWeight: 'bold' }}>Title: <span style={{fontWeight: 'normal'}}>{ roadwork.title }</span></Typography>
                </ListItem>
              <ListItem >
                <Typography style={{fontWeight: 'bold'}}>Subtitle: <span style={{fontWeight: 'normal'}}>{ roadwork.subtitle }</span> </Typography>
              </ListItem>
                <ListItem>
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>

                  Latitude :
                  <span style={{fontWeight: 'normal'}}> {roadwork.coordinate.lat} </span>

                </span>
                &nbsp; &nbsp;
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                  Longitude :

                  <span style={{fontWeight: 'normal'}}>{roadwork.coordinate.long}</span>

                  </span>
              </ListItem>

                <Typography style={{fontWeight: 'bold', marginLeft: '1rem'}}>Description:</Typography>

                <div style={{ fontSize: '1rem', marginLeft: '1rem' }}>
                  {roadwork.description.map(description => (
                  <p>{description }</p>
                ))}
                </div>
              </List>
           </Highwaycard>

          ))}
            <div>
              {roadWorks?.length === 0 && 'No Roadworks'}
          </div>
      </RoadWorkWrapper>
      )}

    </div>
  )
}
