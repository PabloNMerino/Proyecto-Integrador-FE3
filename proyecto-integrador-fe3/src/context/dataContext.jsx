import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [theme, setTheme] = useState('dark')
    const [dataFetch, setDataFetch] = useState({})

    const toggleTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark')
    }
    
    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setDataFetch(data)
    }

    useEffect(()=>{
        
        fetchData();
    }, [])

    return(
        <DataContext.Provider value={{theme, toggleTheme, dataFetch}}>
            {props.children}
        </DataContext.Provider>
    )
}
