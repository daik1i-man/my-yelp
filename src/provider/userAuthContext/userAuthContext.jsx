import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../database/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const UserAuthContext = createContext();

export default function UserAuthContextComponent({ children }) {
    const [loading, setLoading] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        setLoading(true);
        const FindUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true);
                setUserDatas(user);
            } else {
                setIsUser(false);
            }
            setLoading(false);
        })

        return FindUser;
    }, [auth])

    return <UserAuthContext.Provider value={{ isUser, setIsUser, userDatas, setUserDatas, loading, setLoading }}>{children}</UserAuthContext.Provider>
}

