import styled from 'styled-components'
import {colors} from '../cssVariables'
export let Main = styled.main`
    min-height:50%;
    width:100%;
    z-index:200;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-size:1.5rem;
    color:${colors.dark};
`

export let SectionContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export let Section = styled.section`
    height:300px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:300px;
    border:3px solid ${colors.dark};
    position:relative;
    &:after{
        height:80%;
        width:80%;
        position:absolute;
        content:'Personal';
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        /* border:2px solid ${colors.bright}; */
        background:linear-gradient(to top left, white 35%, ${colors.font});
        transform:rotate(-90deg);
        z-index:-1;
        left:-35%;
        top:-20%;
    }
    >h4{
        font-size:1.2rem;
        position:absolute;
        left:-50px;
        bottom: 25px;

    }
    &:last-child{
        opacity:0;
    }
    
`