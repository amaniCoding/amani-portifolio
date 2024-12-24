
import { MyAction, MyContext } from "../types/types";

export const reducer = (state: MyContext, action: MyAction): MyContext => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state, modal: {...state.modal, isOpen: action.payload.modal.isOpen, modalContent: action.payload.modal.modalContent, work: action.payload.modal.work}
      };
      case 'CLOSE_MODAL':
        return {
          ...state, modal: {...state.modal, isOpen: action.payload.modal.isOpen, modalContent: action.payload.modal.modalContent, work: action.payload.modal.work}
        };
      case "SET_DARK":
        const ISSERVER = typeof window === "undefined";
        if(!ISSERVER) {
          localStorage.setItem("isDark", JSON.stringify(action.payload));
        }
        return {
          ...state, modal: {...state.modal, isDark: action.payload}
        } ;
    default: return state;
  }
}