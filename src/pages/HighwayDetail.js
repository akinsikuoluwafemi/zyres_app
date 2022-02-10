import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {addToFavorites, removeFromFavorites, modifySelectedHighway} from '../redux/actions/highwayActions';


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

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const CommentWrapper = styled.div`
  text-align: center;
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

  },[colorCode, highwayComment]);


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



          {
            selectedHighway.inFavorites ? (

              <ActionWrapper>
               <button onClick={() => {
                  dispatch(removeFromFavorites(selectedHighway));
                  selectedHighway.inFavorites = false;

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

          }} type="button" class={`btn btn-success`}>Add To Favorites</button>

            )
          }


          {/* <button onClick={() => {
            dispatch(addToFavorites(selectedHighway));
            selectedHighway.inFavorites = true;
            alert('added')

          }} type="button" class={`btn btn-success`}>Add to Favorites</button>
 */}





        </div>



      </HighwayDetailsWrapper>




    </div>
  )
}
