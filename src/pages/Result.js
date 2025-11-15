import { useNavigate , useLocation } from 'react-router-dom'
import questions from '../data/questions'

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const {result} = location.state || {result:0}
  let total = questions.length

  let message = "";
      if (result === 10) {
        message = "🌟 Excellent";
      } else if (result >= 7) {
        message = "👍 GOOD";
      } else if (result >= 5) {
        message = "🙂 Pretty Good";
      } else {
        message = "😕 Could do better ";
      }

  return (
    <div className='result'>
      <div className='result-box'>
        <h1>Result</h1>
        <h2>{message}</h2>
        <h2>{result}/{total}</h2>
        <button onClick={() => navigate('/Quiz')}>restart Quiz</button>
      </div>
    </div>
    
  )
}
