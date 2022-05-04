type Networks = {
  LOCAL: string | undefined;
  ROPSTEN: string | undefined;
  RINKEBY: string | undefined;
  MAINNET: string | undefined;
};

export const chainIds: { [key in keyof Networks]: number } = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  LOCAL: 1340,
};

export const chainUrls: { [key in keyof Networks]: string } = {
  MAINNET: process.env.REACT_APP_MAINNET_URL || "https://cloudflare-eth.com",
  ROPSTEN: process.env.REACT_APP_ROPSTEN_URL || "https://cloudflare-eth.com",
  RINKEBY: process.env.REACT_APP_RINKEBY_URL || "https://cloudflare-eth.com",
  LOCAL: "http://localhost:8545",
};

export const contractAddresses: Networks = {
  LOCAL: process.env.REACT_APP_MINEABLE_GEAR_ADDRESS_LOCAL,
  ROPSTEN: process.env.REACT_APP_MINEABLE_GEAR_ADDRESS_ROPSTEN,
  MAINNET: process.env.REACT_APP_MINEABLE_GEAR_ADDRESS_MAINNET,
  RINKEBY: process.env.REACT_APP_MINEABLE_GEAR_ADDRESS_RINKEBY,
};

export const network = (process.env.REACT_APP_NETWORK as keyof Networks) || ("LOCAL" as "LOCAL");

export const CONTRACT_ADDRESS = contractAddresses[network] || "";
