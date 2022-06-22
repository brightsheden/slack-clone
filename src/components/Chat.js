// @flow strict

import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import {db} from '../firebase'
import Message from './Message';
function Chat() {

    const roomedId= useSelector(selectRoomId)
    const chatRef = React.useRef(null)

    const [roomDetails] = useDocument(
        roomedId && db.collection('rooms').doc(roomedId)
    )

    const [roomMessages, loading] =useCollection(
        roomedId && db.collection('rooms')
        .doc(roomedId)
        .collection('messages')
        .orderBy('timestamp', 'asc')

    )

    React.useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [roomedId, loading])

    return (
  
        <ChatContainer>
            {roomDetails && roomMessages && (
                 <>
                 <Header>
                     <HeaderLeft>
                         <h4>
                             <strong>#{roomDetails?.data().name}</strong>
                             <StarBorderOutlined/>
     
                         </h4>
                     </HeaderLeft>
                     <HeaderRight>
                         <p><InfoOutlined/>Details</p>
                     </HeaderRight>
                 </Header>
     
                 <ChatMessages>{
                     roomMessages?.docs.map(doc => {
                         const {message, timestamp, user, userImage} = doc.data();
                         return (
                             <Message
                                 key={doc.id}
                                 message={message}
                                 timestamp={timestamp}
                                 user={user}
                                 userImage ={userImage}
                             />
                         )
                     })
                 }
                 <ChatButtom ref={chatRef}/>
                 </ChatMessages>
     
                 < ChatInput 
                     chatRef= {chatRef}
                     channelName = {roomDetails?.data().name}
                     channelId={roomedId}
                 />
                 
                 </>

            )}
           
           
        </ChatContainer>
    );
};

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;


`
const ChatButtom = styled.div`
padding-bottom: 200px`

const ChatContainer = styled.div`
    flex : 0.7;
    flex-grow: 1;
    overflow: scroll;
    margin-top: 60px;

`

const HeaderRight = styled.div`
    >P{
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size:16px ;
    }

`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
 > h4 {
     display:  flex;
     text-transform: lowercase;
     margin-right: 10px;
 }

 > h4 >  .MuiSvgIcon-root{
     margin-left: 10px ;
     font-size: 18px;
 }

`

const ChatMessages = styled.div`

`