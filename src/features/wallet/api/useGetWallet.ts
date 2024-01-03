import React from 'react';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { UseQueryOptions, useQuery } from 'react-query';

export const useGetWallet = (
  options?: UseQueryOptions<
    unknown,
    unknown,
    GetWalletResponse,
    string[]
  >,
) => {
  const { axios, api } = useApiClient();
  return useQuery(
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
};
