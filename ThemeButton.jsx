import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ThemeButton = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'))

    useEffect(() => {
        if(localStorage.getItem('theme') === null) setTheme('light')
        if(localStorage.getItem('theme') === 'light') setTheme('light')
        if(localStorage.getItem('theme') === 'dark') setTheme('dark')
    }, [])

    useEffect(() => {
        setCurrentTheme(theme)

        theme === 'dark'
        ? document.body.classList.add('dark-theme')
        : document.body.classList.remove('dark-theme')
    }, [theme])

    const setCurrentTheme = (currentTheme) => {
        localStorage.setItem('theme', currentTheme)
    }

    const changeTheme = () => {
        theme === 'light'
        ? setTheme('dark')
        : setTheme('light')
    }

    return (
        <>
            <button onClick={changeTheme}>
                {
                    theme === 'dark'
                    ? <i className="bi bi-moon-fill"></i>
                    : <i className="bi bi-brightness-high-fill"></i>
                }
            </button>
            {JSON.stringify(theme)}
        </>
    )
}

export default ThemeButton