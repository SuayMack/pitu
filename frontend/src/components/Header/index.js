import React from 'react';
import { Logo, HeaderContainer } from './styles';

import icon from '../../assets/icone.png';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={icon} alt='Pitu - encurtador de URL' />
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;