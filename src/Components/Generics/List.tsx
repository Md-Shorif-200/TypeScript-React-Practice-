
 type ListPropsType = {
      items : string[];
      onClick : (value:string) => void
 }



export default function List({items,onClick}:ListPropsType) {
  return (
    <div>
         <h1> List of Item </h1>
          <div>
             {
                 items.map((item,index) => {
                     return (
                          <h2 key={index} onClick={() => onClick(item)} > {item} </h2>
                     )
                 })
             }
          </div>
    </div>
  )
}
