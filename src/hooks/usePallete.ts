import { FC } from 'react';

interface Pallete {
  primary: string;
}

const usePallete = (): Pallete => {
  return {
    primary: '#3366FF',
  };
};

export default usePallete;
