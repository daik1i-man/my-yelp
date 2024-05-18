import React, { createContext, useState } from 'react'

export const ActionsContext = createContext();

export default function ActionsContextComponent({ children }) {
    const [open, setOpen] = useState(false);
    const [openAddRestarautModal, setOpenAddRestarautModal] = useState(false);
    return <ActionsContext.Provider value={{ open, setOpen, openAddRestarautModal, setOpenAddRestarautModal }}>{children}</ActionsContext.Provider>
}


