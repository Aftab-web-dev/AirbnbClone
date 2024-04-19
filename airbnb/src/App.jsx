import { } from 'react'
import './App.css'
import Home from './components/Home/home'
import Host from './components/navbar/pages/Homepage/Home/Host'
import Cardcomponent from './components/cardcomponents/Cardcomponent'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import LoginandSignup from './components/navbar/pages/Loginmodals/LoginandSignup'
import Carddetails from './components/cardcomponents/Carddetail'




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/host' element={<Host/>}></Route>
    <Route path='/card' element={<Cardcomponent/>}></Route>
    <Route path="/card/:id" element={<Carddetails/>}></Route>
    <Route path="/carddetails" element={<Carddetails/>}></Route>
    <Route path='/loginmodal' element={<LoginandSignup/>}></Route>
    </Routes>
    </BrowserRouter>    
  
    </>
  )
}

export default App
