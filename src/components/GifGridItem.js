import React from 'react'

const GifGridItem = (props) => {

    return (
        <div className='card animate__animated animate__flipInX animate__delay-1s'>
            <img src={props.url} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}


export default GifGridItem
