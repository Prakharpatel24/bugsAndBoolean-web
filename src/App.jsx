import { Provider } from 'react-redux'
import Body from './Components/Body'
import Login from './Components/Login'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import appStore from './utils/store/appStore'
import Feed from './Components/Feed'
import Profile from './Components/Profile'
import { ToastContainer } from 'react-toastify'
import Connections from './Components/Connections'
import Requests from './Components/Requests'

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/' element={<Feed />} />
              <Route path='login' element={<Login />} />
              <Route path='profile' element={<Profile />} />
              <Route path='connections' element={<Connections />} />
              <Route path='requests' element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer
        position='top-center'
      />
    </>
  )
}

export default App
