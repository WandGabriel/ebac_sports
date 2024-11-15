import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoSlice = {
  itens: Produto[]
}

const initialState: CarrinhoSlice = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicinarAocarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado!')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicinarAocarrinho } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
