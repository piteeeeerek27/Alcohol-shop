import { Action } from "@reduxjs/toolkit";

export const DRINKS_ARRAY = "DRINKS_ARRAY";

export interface DRINKS_ACTION extends Action<typeof DRINKS_ARRAY> {
	payload: string[];
}

export const DRINKS = (array: string[]): DRINKS_ACTION => ({
	type: DRINKS_ARRAY,
	payload: array,
});
