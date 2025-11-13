import { useState } from 'react'
import questions from '../data/questions'
import { useNavigate } from 'react-router-dom'


export default function Quiz() {
  
  const [ score , setScore ] = useState(0)
  const [index , setIndex] =useState(0)
const navigate = useNavigate();

  const handleScore = (option)=>{
    let result = score
    if(option === questions[index].answer){
      result=score+1
      setScore(result)
    }
    if(index < questions.length - 1 ){
      setIndex(index + 1)
    }else{
      navigate('/Result',{state:{result}})
    }
  } 

  return (
    <div>
      <h1>{questions[index].question}</h1>
      <h1>{questions[index].answer}</h1>


      {questions[index].options.map((option) => (
        <div key={option}>
          <button onClick={() => handleScore(option)}>{option}</button>
          <br />
          <br />
        </div>
       ))}
    </div>
  )
}
