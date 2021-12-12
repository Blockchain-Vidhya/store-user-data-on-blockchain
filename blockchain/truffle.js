require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROVIDER = process.env.PROVIDER;

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        privatebc: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "4224"
        },
        rinkeby: {
            host: "localhost",
            provider: () => {
                return new HDWalletProvider({
                    "privateKeys": [PRIVATE_KEY],
                    "providerOrUrl": PROVIDER
                })
            },
            network_id: 4
        }
    }
};
