// @flow strict

import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth)
    return (
        <HeaderContainer>
            {/* header left*/}
            <HeaderLeft>
                <HeaderAvatar
            onClick={()=> auth.signOut()}
                src={user?.photoURL} alt={user?.displayName} />
                <AccessTime/>
            </HeaderLeft>

            {/* header search*/}
            <HeaderSearch>
                <Search/>
                <input placeholder='Search PAPAFAM' />
            </HeaderSearch>

            {/* header right*/}
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
            
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div` 
    display: flex;
    position:fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
    background-color: #3f0f40;
    color: white
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center; 
    display: flex;
    padding: 0 50px;
    color:gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
        

    }

`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;


    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;

    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`
const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8;
}
`