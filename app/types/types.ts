import React from "react";

export type Modalcontent = {
  id: number;
  title: string;
  description: string;
  photo: string;
}


export type MyWork = {
  id: number;
  title: string;
  photo: string;
  link: string;
  modalContent: Modalcontent[];
}


export type Modal = {
  isOpen: boolean;
  modalContent?: Modalcontent[];
  work?: MyWork
}

export type MyContext = {
  modal: Modal;
}

export type GlobalContextType = {
  state: MyContext;
  dispatch: React.Dispatch<MyAction>;
}


export type MyAction = | { type: 'SHOW_MODAL'; payload: MyContext } | { type: 'CLOSE_MODAL'; payload: MyContext };