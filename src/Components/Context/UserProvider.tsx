import React, { createContext, useState } from "react";

type userContextProviderProps = {
  children: React.ReactNode;
};

type AuthUser = {
   name :string;
   age : number;
}

type userContextType = {
   user : AuthUser | null;
   setUser :  React.Dispatch<React.SetStateAction<AuthUser | null>> 

}

export const Usercontext = createContext<userContextType | null>(null);

export default function UserProvider({ children }: userContextProviderProps) {
    const [user,setUser] = useState<AuthUser | null>(null)
  return (
    <Usercontext.Provider value={{user,setUser}}>{children}</Usercontext.Provider>
  );
}
