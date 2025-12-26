
import './App.css'
import Box from './Components/Context/Box'
import UserProvider from './Components/Context/UserProvider'
import Counter from './Components/Counter'
import List from './Components/Generics/List'
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
       <Box/>
          </UserProvider>

            <List items={['laptop',"smartphone","bluthoote"]}  onClick={(item) => console.log(item)} />
            <List items={
              [
                  {
                   id : 1,
                    name : "shorif",
                     age : 23
                },
                  {
                   id : 2,
                    name : "sakil",
                     age : 24
                },
              ]
            }  onClick={(item) => console.log(item)} />
    </>
  )
}

export default App
