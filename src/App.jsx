import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionListContainer from "./Context/TransactionListContainer";
import TransactionList from "./Pages/TransactionList";

function App() {
  return (
    <TransactionListContainer>
      <div>
        <Routes>
          <Route path={"/"} element={<TransactionList />} />
        </Routes>
      </div>
    </TransactionListContainer>
  );
}

export default App;
