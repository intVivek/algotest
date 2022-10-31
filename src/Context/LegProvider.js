import React, { useState, useContext } from 'react'
const LegContext = React.createContext()

export function useLeg() {
  return useContext(LegContext)
}

export function LegProvider({children }) {

  const [legs, setLegs] = useState([]);

  return (
    <LegContext.Provider value={{legs, setLegs}}>
      {children}
    </LegContext.Provider>
  )
}