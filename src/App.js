import { Stack } from "@chakra-ui/react";
import "./App.css";
import ItemCard from "./components/cards/itemcard";
import CardList from "./views/home/cardlist";

function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
