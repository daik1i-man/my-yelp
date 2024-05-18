import React from 'react'

export default function ListsComponent({ restarauntId, restarauntName, restarauntDescription, city }) {
    return (
        <tbody className=''>
            <tr className="text-white border border-solid">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    {restarauntId}
                </th>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    {restarauntName}
                </th>
                <td className="px-6 py-4">
                    {restarauntDescription}
                </td>
                <td className="px-6 py-4">
                    {city}
                </td>
            </tr>
        </tbody>
    )
}
