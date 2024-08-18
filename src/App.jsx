import { Button } from "./components/Button"
import { Heading } from "./components/Heading" //Renomear: nomeComponente as novoNome

function App() {

  return (
    <>
    <div className="bg-dark-background">
    <div className="bg-green-200"> 
    <Heading > Hello world! </Heading>
    <Heading type = "h2" color="white"> Hello world of Heading 2 </Heading> 
    </div>
    <Button> Primary Background </Button>
    <Button variant="secondary"> Secondary Background </Button>
    <Button isBold> Bold Text with Primary Background</Button>
    <Button isBold variant="secondary"> Bold Text with Secondary Background</Button>
    </div>
    </>
  )
}

export default App