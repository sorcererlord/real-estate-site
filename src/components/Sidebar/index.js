import React from "react";
import { SidebarData } from "./SidebarData";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";


const SidebarNav = styled.nav`
    background: #ffffff;
    width: 600px;
    height: 40vh;
    min-height: 200px;
    
    display: flex;
    justify-content: left;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    position: fixed;
    top: 0;

    transition: 500ms;
    z-index: 10;
`

const SidebarHeader = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
`

const CloseButton = styled(TfiClose)`
    margin-right: 1vw;
    margin-top: 1vh;
    color: #5e5e5e;

    &:hover { 
        color: black;
        cursor: pointer;
    }

    height: 2.5em;
    width: 2.5em;
`

const Li = styled.li`
    width: 450px;
    border-bottom: 0.3vh solid #c4c4c4;
`
const A = styled.a`
    font-family: 'SFProDisplay';
    font-size: 24px;
    color: #5E5E5E;

    line-height: 13vh;

    &:hover {
        color: black;
    }
`

const Ul = styled.ul`
    text-align: left;
    list-style-type: none;
`

export default function Sidebar({sidebar, handleClose}) {
    return (
        <SidebarNav sidebar={sidebar ? 1 : 0}>
            <SidebarHeader>
                <CloseButton onClick={handleClose}/>
            </SidebarHeader>

            <Ul>
                {SidebarData.map((item, index) => {
                   return <Li key={index}><A href={item.path}>{item.title}</A></Li>
                })}
            </Ul>
        </SidebarNav>
    )
}