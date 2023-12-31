import { Wallet } from "@coral-xyz/anchor/dist/cjs/provider";
import {
  Connection,
  PublicKey,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";

// Only properties necessary to create Wallet have been included. Others exist
export interface SolanaXnftInjection {
  connection: Connection;
  publicKey: PublicKey;
  signTransaction<T extends Transaction | VersionedTransaction>(
    tx: T
  ): Promise<T>;
  signAllTransactions<T extends Transaction | VersionedTransaction>(
    txs: T[]
  ): Promise<T[]>;
}

export class XnftWallet implements Wallet {
  #xnftInjection: SolanaXnftInjection;

  constructor(xnftObj: SolanaXnftInjection) {
    this.#xnftInjection = xnftObj;
  }

  get publicKey() {
    return this.#xnftInjection.publicKey;
  }

  signTransaction<T extends Transaction | VersionedTransaction>(
    tx: T
  ): Promise<T> {
    return this.#xnftInjection.signTransaction(tx);
  }

  signAllTransactions<T extends Transaction | VersionedTransaction>(
    txs: T[]
  ): Promise<T[]> {
    return this.#xnftInjection.signAllTransactions(txs);
  }
}

export interface Team {
  name: string;
  logo: any;
  score: number;
}
export interface Game {
  id: string;
  team1: Team;
  team2: Team;
}

export interface TokenInfo {
  networkId: string;
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
}

export interface DataNavigateToChart {
  name: string;
  tokenUsage: number[];
  totalUserBetting: number[];
}

interface FetchReport {
  id: string;
  status: string;
  duration: number;
}

interface Assert {
  type: string;
  networkId: string;
  value: number;
  data: {
    address: string;
    amount: number;
    price: number;
  };
}

export interface PortfolioUser {
  date: number;
  owner: string;
  addressSystem: string;
  fetcherReports: FetchReport[];
  elements: [
    {
      type: string;
      networkId: string;
      platformId: string;
      label: string;
      value: number;
      data: {
        assets: Assert[]
      };
    }
  ];
}
