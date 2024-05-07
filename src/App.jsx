import React from "react"
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import ShowBook from "./pages/ShowBook"
import Home from "./pages/Home"
import CreateBook from "./pages/CreateBook"
import DeleteBook from "./pages/DeleteBook"
import EditBook from "./pages/EditBook"
import Login from "./pages/Login"
import Header from "./Components/header"
import Profile from "./pages/Profile/Profile"
import Register from './pages/Register'
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/Hero/About"
import Contact from "./Components/Hero/Contact"
import ScreenAbout from "./Components/Hero/ScreenAbout"
import AlllMessage from "./Components/Admin/AlllMessage"
import AllUsers from "./Components/Admin/AllUsers"
import HomeAdmin from "./Components/Admin/HomeAdmin"
import PrivateRoute from "./PrivateRouter"
// import HeroSection from "./Components/Hero/HeroSection"

const App = ()=> {
    return(
      <BrowserRouter>
      {/* <Header /> */}
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/sign-up" element={<Register/>} />

        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='api/users/profile'  element={<Profile/>}/>
        <Route path='/about'  element={<ScreenAbout/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/AllMessage' isAdmin={true}  element={<AlllMessage/>}/>
        <Route path='/AllUsers' isAdmin={true} element={<AllUsers/>}/>
        <Route path='/HomeAdmin' isAdmin={true}  element={<HomeAdmin/>}/>


      </Routes>
      </BrowserRouter>
    )
}

export default App