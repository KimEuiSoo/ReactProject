import React from 'react'

interface HelloProps{
    name: string
    color: string
}

function Hello({name, color}: HelloProps){
    return <div style={{color}}>{name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;