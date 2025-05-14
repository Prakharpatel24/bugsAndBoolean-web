import { Provider } from 'react-redux'
import Body from './Components/Body'
import Login from './Components/Login'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import appStore from './utils/store/appStore'

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
