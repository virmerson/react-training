import { useState } from 'react'


function Counter() {

        const [count,setCounter] =  useState(0)

        function inc (){
                setCounter(count+1)
        }

        function dec(){
            setCounter (count-1)
        }

        return (<div>
               <button onClick={inc}> + </button>
               <button onClick={dec}> - </button>
               <div>{count} </div>
        </div>)

}

export default Counter