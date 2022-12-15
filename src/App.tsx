import { useState } from "react";
import { Wrapper } from "./App.style";
import { Category } from "./feature/category/Category";
import { Quote } from "./feature/quote/Quote";
import { QuotesCategory } from "./utils/enums";

function App() {
  const [category, setCategory] = useState(QuotesCategory[0]);

  return (
    <Wrapper>
      <Category name={category} changeCategory={setCategory} />
      <Quote categoryName={category} />
    </Wrapper>
  );
}

export default App;
