import { attomZip } from "../utilities/atom";
import { test } from "../utilities/atom";

export const addPropertys = zip => ({
  type: "GET_ZIP",
  results: attomZip(zip)
});

export const tester = number => ({
  type: "TEST",
  number
});
