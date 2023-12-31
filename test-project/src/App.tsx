import React from 'react';
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
    const name = 'react'
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    return (
        <Wrapper>
            <Hello name={"react"} color={"red"}/>
            <Hello color={"blue"}/>
        </Wrapper>
    );
}

export default App;
