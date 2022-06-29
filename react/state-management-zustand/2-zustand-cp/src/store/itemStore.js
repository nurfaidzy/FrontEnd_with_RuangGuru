import create from "zustand"
import { persist } from "zustand/middleware"

const useItemStore = 
create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => ({
          items: [...state.items, item],
        }))
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }))
      },
    }),
    { name: "items" },
  ),
)

export default useItemStore