import React from 'react'

export type profileType = {
     name : string
 }

export default function Profile({name}:profileType) {
  return (
    <div> user name is ; {name} </div>
  )
}
