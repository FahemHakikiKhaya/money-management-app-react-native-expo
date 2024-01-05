import React, { useCallback } from 'react';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { UseQueryOptions, useQuery } from 'react-query';
import { useFocusEffect } from '@react-navigation/native';

export const useGetWallet = (
  options?: UseQueryOptions<
    unknown,
    unknown,
    GetWalletResponse,
    string[]
  >,
) => {
  const { axios, api } = useApiClient();
  const useQueryReturn = useQuery(
    ['wallet'],
    async () => {
      const wallets = await api<GetWalletResponse>(
        axios.get(`/dompet/user`),
      );

      return wallets;
    },
    {
      ...options,
    },
  );

  useFocusEffect(
    useCallback(() => {
      useQueryReturn.refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return useQueryReturn;
};
