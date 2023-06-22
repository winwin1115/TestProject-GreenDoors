import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppTempDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const AppDispatch: () => AppTempDispatch = useDispatch;
export const AppSelector: TypedUseSelectorHook<RootState> = useSelector;
