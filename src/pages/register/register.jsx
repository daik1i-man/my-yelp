import { useState, useEffect, useContext } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import { auth, firestore } from '../../database/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@headlessui/react";
import { ActionsContext } from "../../provider/actionsContext/actions";

export default function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [openEyes, setOpenEyes] = useState(false);

    const { setOpen } = useContext(ActionsContext);

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function isValidPassword(password) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return pattern.test(password);
    }

    const SendDatas = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (isValidEmail(email) && isValidPassword(password)) {
            setIsLoading(true);
            setError('');
            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setUserEmail('');
                    setUserPassword('');
                    setOpen(true);
                })
                .catch((error) => {
                    setError(error.message);
                })
            setIsLoading(false);
        } else if (!isValidEmail(email)) {
            setError('Invalid email!');
        }

        else if (!isValidPassword(email)) {
            setError('Password containing at least one number, one uppercase letter, one lowercase letter, and 6 or more characters in length3');
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-16 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">
                        Create account
                    </h1>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-10" onSubmit={SendDatas} noValidate>
                        <p className="text-center text-red-700">{error}</p>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Password
                            </label>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={`${openEyes ? 'text' : 'password'}`}
                                    autoComplete="current-password"
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                                <div onClick={() => setOpenEyes((prev) => !prev)}>
                                    {openEyes ?
                                        (<Eye className="w-5 h-5 cursor-pointer absolute text-gray-500 right-5 top-2.5" />) :
                                        (<EyeOff className="w-5 h-5 cursor-pointer absolute text-gray-500 right-5 top-2.5" />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Button
                                type="submit"
                                className="flex w-full justify-center select-none rounded-md bg-white px-3 py-2 text-sm font-semibold leading-6 text-gray-500 shadow-sm hover:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                {isLoading ? (<svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>) : ('Sign up')}
                            </Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-white">
                            Login
                        </Link>
                    </p>
                </div >
            </div >
        </>
    )
}
