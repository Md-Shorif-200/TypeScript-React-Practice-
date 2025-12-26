
 type ListPropsType<T> = {
      items : T[],
      onClick : (value :T) => void
 }



export default function List<T extends {id : number,name : string,}>({items,onClick}:ListPropsType<T>) {
  return (
    <div>
         <h1> List of Item </h1>
          <div>
             {
                 items.map((item,index) => {
                     return (
                          <h2 key={index} onClick={() => onClick(item)} > {item.id} {item.name}</h2>
                     )
                 })
             }
          </div>
    </div>
  )
}
