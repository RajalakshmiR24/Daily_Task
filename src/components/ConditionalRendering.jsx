import React from 'react'

export default function Sample(props) {
    const {age} = props;
  return (
    <>
    {age === "18" ? <Success /> : <Failer />}
    </>
  )
}

export function Success(props) {
  return (
    <>
    <div className="text-green-500">Succesful</div>
    </>
  )
}

export function Failer(props) {
  return (
    <>
    <div className="text-red-500">Failer</div>

    </>
  )
}

