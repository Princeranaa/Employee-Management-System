import React, { createContext } from 'react'
import { useEffect } from 'react';
import { getlocalStorage, setlocalStorage } from '../../utils/LocalStorage';
import { useState } from 'react';

// making authContext

export const AuthContex = createContext()


function AuthProvider({children}) {
  
    const [useData, setuseData] = useState(null);

    useEffect(()=>{
        setlocalStorage()
        const {employees} = getlocalStorage();
        setuseData(employees) 


    },[])
  

    return (
    <div>
        <AuthContex.Provider value={[useData,setuseData]}>
            {children}
        </AuthContex.Provider>
    </div>
  )
}

export default AuthProvider