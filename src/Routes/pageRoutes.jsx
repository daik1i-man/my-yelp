import React, { Suspense, lazy, useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { UserAuthContext } from '../provider/userAuthContext/userAuthContext';

export default function PageRoutes() {
    const { isUser, loading } = useContext(UserAuthContext);

    const MainPage = lazy(() => import("../pages/mainPage/mainPage"));
    const UserProfile = lazy(() => import("../pages/userProfile/userProfile"));
    const Register = lazy(() => import("../pages/register/register"));
    const Login = lazy(() => import("../pages/login/login"));
    const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

    if (loading) {
        return <LoaderComponent />
    }

    return (
        <Suspense fallback={<LoaderComponent />}>
            <Header />
            <Routes>
                <Route path='/' element={isUser ? <UserProfile /> : <MainPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Suspense>
    )
}