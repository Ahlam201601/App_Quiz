import { useNavigate } from 'react-router'


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
       <h1>TechEdu Learning Center</h1>
       <div className='start'>
          <button onClick={()=> navigate('/Quiz')}>start test</button>
       </div>
    </div>
  )
}
