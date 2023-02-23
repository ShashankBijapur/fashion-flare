import React from "react";
export const SidebarContext = React.createContext();


export default function SidebarContextProvider({ children }) {
  const [login,setLogin] = React.useState(false);
  const [alogin,setAlogin]= React.useState(false);
  const [cartLength, setCartLength] = React.useState(0);


  return (
    <SidebarContext.Provider
      value={{
        login,setLogin,
        alogin,setAlogin,
        cartLength,
        setCartLength,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}