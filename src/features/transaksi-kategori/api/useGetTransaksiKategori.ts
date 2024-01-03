import { UseQueryOptions, useQuery } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';

const useGetTransaksiKategori = (
  options?: UseQueryOptions<
    unknown,
    unknown,
    TransaksiKategoriResponse,
    string[]
  >,
) => {
  const { axios, api } = useApiClient();
  return useQuery(
    ['Transaksi-Kategori'],
    async () => {
      const TransaksiKategori = await api<TransaksiKategoriResponse>(
        axios.get('/transaksi-kategori'),
      );

      return TransaksiKategori;
    },
    {
      ...options,
    },
  );
};

export default useGetTransaksiKategori;
