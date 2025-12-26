
import './App.css'
import UserProvider from './Components/Context/UserProvider'
import Counter from './Components/Counter'
import Heading from './Components/Heading'
import User from './Components/User'


function App() {



  return (
    <>
      <User />
       <Heading>
      hellow shorif 
       </Heading>

        <Counter/>


          <UserProvider>
       
          </UserProvider>
    </>
  )
}

export default App
