/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StatsInterface extends ethers.utils.Interface {
  functions: {
    "getMajorType(uint256)": FunctionFragment;
    "getMajorValue(uint256)": FunctionFragment;
    "getMinorType1(uint256)": FunctionFragment;
    "getMinorType2(uint256)": FunctionFragment;
    "getMinorValue1(uint256)": FunctionFragment;
    "getMinorValue2(uint256)": FunctionFragment;
    "rarityToTiers(uint256,uint256)": FunctionFragment;
    "statIdToStatName(uint256)": FunctionFragment;
    "tierToStatBase(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMajorType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMajorValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinorType1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinorType2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinorValue1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinorValue2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rarityToTiers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "statIdToStatName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tierToStatBase",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMajorType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMajorValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinorType1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinorType2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinorValue1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinorValue2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rarityToTiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "statIdToStatName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tierToStatBase",
    data: BytesLike
  ): Result;

  events: {};
}

export class Stats extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StatsInterface;

  functions: {
    getMajorType(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMajorValue(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMinorType1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinorType2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinorValue1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMinorValue2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    rarityToTiers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    statIdToStatName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tierToStatBase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  getMajorType(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMajorValue(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getMinorType1(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinorType2(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinorValue1(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getMinorValue2(
    mgear: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  rarityToTiers(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  statIdToStatName(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tierToStatBase(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    getMajorType(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMajorValue(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMinorType1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorType2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorValue1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMinorValue2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    rarityToTiers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    statIdToStatName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierToStatBase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    getMajorType(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMajorValue(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorType1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorType2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorValue1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinorValue2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rarityToTiers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statIdToStatName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierToStatBase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMajorType(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMajorValue(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinorType1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinorType2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinorValue1(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinorValue2(
      mgear: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rarityToTiers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    statIdToStatName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tierToStatBase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}