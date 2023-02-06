import React from 'react'
import styled from 'styled-components';

const BotaoSite = styled.a`
    width: 50%;
    display: flex;
    color: orange;
    font-weight: bold;
    text-decoration: none;
    justify-content: center;
    background: #ffffff;
    border-radius: 2rem;
    padding: .5rem;
    margin: 1rem auto;
    transition: 1s;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
    &:hover{
        width: 60%;
        padding: .7rem;
        transition: 1s;
        color: #000000;
    }

    @media only screen and (max-width:767px) {
        width: 100%;
    }
`;

const LinkSite = styled.div`
    text-decoration: none;
    &:hover{
        color: #000000;
    }
`;

export default function SitesList(props) {
    return (
        <LinkSite>
            <BotaoSite href={props.link}>
                {props.name}
            </BotaoSite>
        </LinkSite>
    )
}
