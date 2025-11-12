import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

import { BrowserRouter , Routes , Route  } from 'react-router';
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Quiz' element={<Quiz/>}/>
      <Route  path='/Result' element={<Result/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
