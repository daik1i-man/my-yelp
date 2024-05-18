import { Menu, MenuButton, MenuItem, MenuItems, Transition, Button } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import Logo from '/public/image.png'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { UserAuthContext } from '../../provider/userAuthContext/userAuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../database/firebase'

export default function Header() {
    const { isUser } = useContext(UserAuthContext);
    let navigate = useNavigate();

    const LogOutHandler = async () => {
        await signOut(auth)
            .then(() => {
                navigate('/');
            })
    }

    return (
        <>
            <header className='w-full h-[90px]'>
                <div className="max-w-7xl h-full mx-auto justify-between items-center flex">
                    <div className="w-[120px] h-16">
                        <Link to='/'>
                            <img className='w-full h-full' src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="">
                        {isUser ? (
                            <Menu>
                                <MenuButton className="w-14 h-14 rounded-full items-center gap-2 bg-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner">
                                    <span className="" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="rounded-full"
                                        src="https://cdn.iconscout.com/icon/free/png-512/free-user-1556-528036.png?f=webp&w=256"
                                        alt=""
                                    />
                                </MenuButton>
                                <Transition
                                    enter="transition ease-out duration-75"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <MenuItems
                                        anchor="bottom end"
                                        className="w-36 origin-top-right my-2 rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white"
                                    >
                                        <MenuItem>
                                            <Button
                                                onClick={LogOutHandler}
                                                className="w-full flex gap-2 items-center rounded-lg py-1 data-[focus]:bg-white/10"
                                            >
                                                <LogOut className="" />
                                                Sign out
                                            </Button>
                                        </MenuItem>
                                    </MenuItems>
                                </Transition>
                            </Menu>
                        ) : (
                            <Link to='/login'>
                                <Button className="items-center border border-white rounded-md bg-[#333] py-1.5 px-10 text-sm/6 font-semibold text-white  focus:outline-none data-[hover]:text-[#222] data-[hover]:bg-white">
                                    Login
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}


