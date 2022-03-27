import { Stack } from "@chakra-ui/react";
import "./App.css";
import ItemCard from "./components/cards/itemcard";

function App() {
  return (
    <div className="App">
      <Stack spacing={8}>
        <ItemCard />
      </Stack>
    </div>
  );
}

export default App;
