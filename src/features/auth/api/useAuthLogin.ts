import { UseMutationOptions, useMutation } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { useAuth } from '../../../provider/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthLogin = (
  options?: UseMutationOptions<AuthLoginResponse, unknown, AuthLoginProps, unknown>,
) => {
  const { axios, api } = useApiClient();
  const { setUser, setAccessToken } = useAuth();

  return useMutation(
    ['login-auth'],
    async (payload) => {
      const authLogin = await api<AuthLoginResponse>(axios.post('auth/login', payload));
      return authLogin;
    },
    {
      onSuccess: (data: AuthLoginResponse) => {
        const { accessToken, ...user } = data;
        setUser(user);
        setAccessToken(accessToken);
        AsyncStorage.setItem('user', JSON.stringify(user));
        AsyncStorage.setItem('accessToken', accessToken);
      },
      ...options,
    },
  );
};

export default useAuthLogin;
