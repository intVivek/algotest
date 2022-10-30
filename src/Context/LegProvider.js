import React, { useContext,  useState } from 'react'
const LegContext = React.createContext()

export function useSocket() {
  return useContext(LegContext)
}

export function LegProvider({ id, children }) {
  const [legs, setLegs] = useState()

  return (
    <LegContext.Provider legs={legs} setLegs={setLegs}>
      {children}
    </LegContext.Provider>
  )
}