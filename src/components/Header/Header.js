import React, { useState } from 'react'
import { useInterval } from '../../logic/hooks'

import * as S from './styledComponents'

const Header = () => {
    let randomTexts = ['Art', 'Style', 'Beauty', 'Design', 'Grace', 'Power', 'Creation']
    let [wordCounter, setWordCounter] = useState(0)
    let [randomText, setRandomText] = useState(randomTexts[wordCounter])
    let [visibleLetters, setVisibleLetters] = useState(randomTexts[wordCounter].length)
    let [isChanging, setIsChanging] = useState(false)
    let [bounce, setBounce] = useState(false)
    let [started, setStart] = useState(false)
    useInterval(() => {
        setIsChanging(true)
    }, randomTexts[wordCounter].length * 200 + 3000)
    useInterval(() => {
        if (!bounce) {
            setVisibleLetters(visibleLetters - 1)
            setRandomText(randomText.substring(0, visibleLetters))
            if (!visibleLetters) {
                setBounce(true)
                setWordCounter((wordCounter + 1) % randomTexts.length)
            }
        } else {
            setVisibleLetters(visibleLetters + 1)
            setRandomText(randomTexts[wordCounter].substring(0, visibleLetters))
            if (visibleLetters === randomTexts[wordCounter].length) {
                setBounce(false);
                setIsChanging(false)
            }
        }
    }, isChanging ? 150 : null)
    return (
        <S.Header>

            <S.H1 >
                Front end is <S.Spacer></S.Spacer><S.NoBreak><S.Span isChanging={isChanging}>{randomText}</S.Span> .</S.NoBreak>
            </S.H1>


            <S.TextContainer onClick={() => setStart(true)}>
                <S.H2 started={started}>Explore</S.H2>
            </S.TextContainer>

            {
                new Array(10).fill("").map((e, index) => {
                    return <S.Slide started={started}/>
                })
            }
            

        </S.Header>
    );
}

export default Header;