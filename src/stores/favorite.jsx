import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteTracks: JSON.parse(localStorage.getItem('favorite')) || []
}

const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteTracks = [...state.favoriteTracks, action.payload]
            localStorage.setItem('favorite', JSON.stringify(state.favoriteTracks))
        },
        removeFavorite: (state, action) => {
            state.favoriteTracks = state.favoriteTracks.filter(track => track.id !== action.payload.id)
            localStorage.setItem('favorite', JSON.stringify(state.favoriteTracks))
        }
    }
})

export const { addFavorite, removeFavorite } = favorite.actions
export default favorite.reducer