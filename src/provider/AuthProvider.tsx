import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface AuthContextData {
  signed: boolean;
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{ user, setUser, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
