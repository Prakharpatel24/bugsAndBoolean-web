import Body from './Components/Body'
import Login from './Components/Login'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
