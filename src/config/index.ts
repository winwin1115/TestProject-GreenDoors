export const config = {
  web3: {
    polygon_provider_endpoint:
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_POLYGON_PROVIDER_ENDPOINT_MAINNET
        : process.env.NEXT_PUBLIC_POLYGON_PROVIDER_ENDPOINT_MAINNET,
    polygon_ws_provider_endpoint_mainnet:
      process.env.NEXT_PUBLIC_POLYGON_WS_PROVIDER_ENDPOINT_MAINNET,
    matic_decimal: process.env.NEXT_PUBLIC_MATIC_DECIMAL || 18,
    usdc_decimal: process.env.NEXT_PUBLIC_USDC_DECIMAL || 6,
    jul_decimal: process.env.NEXT_PUBLIC_JUL_DECIMAL || 18,
    usdc_address: process.env.NEXT_PUBLIC_USDC_ADDRESS,
    jul_address: process.env.NEXT_PUBLIC_JUL_ADDRESS,
  },
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL || "",
  },
  socket: {
    baseURL: process.env.NEXT_PUBLIC_SOCKET_BASEURL || "",
  },
  wallet: {
    admin_address: process.env.NEXT_PUBLIC_ADMIN_WALLET_ADDRESS || "",
  },
  web3Auth: {
    web3Auth_clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID || "",
    google_clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID || "",
  },
};
