import React, { useContext, useEffect, useState } from 'react'
import ListsComponent from '../../components/listsComponent/listsComponents'
import { Button } from '@headlessui/react'
import { ActionsContext } from '../../provider/actionsContext/actions'
import { DatasContext } from '../../provider/datasContext/datasContext'
import { firestore } from '../../database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function UserProfile() {
    const { setOpenAddRestarautModal } = useContext(ActionsContext);
    const { restarauntData, setRestarauntData } = useContext(DatasContext);
    const restarauntsRef = collection(firestore, "restaurants");

    useEffect(() => {
        const getData = onSnapshot(restarauntsRef, (snapShot) => {
            const temp = [];
            snapShot.forEach((doc) => {
                temp.push(doc.data());
            })

            setRestarauntData(temp);
        })

        return () => getData();
    }, [])

    return (
        <>
            <div className="w-full h-full p-2">
                <div className="max-w-7xl mx-auto">
                    <Button onClick={() => setOpenAddRestarautModal(true)} className="bg-white text-gray-700 py-2 px-10 rounded-md mt-10 mb-10">+ Add restaraunt</Button>
                    <div className="border border-solid rounded-md ">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-white uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Restaurant Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        City
                                    </th>
                                </tr>
                            </thead>
                            {restarauntData.length === 0 ?
                                <div>
                                    <p className='text-center my-3'>Not adding restaraunts yet</p>
                                </div>
                                : (restarauntData.map((restaraunt, index) => (
                                    <ListsComponent
                                        key={index}
                                        restarauntId={index}
                                        restarauntName={restaraunt.RestarauntName}
                                        restarauntDescription={restaraunt.RestarauntDescription}
                                        city={restaraunt.City}
                                    />
                                )))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

