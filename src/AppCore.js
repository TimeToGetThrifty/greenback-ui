import React, { Component, useState } from 'react';
import SideNav from './SideNav';
import styled from 'styled-components'

const AppLogo = styled.div`
    text-align: left;
    margin-left: 1em;
    margin-top: 0.4 em;
`;

const AppCore = (props) => {
    const [viewName, setViewName] = useState('assets');
    return (
        <div className="container-fluid">
            <div className="row">
                <AppLogo className="navbar-brand col-md-12">Greenback</AppLogo>
            </div>
            <div className="row">
                <SideNav selectView={(v)=>setViewName(v)}/>
                <div className="col-md-8">{viewName}</div>
            </div>
        </div>
    )
}

export default AppCore;