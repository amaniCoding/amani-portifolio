'use client'

import { createContext, useReducer } from 'react'
import { GlobalContextType, MyContext } from '../types/types';
import { reducer } from './reducer';

export const AppContext = createContext<GlobalContextType | null>(null)
export default function MyProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const ISSERVER = typeof window === "undefined";
  const getItemFromLocalStorage = () => {
    if(!ISSERVER) {
      return localStorage.getItem("isDark");
    }
  }
  const initialState: MyContext = {
    modal: {
      isOpen: false,
      modalContent: [],
      work: undefined,
      isDark: getItemFromLocalStorage() !== null ? JSON.parse(getItemFromLocalStorage() || "{}") : false
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>

}