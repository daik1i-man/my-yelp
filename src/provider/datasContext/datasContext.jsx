import React, { createContext, useState } from 'react'

export const DatasContext = createContext();

export default function DatasContextComponent({ children }) {
    const [restarauntData, setRestarauntData] = useState([]);
    return <DatasContext.Provider value={{ restarauntData, setRestarauntData }}>{children}</DatasContext.Provider>
}

