import { FC } from "react";

interface Pallete {
  primary: string;
}

const usePallete = (): Pallete => {
  return {
    primary: "#0D3B6C",
  };
};

export default usePallete;
