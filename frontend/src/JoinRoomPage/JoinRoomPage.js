import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const JoinRoomPage = () => {
  const search = useLocation().search;
  useEffect(()=>{
    const iRoomHost = new URLSearchParams(search).get('host');
    if(iRoomHost){
      
    }
  })
  return (
    <div className='join_room_inputs_container'>
      <div className='join_room_page_panel'></div>
      </div> 
  )
}

export default JoinRoomPage;
