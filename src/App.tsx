
import './App.css'
import Counter from './Components/Counter'
import Heading from './Components/Heading'
import User from './Components/User'


function App() {

  const user1 = {
    name :  "shorif Uddin rifat",
    //  age : 23 ,
     lang :  ["bangla","english"]
  }

  return (
    <>
      <User user={user1} />
       <Heading>
      hellow shorif 
       </Heading>

        <Counter/>
    </>
  )
}

export default App
