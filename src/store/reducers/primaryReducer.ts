import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RadioValue } from '@/types/RadioValue';

export interface PrimaryState {
  radioValue: RadioValue;
  notes: string;
}

const initialState: PrimaryState = {
  radioValue:
    (window?.localStorage.getItem('RADIO_VALUE') as RadioValue) ?? RadioValue.A,
  notes: window?.localStorage.getItem('NOTES_VALUE') ?? '',
};

export const primarySlice = createSlice({
  name: 'primary',
  initialState,
  reducers: {
    setRadioValue(state, action: PayloadAction<RadioValue>) {
      state.radioValue = action.payload;
      localStorage.setItem('RADIO_VALUE', action.payload);
    },
    setNotes(state, action: PayloadAction<string>) {
      state.notes = action.payload;
      localStorage.setItem('NOTES_VALUE', action.payload);
    },
  },
});

export const { setRadioValue, setNotes } = primarySlice.actions;

export default primarySlice.reducer;
