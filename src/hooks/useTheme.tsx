/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface AppThemeProviderProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContext = createContext({} as any)

export default function ThemeContextProvider({ children }: AppThemeProviderProps) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "dark"
  )

  useEffect(() => {
    const root = window.document.documentElement

    const removeOldTheme = theme === "dark" ? "light" : "dark"

    root.classList.remove(removeOldTheme)
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='bg-white dark:bg-bgDark dark:text-white'>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext)
}
