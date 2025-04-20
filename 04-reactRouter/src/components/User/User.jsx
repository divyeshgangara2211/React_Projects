import React from 'react'
import { useParams } from 'react-router-dom'

export function User() {
    const{ userid} = useParams() ; 
    //useParams is a hook that returns an object of key-value pairs of the dynamic segments of the URL.
    // In this case, it will return an object with a key userid and its value will be the value of the dynamic segment in the URL.
  return (
    <div className='text-white text-3xl p-5 m-8 bg-gray-700 text-center'>User : {userid}</div>
  )
}