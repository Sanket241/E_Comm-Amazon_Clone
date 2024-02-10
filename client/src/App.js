import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/header/Navbar';
import MainComp from './component/home/MainComp';
import Newnav from './component/newnav/Newnav';
import { Route, Routes } from 'react-router-dom';
import Signup from './component/signup_signin/Signup';
import Signin from './component/signup_signin/Signin';

function App() {
  return (
    <>
      < Navbar />
      <Newnav />
      <Routes >
        <Route path='/' element={<MainComp />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Signin />} />

      </Routes>
      <Footer />



    </>
  );
}

export default App;
