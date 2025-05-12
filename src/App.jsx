import Body from './Components/Body'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
