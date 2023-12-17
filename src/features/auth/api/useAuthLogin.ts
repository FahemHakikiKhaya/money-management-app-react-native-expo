import { UseMutationOptions, useMutation } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { useAuth } from '../../../provider/AuthProvider';

const useAuthLogin = (
  options?: UseMutationOptions<AuthLoginResponse, unknown, AuthLoginProps, unknown>,
) => {
  const { axios, api } = useApiClient();
  const { setUser } = useAuth();

  return useMutation(
    ['login-auth'],
    async (payload) => {
      const authLogin = await api<AuthLoginResponse>(axios.post('auth/login', payload));
      return authLogin;
    },
    {
      onSuccess: (data: AuthLoginResponse) => {
        setUser(data);
      },
      ...options,
    },
  );
};

export default useAuthLogin;
