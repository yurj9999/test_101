import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../../types';

export const useDataSelector: TypedUseSelectorHook<TRootState> = useSelector;
