import React, { useState, useContext, useEffect } from 'react'
const LegContext = React.createContext()

export function useLeg() {
  return useContext(LegContext)
}

export function LegProvider({children }) {

  const [legs, setLegs] = useState([]);
  useEffect(()=>{
    console.log(legs);
  },[legs])

  return (
    <LegContext.Provider value={{legs, setLegs}}>
      {children}
    </LegContext.Provider>
  )
}