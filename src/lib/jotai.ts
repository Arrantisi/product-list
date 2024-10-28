import { atom } from "jotai";

// delete button
export const deleteButton = atom(false);
export const deleteButtonR = atom((get) => get(deleteButton));
export const deleteButtonW = atom(null, (get, set, value: boolean) =>
  set(deleteButton, value)
);

// product id
export const productId = atom("");
export const productIdR = atom((get) => get(productId));
export const productIdW = atom(null, (get, set, value: string) =>
  set(productId, value)
);
