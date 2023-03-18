const Action ={
    SET_IS_HOST:"SET_IS_ROOM",
};

export const setIsRoomHost = (isRoomHost)=>{
    return{
        type:Action.SET_IS_HOST,
        isRoomHost,
    }
}

export default Action;