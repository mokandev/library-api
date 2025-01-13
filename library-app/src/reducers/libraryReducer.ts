interface IState {
  username: string
}

export const initialState:IState  = {
  username: "",
}

interface IAction {
  type: "user/create"
  payload?: string
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "user/create": {
      return {
        ...state, 
          username: action.payload as string
      }
    }
    
    default:
      throw new Error("Unknown action type");
  }
}