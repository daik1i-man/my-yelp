import React from 'react'
import DatasContextComponent from './datasContext/datasContext'
import ActionsContextComponent from './actionsContext/actions'
import UserAuthContextComponent from './userAuthContext/userAuthContext'

export default function Provider({ children }) {
    return (
        <DatasContextComponent>
            <ActionsContextComponent>
                <UserAuthContextComponent>
                    {children}
                </UserAuthContextComponent>
            </ActionsContextComponent>
        </DatasContextComponent>
    )
}

