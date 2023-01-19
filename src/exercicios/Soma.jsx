import { useState } from 'react'

function ExercicioSoma() {
 
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultado, setResultado] =  useState(0)
  
  function somar (){
    setResultado( Number(n1)+ Number(n2) )
  }

  return (
    <div >
        <input value={n1} onChange={(e)=>setN1(e.target.value)}></input>
        <input value={n2} onChange={(e)=>setN2(e.target.value)}></input>
        <button onClick={somar}>Somar</button>
        {resultado}
    </div>
  )
}

export default ExercicioSoma
