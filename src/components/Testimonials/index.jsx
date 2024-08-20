import { Button } from "../Button"
import { Heading } from "../Heading"

import IbmLogo from "../../assets/brands/ibm-logo.png"
import TestimonialPerson from "../../assets/testimonials/testimonial-1.png"

export const Testimonials = () => {
    return (
        <section className="bg-white"> 
            <div className="w-full max-w-[360px] mx-auto flex flex-col items-center justify-center gap-[80px]"> 
            <Heading type="h2" className="w-fit"> Testimonials </Heading> 
           
           <div className="flex flex-col py-4 items-center justify-center gap-11">
            <img src={IbmLogo}/>
           
            <p className="text-center text-sm text-secondary-text font-bold w-full max-w-[280px]"> Most calendars are designed for teams. SLate is deisgned for freelancers 
                who want a simple way to plan their shedule.
            </p>

            <div className="flex gap-3 justify-center items-center">
                <img src={TestimonialPerson}/>

                <div>
                    <p> Organize acrossv</p>
                    <p> UI designer </p>
                </div>
            </div>
           </div>

            <Button> More Testimonials </Button>
        </div>
        </section>
    )
}