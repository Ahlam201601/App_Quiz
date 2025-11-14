import { useNavigate , useLocation } from 'react-router-dom'
import questions from '../data/questions'

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const {result} = location.state || {result:0}
  let total = questions.length

  let message = "";
      if (result === 10) {
        message = "🌟 Excellent ! Tu as tout réussi !";
      } else if (result >= 7) {
        message = "👍 Bien ! Tu maîtrises bien le quiz.";
      } else if (result >= 5) {
        message = "🙂 Assez bien ! Tu peux encore améliorer.";
      } else {
        message = "😕 Peut mieux faire ! Continue d'apprendre.";
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
