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
  const initialState: MyContext = {
    modal: {
      isOpen: false,
      modalContent: [],
      work: undefined,
      isDark: JSON.parse(localStorage.getItem("isDark") || '{}')
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>

}