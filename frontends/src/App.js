
import './App.css'
import LandingPage from './Screens/LandingPage/LandingPage'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import MyNotes from './Screens/MyNotes/MyNotes'
import LoginPage from './Screens/LoginPage/LoginPage'
import RegisterPage from './Screens/RegisterPage/RegisterPage'
import ProfilePage from './Screens/ProfilePage/ProfilePage'
import AdminLoginPage from './Screens/adminLoginPage/AdminLoginPages'
import AdminHome from './Screens/AdminHomePage/AdminHomePage'
import AddUser from './Screens/AddUserPage/AddUser'
import EditUser from './Screens/EditUser/EditUser'
import CreateNote from './Screens/CreateNote/CreateNote'
import { useState } from 'react'
import SingleNote from './Screens/SingleNote/SingleNote'



function App() {
   

  return (
    <BrowserRouter>
    <div>
        
        <main >
              <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/profile' element={<ProfilePage/>}></Route>

              <Route path='/register' element={<RegisterPage/>}></Route>
              <Route path='/mynotes' element={<MyNotes/>}></Route>
              <Route path='/createnote' element={<CreateNote/>}></Route>
              <Route path='/note/:id' element={<SingleNote/>}></Route>
              <Route path='/admin' element={<AdminLoginPage/>}></Route>
              <Route path='/adminhome' element={<AdminHome/>}></Route>
              <Route path='/adduser' element={<AddUser/>}></Route>
              <Route path='/updateuser/:id' element={<EditUser/>}></Route>




              </Routes>
              

          
          

          
        </main>
        
       </div>
    </BrowserRouter>
    
      
    
  )
}

export default App