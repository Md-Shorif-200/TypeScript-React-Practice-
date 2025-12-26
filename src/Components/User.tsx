
type userProps  = {
    user: {
    name: string;
    age?: number;
    lang: string[];
}
}



// type UserType = {
//   name: string;
//   age: number;
//   lang: string[];
// };

// type UserProps = {
//   user: UserType;
// };

export default function User({user}:userProps) {
    const {name,age = 22} = user


  return (
    <div>
      <h1> {name} </h1>

      <p> {age}</p>

        {/* <h1> {
              lang.map( (l,index) => {
                 return <div key={index}>
                       <p> {l}</p>
                 </div>
              })
              
              } </h1> */}
    </div>
  );
}
