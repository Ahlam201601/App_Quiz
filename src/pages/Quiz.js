import React from 'react'
import { useState } from 'react'
import questions from '../data/questions'

export default function Quiz() {

  // const [question , setQuestion] = useState([])
  // const [options , setOptions] = useState([0])
  
  const [ score , setScore ] = useState(0)
  const [index , setIndex] =useState(0)

  const handleScore = (option)=>{
    if(option === questions[index].answer){
      setScore(score + 1)
    }
    setIndex(index + 1)
    
  } 
  console.log(score)


//  const passer=()=>{
//   setIndex(index+1)
//  }

  return (
    <div>
      <h1>{questions[index].question}</h1>
      {/* <button onClick={()=>handleScore(questions[index].options[0])}>{questions[index].options[0]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[index].options[1])}>{questions[index].options[1]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[index].options[2])}>{questions[index].options[2]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[index].options[3])}>{questions[index].options[3]}</button><br/><br/> */}

      
      {questions[index].options.map((option) => (
        <div>
          <button onClick={() => handleScore(option)}>{option}</button>
          <br />
          <br />
        </div>
       ))}
    </div>
  )
}
