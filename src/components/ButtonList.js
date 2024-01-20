import React from 'react'
import Button from './Button';

export const ButtonList = () => {
  const btnNames = ['All','Trending','Coading','Gaming','Cooking','Dancing','Songs','Arjit','News','Anroid','Motivation','Cool','Comedy','Animal'];
  return (
    <div className='flex gap-2 mt-2'>
       {btnNames.map(name => <Button name={name}/>)}
    </div>
  )
}
