import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import AOS from"aos";
import "aos/dist/aos.css";
import CartPage from './Pages/Cart/Cart';
import  TopProducts from './Components/TopProducts/TopProducts'
import  Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <header className="flex justify-between p-4 bg-gray-800 text-white">
                    <h1 className="text-xl">My Ecommerce Site</h1>
                    <Navbar />
                </header>
                
                <Switch>
                    <Route path="/cart">
                     <CartPage/>
                     </Route>
                    <Route path="/" exact><TopProducts /></Route>
                </Switch>
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
