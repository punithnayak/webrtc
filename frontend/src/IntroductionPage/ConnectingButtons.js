import React from 'react'
import ConnectingButton from './ConnectingButton'
import { useHistory } from 'react-router-dom'
const ConnectingButtons = () => {
  let history = useHistory();
    const pushJoinRoomPage = () =>{
      history.push("/join-room")
    }
    const pushToJoinRoomPageAsHost = ()=>{
      history.push('/join-room?host=true')
    }
  return (
    <div className='connecting_buttons_container'>
      <ConnectingButton buttonText = 'join a meeting' onClickHandler={pushJoinRoomPage}/>
      <ConnectingButton createRoomButton buttonText = 'Host a meeting' onClickHandler={ pushToJoinRoomPageAsHost }/>
    </div>
  )
}

export default ConnectingButtons
