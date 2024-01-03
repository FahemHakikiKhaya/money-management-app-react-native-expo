type Wallet = {
  id: number;
  userId: number;
  amount: number;
  name: string;
  description: string;
  image: string;
  accountNumber: number;
};

type GetWalletResponse = Wallet[];

type CreateWalletProps = Pick<
  Wallet,
  Exclude<keyof Wallet, 'id' | 'userId'>
>;
