import React from 'react';
import * as S from './styledComponents'
let Header = ({ isChanging, randomText, setStart, started, alternate }) => {
    return (
        <S.Header alternate={alternate} started={started}>
            <S.H1 alternate={alternate}>
                Front end is <S.Spacer></S.Spacer><S.NoBreak><S.Span alternate={alternate} isChanging={isChanging}>{randomText}</S.Span> .</S.NoBreak>
            </S.H1>
            <S.TextContainer onClick={() => setStart(true)}>
                <S.H2 started={started}>Explore</S.H2>
            </S.TextContainer> 
        </S.Header>
    )
}

export default Header;