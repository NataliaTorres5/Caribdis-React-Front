
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WebsiteLayout from "./layouts/WebsiteLayout";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import AnimalPage from "./pages/AnimalPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUs from "./pages/AboutUs"
import BlogPage from "./pages/BlogPage"
import CartPage from "./pages/CartPage"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import ProductPage from "./pages/ProductPages"
import TicketPage from "./pages/TicketPage"
import './App.css'

function App() {
 

  return (
    <>
     <BrowserRouter>
        <WebsiteLayout>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/signinsignup' element={<SignInSignUpPage />} />
        <Route path='/animals' element={<AnimalPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/about' element={<AboutUs  />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/store' element={<ProductPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/visit' element={<TicketPage />} />  
        
          
          
      </Routes>
        </WebsiteLayout>
    </BrowserRouter>
      
    </>
  )
}

export default App
