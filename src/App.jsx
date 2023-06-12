import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionListContainer from "./Context/TransactionListContainer";
import TransactionList from "./Pages/TransactionList";
import TransactionDetail from "./Pages/TransactionLDetail";

function App() {
  return (
    <TransactionListContainer>
      <div>
        <Routes>
          <Route path={"/"} element={<TransactionList />} />
          <Route path={"/detail/:id"} element={<TransactionDetail />} />
        </Routes>
      </div>
    </TransactionListContainer>
  );
}

export default App;
