import React from 'react'
import { useState } from 'react'
import questions from '../data/questions'

export default function Quiz() {

  // const [question , setQuestion] = useState([])
  const [options , setOptions] = useState([0])
  const [index , setIndex] =useState(0)
  const [ score , setScore ] = useState(0)
  const handleScore = (option)=>{
    if(option === questions[0].answer){
      setScore(score + 1)
    }
    setIndex(index + 1)
    
  } 
  console.log(score)

 

  return (
    <div>
      <h1>{questions[index].question}</h1>
      <button onClick={()=>handleScore(questions[0].options[0])}>{questions[0].options[0]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[0].options[1])}>{questions[0].options[1]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[0].options[2])}>{questions[0].options[2]}</button><br/><br/>
      <button onClick={()=>handleScore(questions[0].options[1])}>{questions[0].options[3]}</button><br/><br/>
    </div>
  )
}
