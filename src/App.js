import { Center, Flex } from "@chakra-ui/react";
import "./App.css";
import Card from "./components/cards/card";

function App() {
  return (
    <div className="App">
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="full"
        height="full"
      >
        <Card />
        <Card />
        <Card />
      </Flex>
    </div>
  );
}

export default App;
