import React, {createContext, useContext, useReducer} from 'react'

export const TableContext = createContext();

export const TableProvider = ({initialState, reducer, children}) => {
    return (
        <TableContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </TableContext.Provider>
    )
}

export const useTableValue = () => useContext(TableContext);
