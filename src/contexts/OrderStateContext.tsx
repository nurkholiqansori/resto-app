import { createContext, useState } from "react";

export interface BaseOrder {
  name: string;
  price: number;
  qty: number;
};

export interface Order extends BaseOrder {
  id: number;
}

export type OrderStateContextProps = {
  order: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (id: number) => void;
  clearOrder: () => void;
};

export const OrderStateContext = createContext<OrderStateContextProps>({
  order: [],
  addOrder: () => { },
  removeOrder: () => { },
  clearOrder: () => { },
});

function OrderStateContextProvider({ children }: any) {
  const [order, setOrder] = useState<Order[]>([]);

  function addOrder(order: Order) {
    setOrder((prevOrder) => [...prevOrder, order]);
  }

  function removeOrder(id: number) {
    setOrder((prevOrder) => prevOrder.filter((order) => order.id !== id));
  }

  function clearOrder() {
    setOrder([]);
  }

  const value = {
    order,
    addOrder,
    removeOrder,
    clearOrder,
  };

  return (
    <OrderStateContext.Provider value={value}>
      {children}
    </OrderStateContext.Provider>
  );
}

export default OrderStateContextProvider;