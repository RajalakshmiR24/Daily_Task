import React from 'react'

export function Funcprops(props) {
  return (
    <>
<p>{props.name}</p>
<Funcprops2 name2 = "Full Stack Developer" />
    </>
  )
}

export function Funcprops2(props) {
    return (
      <>
    <p>{props.name2}</p>
  
      </>
    )
  }



