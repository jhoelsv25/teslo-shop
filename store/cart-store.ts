import { Product } from "@/types/product.types";
import { create } from "zustand";

export interface ProductInCart extends Product {
    quantity: number;
}

interface State {
    productsInCart: ProductInCart[];
    AddToCart: (product: ProductInCart) => void;
    RemoveFromCart: (slug: string) => void;
}

export const useCartStore = create<State>()((set) => ({
    productsInCart: [],
    AddToCart: (product: ProductInCart) => set((state) => {
        const existingProduct = state.productsInCart.find(p => p.slug === product.slug);
        if (existingProduct) {
            console.log('producto existe ya actualizando solo la cantidad')
            // Si el producto ya existe, actualiza la cantidad
            return {
                ...state,
                productsInCart: state.productsInCart.map(p =>
                    p.slug === product.slug ? { ...p, quantity: p.quantity + product.quantity } : p
                )
            };
        }
        // Si el producto no existe, añádelo al carrito
        console.log('Producto agregado al carrito')
        return { ...state, productsInCart: [...state.productsInCart, product] };
    }),
    RemoveFromCart: (slug: string) => set((state) => {
        // Lógica para eliminar el producto del carrito
        console.log(`Producto con slug ${slug} eliminado del carrito`);
        return { ...state, productsInCart: state.productsInCart.filter(p => p.slug !== slug) };
    }),
}));