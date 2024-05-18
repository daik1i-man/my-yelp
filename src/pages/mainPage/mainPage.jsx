import React, { Fragment } from 'react'
import { Button } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <section className='w-full h-full'>
            <div className="max-w-7xl mx-auto h-full">
                <div className="flex justify-between h-full items-center mt-20">
                    <div className="">
                        <h1 className="text-6xl font-semibold w-[570px] leading-tight">Show off your lawn this spring</h1>
                        <p className='w-[450px] text-[12px] my-2'>We’re out of suggestions for you right now. Keep on using Yelp and we’ll have some more for you soon.</p>
                        <Link to='/register'>
                            <Button className="my-5 rounded-md bg-white py-2 px-5 text-sm/6 font-semibold text-gray-800 focus:outline-none">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                    <div className="">
                        <img className='w-[500px] rounded-3xl' src="https://i.pinimg.com/originals/7a/b6/17/7ab61770dc59b7bbfb04d6aefb76172f.gif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

