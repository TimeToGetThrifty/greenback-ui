import React, { Component, useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.nav`
    height: 100%;
    padding-bottom: 100%;
`;

const NavLink = styled.a`
    background: #e3e3e3;
    border-radius: 5px;
    margin-top: 1em;
    margin-left: 2em;
    width: 60%;
`;

const SideNav = (props) => {
    return (
        <Wrapper className="nav col-md-2">
            <NavLink className="nav-link" onClick={() => props.selectView('assets')}>Assets</NavLink>
            <NavLink className="nav-link" onClick={() => props.selectView('portfolio')}>Portfolio</NavLink>
            <NavLink className="nav-link" onClick={() => props.selectView('expenses')}>Expenses</NavLink>
        </Wrapper>
    );
}

export default SideNav;