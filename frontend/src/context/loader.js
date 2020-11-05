import React, { createContext, useState, useContext, useEffect } from 'react';



const LoaderContext = createContext()



export default function LoaderProvider({ children }) {
  const [loader, setLoader] = useState(false)

  return <LoaderContext.Provider value={{
    loader,
    setLoader
  }}
  >
    {children}
  </LoaderContext.Provider>
}

export function useLoader() {
  const context = useContext(LoaderContext)
  const { loader, setLoader } = context
  return { loader, setLoader }
}