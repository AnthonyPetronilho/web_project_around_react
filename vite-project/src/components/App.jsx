import { useState } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
