import { UseQueryOptions, useQuery } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const useGetTransaksi = (
  filter?: {
    transaksiTipeId?: number;
    limit?: number;
  },
  options?: UseQueryOptions<
    unknown,
    unknown,
    GetTransaksiResponse[],
    (string | number | undefined)[]
  >,
) => {
  const { axios, api } = useApiClient();

  const useQueryReturn = useQuery(
    ['transaksi', filter?.transaksiTipeId, filter?.limit],
    async () => {
      let params: Record<string, number> = {};

      if (filter?.transaksiTipeId) {
        params = {
          ...params,
          transaksiTipeId: filter.transaksiTipeId,
        };
      }
      if (filter?.limit) {
        params = {
          ...params,
          limit: filter.limit,
        };
      }

      const transaksiList = await api<GetTransaksiResponse[]>(
        axios.get('/transaksi', {
          params,
        }),
      );
      return transaksiList;
    },
    {
      ...options,
    },
  );

  useFocusEffect(
    useCallback(() => {
      console.log('refetch');
      useQueryReturn.refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return useQueryReturn;
};

export default useGetTransaksi;
