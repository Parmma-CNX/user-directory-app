import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import { ToastOptions } from "@chakra-ui/react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type CustomToastOptions = ToastOptions;
