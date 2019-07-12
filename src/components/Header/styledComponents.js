import styled, {keyframes, css} from 'styled-components'
import {colors} from '../cssVariables'

let blink = keyframes`
    0%{
        opacity:1;
    }

    10%{
        opacity:1;
    }
    
    20%{
        opacity:0;
    }

    70%{
        opacity:0;
    }

    80%{
        opacity:1;
    }

    100%{
        opacity:1;
    }
`

export let Header = styled.header`
    width:100%;
    min-height:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:${colors.primary};
`

export let H1 = styled.h1`
    font-size:4rem;
    color:${colors.bright};
    position:relative;
    &::after{
        content:'';
        background:${colors.bright};
        width:6px;
        height:75%;
        position:absolute;
        right:-20px;
        top:50%;
        transform:translateY(-50%);
        animation:none;
        ${props => !props.isChanging && css`
            animation:${blink} 1s linear infinite;
        `}
        
    }
`
export let Span = styled.span`
    
`
