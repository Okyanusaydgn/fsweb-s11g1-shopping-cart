import { createContext, useState } from "react";
import Product from "../components/Product";

export const CardContext = createContext();

//  index de eklediğimiz  CardContextprovider ın altındaki browserrouter ve app children dır. ve başka bir şey olarak kullanılamaz.
// aslında children yapısının içinde browserrouter ve app yer almaktadır.

export const CardContextProvider = ({ children }) => {
  const [cards, setCardsState] = useState(() => {
    if (localStorage.getItem("cards")) {
      return JSON.parse(localStorage.getItem("cards"))
    }
    return []
  });


  const setCards = (list) => {
    setCardsState(list);
    localStorage.setItem("cards", JSON.stringify(list));
  };

  const addItem = (product) => {
    const list = [...cards];
    // ci nin anlamı "cart item"
    for (let i = 0; i < list.length; i++) {
      const ci = list[i];

      if (ci.item.id === product.id) {
        list[i] = { item: product, count: ci.count + 1 };
        setCards([...list]);
        return;
      }
    }

    setCards([...cards, { item: product, count: 1 }]);
  };


  const removeItem = (ProductId) => {
    setCards(cards.filter(ci => ci.item.id !== ProductId));
  };

  return (
    <CardContext.Provider value={{ cards, setCards, addItem, removeItem }}>
      {children}
      {/* children == <BrowserRouter>
                        <App/>
                        </BrowserRouter> */}
    </CardContext.Provider>
  );
};
