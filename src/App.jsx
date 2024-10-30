import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import AOS from"aos";
import './index.css';
import "aos/dist/aos.css";
import CartPage from './Pages/Cart/Cart';
import  TopProducts from './Components/TopProducts/TopProducts'
import  Footer from './Components/Footer/Footer'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
const App = () => {
  
  React.useEffect(()=>{
  AOS.init({
offset:100,
duration :800,
easing:"ease-in-sine",
delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div>
      
      <Router>
            <div className="app">
                <header className="">
                    
                    <Navbar />
                </header>
                
              <Routes>
                    <Route path="/cart" element ={<CartPage/>}/>
                     
                    <Route path="/" element ={<TopProducts/>}/>
                  
                    </Routes>
            </div>
        </Router>
     
     <Hero/>
     <Products/>
     <TopProducts/>
     <Footer/>
    </div>
  )
}

export default App
