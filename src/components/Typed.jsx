'use client'

import React from 'react'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

function Typedtext({Stings}) {
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current,{
          strings: [{Stings}],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          loopCount: Infinity,  
          
        })
    
        return ()=>{
          typed.destroy();
        }
      },[])
  return (
    <div>
        <span ref={el} />
    </div>
  )
}

export default Typedtext