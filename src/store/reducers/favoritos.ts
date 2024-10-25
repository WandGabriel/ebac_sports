import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritoSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        // state.itens.push(favoritoSemProduto)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritarAoCarrinho } = favoritosSlice.actions
export default favoritosSlice.reducer
