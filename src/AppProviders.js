import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

export const AppProviders = (props) => {
    return (
        <>
            <ThemeProvider>
                <LanguageProvider {...props} />
            </ThemeProvider>
        </>
    )
}
