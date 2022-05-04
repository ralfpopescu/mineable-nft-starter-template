/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStats, IStatsInterface } from "../IStats";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMajorType",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMajorValue",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMinorType1",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMinorType2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMinorValue1",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mgear",
        type: "uint256",
      },
    ],
    name: "getMinorValue2",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IStats__factory {
  static readonly abi = _abi;
  static createInterface(): IStatsInterface {
    return new utils.Interface(_abi) as IStatsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IStats {
    return new Contract(address, _abi, signerOrProvider) as IStats;
  }
}
