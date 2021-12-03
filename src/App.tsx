/* eslint-disable react/react-in-jsx-scope */
// import './App.scss'

import { Switch, Route } from 'react-router-dom'
import { Box, Center, VStack } from '@chakra-ui/react'

import { Login } from '../features/auth/Login'
import { PrivateRoute } from '../common/utils/PrivateRoute'
import { ProtectedComponent } from '../features/auth/ProtectedComponent'
// import logo from './logo.svg'

function Hooray() {
  return (
    <Center h="500px">
      <VStack>
        <Box>Hooray you logged in!</Box>
        <Box>
          <ProtectedComponent />
        </Box>
      </VStack>
    </Center>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </header>
//       <Box>
//       <Switch>
//         <Route exact path="/login" component={Login} />
//         <PrivateRoute path="/">
//           <Hooray />
//         </PrivateRoute>
//       </Switch>
//     </Box>
//     </div>
//   )
// }

function App() {
  return (
    <Box>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/">
          <Hooray />
        </PrivateRoute>
      </Switch>
    </Box>
  )
}

export default App
