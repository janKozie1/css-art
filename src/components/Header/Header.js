import React, {useState, useEffect} from 'react'

import * as S from './styledComponents'

const Header = () => {
    let randomTexts = ['Art','Style', 'Everything', 'Life', 'Power', 'Creation'];
    let [randomText,setRandomText] = useState(randomTexts[0]);

    return ( 
        <S.Header>
            <S.H1>CSS is 
                <S.Span> {randomText}</S.Span>
            </S.H1>
        </S.Header>
     );
}
 
export default Header;