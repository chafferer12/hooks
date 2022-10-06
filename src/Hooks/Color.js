import React,{createContext,useReducer} from 'react'

export const ColorContext = createContext()
export const update="update"
const reducer = (state,action) => {
  switch (action.type) {
    case "update":
      
      return action.color
  
    default:
      return state
  }
}
export const Color = props => {
  const [color,dispatch]=useReducer(reducer,"blue")
  return (
    <ColorContext.Provider value={{ color,dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}
