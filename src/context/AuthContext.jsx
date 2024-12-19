import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const user = useAuth();
        return(
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
        );
}


export const useAuthContext = () => useContext(AuthContext);

AuthProvider.propTypes  = {
    children : PropTypes.any
}