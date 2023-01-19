import { useState } from 'react'

function Media(){

        const [n1, setN1] =  useState(0)
        const [n2, setN2] =  useState(0)
        const [r, setR] =  useState(0)

        function calc(){
                setR ( (Number(n1)+Number(n2))/2 ) 
        }
    
    return (<div> 
            <input id="n1" value={n1} onChange={  (e)=>setN1(e.target.value) }></input>
            <input id="n2" value={n2} onChange= { (e)=>setN2 (e.target.value) } ></input>
            <button onClick={calc}> Salvar </button>
            {r}
    </div>)

}

export default Media