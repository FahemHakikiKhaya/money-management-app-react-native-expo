type Transaksi = {
  name: string;
  amount: number;
  description: string;
  transaksiKategoriId: number;
  transaksiTipeId: number;
  dompetId: number;
};

type TransaksiResponse = Transaksi & { userId: number };

type GetTransaksiResponse = Transaksi & {
  userId: number;
  transaksiKategori: TransaksiKategori;
  createdAt: Date;
  updatedAt: Date;
};
