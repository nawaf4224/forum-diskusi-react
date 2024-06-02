import React, { useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import useSessionStorage from '../lib/useSessionStorage'
import axiosInstance from '../lib/axiosInstance'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    const navigate = useNavigate()
    const apiKey = useSessionStorage('api_key')
    const { setUser } = useContext(UserContext)

    const getUser = async () => {
        try {
            let response = await axiosInstance.get('/auth/validate').data
            setUser(response.data)
        } catch (error) {
            setUser(null)
        }
    }

    useEffect(() => {
        if (!apiKey) 
            navigate('/login')
        
    }, [apiKey, navigate])

    useEffect(() => {
        if (apiKey)
            getUser()

        return (() => {
            setUser(null)
        })
    }, [])

    return (
        <>
            {/* Mungkin sidebar goes here */}
            <Outlet /> {/* Isi */}
            {/* Mungkin leftbar goes here */}
        </>
    )
}

export default MainLayout