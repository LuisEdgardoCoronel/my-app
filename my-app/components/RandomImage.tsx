import React from 'react'


type Props = {image:string};


const RandomImage = ({image}:Props):React.JSX.Element => {
  return (
    <img width={320} height="auto" className='rounded' src={image} />
  )
}

export default RandomImage