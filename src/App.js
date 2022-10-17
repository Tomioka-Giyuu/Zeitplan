import './App.css';
import Login from './components/login/login';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {AuthContextProvider} from './AuthContext/AuthContext'
import Home from './components/dashboard/home';
import CreateAcc from './components/login/signup';
import  Addfac  from './components/makett/addfac';
import About from './components/dashboard/about';
import Editfac from './components/makett/editfac';
import Makett from './components/makett/makett';
import Resetp from './components/login/resetp';
import ProtectedRoute from './components/login/ProtectedRoute';
import { Changepass } from './components/login/changepass';


function App() { 
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>

        <Route exact path='/signup' element={<CreateAcc/>}/>

        <Route exact path='/home' element={
         <ProtectedRoute>
          <Home/>
         </ProtectedRoute>}/>

        <Route exact path='/Addfac' element={
          <ProtectedRoute>
        <Addfac/>
        </ProtectedRoute>}/>

        <Route exact path='/Makett' element={
        <ProtectedRoute>
          <Makett/>
        </ProtectedRoute>}/>

        <Route exact path='/Editfac' element={
        <ProtectedRoute>
          <Editfac/>
        </ProtectedRoute>}/>

        <Route exact path='/About' element={
        <ProtectedRoute>
          <About/>
        </ProtectedRoute>}/>

        <Route exact path='/Changepass' element={
          <ProtectedRoute>
        <Changepass/>
        </ProtectedRoute>}/>

        <Route exact path='/Resetp' element={<Resetp/>}/>

       
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
