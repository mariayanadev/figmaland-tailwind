import { Button } from "./components/button"

function App() {

  return (
    <>
    <h1 className= "text-dark-background"> Hello world! </h1>
    <Button> Primary Background </Button>
    <Button variant="secondary"> Secondary Background </Button>
    <Button isBold> Bold Text with Primary Background</Button>
    <Button isBold variant="secondary"> Bold Text with Secondary Background</Button>
    </>
  )
}

export default App