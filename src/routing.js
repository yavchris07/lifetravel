import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './screens/home'
import { About } from './screens/about'
import { Services } from './screens/services'
import { Contacts } from './screens/contacts'
import Navbar from './component/navbar'
import { Footer } from './component/footer'

export default function Routing (){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={< Contacts/>} />
        </Routes>   
        <Footer />
        </BrowserRouter>
    )
}