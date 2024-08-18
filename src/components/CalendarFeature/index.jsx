import { Heading } from "../Heading"
import { Button } from "../Button"
import CalendarImage from "../../assets/images/features/calendar-feature-screenshot.png" //Importar como se fosse um componente

export const CalendarFeature = () => {
    return( 
    <section className="bg-white py-[90px] px-5">
    <div className="flex flex-col mb-[60px]">
      <Heading type="h2" className="text-center">  Fastest way to organize  </Heading>
      <Heading type="h4" className="mb-[60px] mt-4 text-center">  Most calendars are designed for teams. </Heading>
      <Button > Try For Free </Button>
    </div>
         <img src={CalendarImage}/>
    </section>
    )
}