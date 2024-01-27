import { Action } from "@reduxjs/toolkit";
export interface DRINKS_ACTION extends Action<typeof DRINKS_ARRAY> {
	payload: string[];
}

export const DRINKS_ARRAY = "DRINKS_ARRAY";

export const DRINKS = (drinks: string[]) => ({
	type: DRINKS_ARRAY,
	payload: drinks,
});
