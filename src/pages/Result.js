import { useNavigate , useLocation } from 'react-router-dom'

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const {result} = location.state || {result:0}
  return (
    <div className='result'>
      <h1>Result</h1>
      <h2>{result}</h2>
      <button onClick={()=> navigate('/')}>restart Quiz</button>
    </div>
    
  )
}
