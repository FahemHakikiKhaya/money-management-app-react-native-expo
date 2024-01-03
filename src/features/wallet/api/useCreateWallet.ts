import { UseMutationOptions, useMutation } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { useAuth } from '../../../provider/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCreateWallet = (
  options?: UseMutationOptions<
    Wallet,
    unknown,
    CreateWalletProps,
    unknown
  >,
) => {
  const { axios, api } = useApiClient();

  return useMutation(
    ['create-wallet'],
    async (payload) => {
      const newWallet = await api<Wallet>(
        axios.post('dompet', payload),
      );
      return newWallet;
    },
    {
      ...options,
    },
  );
};

export default useCreateWallet;
