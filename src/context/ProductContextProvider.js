import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

//  index de eklediğimiz productContextprovider ın altındaki browserrouter ve app children dır. ve başka bir şey olarak kullanılamaz.
// aslında children yapısının içinde browserrouter ve app yer almaktadır.

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
      {/* children == <BrowserRouter>
                        <App/>
                        </BrowserRouter> */}
    </ProductContext.Provider>
  );
};
