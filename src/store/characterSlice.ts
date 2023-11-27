import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../core/models";
import { ICustomCharacter } from "../types/customCharacters";

export interface CharacterState {
  value: {
    character: ICharacter | ICustomCharacter | null;
    customCharacters: ICustomCharacter[];
  };
}

const initialState: CharacterState = {
  value: { character: null, customCharacters: [] },
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    selectCharacter: (
      state,
      action: PayloadAction<ICharacter | ICustomCharacter>
    ) => {
      state.value.character = action.payload;
    },
    addCustomCharacter: (state, action: PayloadAction<ICustomCharacter>) => {
      const newCustomCharacter = { ...action.payload, id: `${Math.random()}` };
      state.value.customCharacters = [
        ...state.value.customCharacters,
        newCustomCharacter,
      ];
    },
    editCustomCharacter: (state, action: PayloadAction<ICustomCharacter>) => {
      const characterIndex = state.value.customCharacters.findIndex(
        (character) => character.id === action.payload.id
      );

      state.value.customCharacters[characterIndex] = action.payload;
    },
    deleteCustomCharacter: (state, action: PayloadAction<{ id: string }>) => {
      const newCustomCharacters = state.value.customCharacters.filter(
        (character) => character.id !== action.payload.id
      );
      state.value.customCharacters = newCustomCharacters;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectCharacter,
  addCustomCharacter,
  editCustomCharacter,
  deleteCustomCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;
