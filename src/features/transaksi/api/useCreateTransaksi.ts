import { UseMutationOptions, useMutation } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';

const useCreateTransaksi = (
  options?: UseMutationOptions<
    TransaksiResponse,
    unknown,
    Transaksi,
    unknown
  >,
) => {
  const { axios, api } = useApiClient();

  return useMutation(
    ['transaksi'],
    async (payload) => {
      const newTransaksi = await api<TransaksiResponse>(
        axios.post('/transaksi', payload),
      );
      return newTransaksi;
    },
    {
      ...options,
    },
  );

  
};

export default useCreateTransaksi;
