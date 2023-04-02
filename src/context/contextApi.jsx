import React,  { createContext, useState, useEffect } from "react";

import { fetchYoutubeData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props)=>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState('Islamic');
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect(()=>{
        fetchSelectodCategoryData(selectCategories)
    },[selectCategories])

    // Function for random query
    const fetchSelectodCategoryData = (query)=>{
        setLoading(true);
        fetchYoutubeData(`search/?q=${query}`).then(({contents})=>{
            // console.log(contents )
            setSearchResults(contents);
            setLoading(false)
        })}
        
    return (
        <Context.Provider 
        value={{
            loading,
            setLoading,
            searchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
        }}
        >
            {props.children}
        </Context.Provider>
)
    }