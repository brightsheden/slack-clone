// @flow strict

import { Add, Apps, BookmarkBorder, Create, 
    Drafts, ExpandLess, ExpandMore, 
    FiberManualRecord, 
    FileCopy, Inbox,
    InsertComment,
    People } from '@material-ui/icons';
import * as React from 'react';
import styled from 'styled-components'
import SidebarOptions from './SidebarOptions';
import {useCollection} from 'react-firebase-hooks/firestore'
import {auth, db} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';




function SideBar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'))
     const [user] = useAuthState(auth)
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecord/>
                       {user?.displayName}
                    </h3>
                </SidebarInfo>
                <Create/>


            </SideBarHeader>

            <SidebarOptions Icon={InsertComment} title='Thread' />
            <SidebarOptions Icon={Inbox} title='Mention & reactions' />
            <SidebarOptions Icon={Drafts} title='Saved items' />
            <SidebarOptions Icon={BookmarkBorder} title='Channel Browser' />
            <SidebarOptions Icon={People} title='People and users group' />
            <SidebarOptions Icon={Apps} title='Apps' />
            <SidebarOptions Icon={FileCopy} title='File Browser' />
            <SidebarOptions Icon={ExpandLess} title='Show less' />
            <hr/>
            <SidebarOptions Icon={ExpandMore} title='Channels' />
            <hr />
            <SidebarOptions Icon={Add} title='Add' addChannelOptions />
            
            {channels?.docs.map(doc => (
                <SidebarOptions key={doc.id}
                 id={doc.id}  
                 title={doc.data().name}  />
            ))}

            
        </SideBarContainer>
    );
};

export default SideBar;


const SideBarContainer = styled.div`
    color: white;
    background-color: #3f0f40;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px ;
        border: 1px solid #49274b
    }
`; 

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;

    }
    `;

const SidebarInfo = styled.div`

    flex: 1;
    

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`