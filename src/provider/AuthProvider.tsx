import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AuthContextData {
  signed: boolean;
  user?: User;
  accessToken?: string;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string>('');

  const appAuthenticationInnit = async () => {
    try {
      const userData: string | null =
        await AsyncStorage.getItem('user');
      const user: User | null = userData
        ? JSON.parse(userData)
        : null;

      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }

      const accessToken = await AsyncStorage.getItem('accessToken');

      // console.log({ accessToken });

      if (accessToken) {
        setAccessToken(accessToken);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    appAuthenticationInnit();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signed: !!user,
        setAccessToken,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
