import React from 'react'

const ConnectingButton = ({
    createRoomButton = false,
    buttonText,
    onClickHandler
}) => {
    const buttonClass = createRoomButton ? "creatte_room_button" : "join_room_button";
  return (
    <button className={buttonClass} onClick={onClickHandler}>
        {buttonText}
    </button>
  )
}

export default ConnectingButton;
