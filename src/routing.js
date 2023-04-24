import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './screens/home'
import { About } from './screens/about'

export default function Routing (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}