import React, {createContext, useContext , useEffect, useState} from 'react';

const NavbarContext = React.createContext();

const NavbarProvider = ({children}) => {
    const [showSidebar , setShowSidebar] = useState(false);
   
    const openSidebar = () => {
        if(!showSidebar) {
            setShowSidebar(true)
        }
        else {
            setShowSidebar(false)
        }
    }

    const date = new Date();
    let year = date.getFullYear();


    return <NavbarContext.Provider value={{showSidebar, openSidebar , year }}>{children}</NavbarContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(NavbarContext)
}

export {NavbarContext, NavbarProvider};