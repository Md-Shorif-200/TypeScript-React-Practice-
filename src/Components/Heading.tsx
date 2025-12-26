import type React from "react"



 type childrenType  =  {
     children : string
 }
export default function Heading({children}:childrenType) {
  return (
    <div>
         <h1> {children} </h1>
    </div>
  )
}
