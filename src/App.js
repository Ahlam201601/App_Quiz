import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import { BrowserRouter , Routes , Route  } from 'react-router';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Quiz' element={<Quiz/>}/>
      <Route  path='/Result' element={<Result/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
