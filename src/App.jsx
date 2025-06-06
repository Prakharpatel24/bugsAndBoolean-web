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
import SignUp from './Components/SignUp'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsAndConditions from './Components/TermsAndConditions'
import CancellationAndRefund from './Components/CancellationAndRefund'
import ShippingAndDelivery from './Components/ShippingAndDelivery'
import ContactUs from './Components/ContactUs'
import Chat from './Components/Chat'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={appStore}>
          <BrowserRouter basename='/'>
            <Routes>
              <Route path='/' element={<Body />}>
                <Route path='/' element={<Feed />} />
                <Route path='login' element={<Login />} />
                <Route path='profile' element={<Profile />} />
                <Route path='connections' element={<Connections />} />
                <Route path='requests' element={<Requests />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
                <Route path='terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='cancellation-and-refund' element={<CancellationAndRefund />} />
                <Route path='shipping-and-delivery' element={<ShippingAndDelivery />} />
                <Route path='contact-us' element={<ContactUs />} />
                <Route path='chat/:targetUserId' element={<Chat />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
        <ToastContainer
          position='top-center'
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
