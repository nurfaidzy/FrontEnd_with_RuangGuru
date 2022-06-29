import create from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    (...args) => {
      set(...args)
      const moreThanStockItem = get().items.filter(
        (item) => item.quantity > item.stock,
      )
      const lessThanZeroItem = get().items.filter((item) => item.quantity < 1)
      if (moreThanStockItem.length > 0) {
        return set((state) => ({
          items: state.items.map((item) =>
            item.id === moreThanStockItem[0].id
              ? { ...item, quantity: item.stock }
              : item,
          ),
        }))
      }
      if (lessThanZeroItem.length > 0) {
        return set((state) => ({
          items: state.items.map((item) =>
            item.id === lessThanZeroItem[0].id
              ? { ...item, quantity: 1 }
              : item,
          ),
        }))
      }
    }
    ,
    get,
    api,
  )

const useCartStore = 
create(persist(
  immer(cartQuantityMiddleware((set, get) => ({
    items: [],
    addItem: (item) => {
      const itemExists = get().items.find((i) => i.id === item.id)
      set((state) => ({
        items: [
          ...state.items.filter((i) => i.id !== item.id),
          { ...item, quantity: itemExists ? itemExists.quantity + 1 : 1 },
        ],
      }))
    },
    removeItem: (itemId) => {
      set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
      }))
    },
    changeQuantity: (itemId, quantity) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        ),
      }))
    },
  }))),{name:'cart'})
)



export default useCartStore