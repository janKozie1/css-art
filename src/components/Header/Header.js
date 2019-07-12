import React, { useState } from 'react'
import { useInterval } from '../../logic/hooks'

import * as S from './styledComponents'

const Header = () => {
    let randomTexts = ['Art', 'Style', 'Beauty', 'Everything', 'Life', 'Power', 'Creation']
    let [wordCounter, setWordCounter] = useState(0)
    let [randomText, setRandomText] = useState(randomTexts[wordCounter])
    let [visibleLetters, setVisibleLetters] = useState(randomTexts[wordCounter].length)
    let [isChanging, setIsChanging] = useState(false)
    let [bounce, setBounce] = useState(false)
    useInterval(()=>{
        setIsChanging(true)
    },3000)
    useInterval(() => {
        if(!bounce){
            setVisibleLetters(visibleLetters-1)
            setRandomText(randomText.substring(0,visibleLetters))
            if(!visibleLetters){
                setBounce(true)
                setWordCounter((wordCounter+1)%randomTexts.length)
            }
        }else{
            setVisibleLetters(visibleLetters+1)
            setRandomText(randomTexts[wordCounter].substring(0,visibleLetters))
            if(visibleLetters===randomTexts[wordCounter].length){
                setBounce(false);
                setIsChanging(false)
            }
        }
    },isChanging ? 200 : null)
    return (
        <S.Header>
            <S.H1 isChanging={isChanging}>
                CSS is <S.Span>{randomText}</S.Span>
            </S.H1>
        </S.Header>
    );
}

export default Header;