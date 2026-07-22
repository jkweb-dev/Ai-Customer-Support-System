"use client";

import { motion } from "framer-motion";
import {
  UploadCloud,
  BrainCircuit,
  MessageSquareText,
  TicketCheck
} from "lucide-react";


const steps = [

  {
    number:"01",
    title:"Upload Your Knowledge",
    description:
      "Companies add documents, FAQs, and important information to create their AI knowledge base.",
    icon:UploadCloud
  },

  {
    number:"02",
    title:"AI Learns Your Business",
    description:
      "The AI processes your information and understands your products, services, and policies.",
    icon:BrainCircuit
  },

  {
    number:"03",
    title:"Customers Ask Questions",
    description:
      "Customers interact with your AI assistant and get instant intelligent responses.",
    icon:MessageSquareText
  },

  {
    number:"04",
    title:"Resolve Support Issues",
    description:
      "Complex problems are converted into tickets and managed by your support team.",
    icon:TicketCheck
  }

];


const HowItWorks = () => {


return (

<section

id="how-it-works"

className="
relative

py-14

bg-gradient-to-b

from-teal-50

via-emerald-50

to-slate-50

overflow-hidden
"

>


{/* Glow */}

<div
className="
absolute

top-20

right-0

w-72
h-72

bg-teal-200/40

rounded-full

blur-3xl
"
/>



<div
className="
relative

max-w-7xl

mx-auto

px-5
md:px-8
"
>


{/* Heading */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center

max-w-3xl

mx-auto
"

>


<h2

className="
text-3xl

sm:text-4xl

lg:text-5xl

font-bold

text-slate-900
"

>

How Your AI Support

<span

className="
block

bg-gradient-to-r

from-emerald-600

to-teal-500

bg-clip-text

text-transparent
"

>

Works

</span>

</h2>


<p
className="
mt-5

text-lg

text-slate-600
"
>

From knowledge creation to customer conversations,
everything works together automatically.

</p>


</motion.div>




{/* Steps */}


<div

className="
relative

mt-16

grid

md:grid-cols-2

lg:grid-cols-4

gap-6

"

>


{
steps.map((step,index)=>{


const Icon = step.icon;


return (

<motion.div

key={step.number}


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}


whileHover={{
y:-8
}}


className="
relative

bg-white/70

backdrop-blur-xl

border

border-emerald-100

rounded-3xl

p-7

shadow-sm

hover:shadow-xl

transition
"

>


{/* Number */}

<div

className="
absolute

top-5

right-6

text-5xl

font-bold

text-emerald-100
"

>

{step.number}

</div>



{/* Icon */}

<div

className="
w-14

h-14

rounded-2xl

bg-gradient-to-br

from-emerald-500

to-teal-400

flex

items-center

justify-center

text-white

mb-6
"

>

<Icon size={28}/>

</div>



<h3

className="
text-xl

font-semibold

text-slate-900
"

>

{step.title}

</h3>


<p

className="
mt-3

text-slate-600

leading-relaxed
"

>

{step.description}

</p>



</motion.div>


)

})

}


</div>



</div>


</section>

)

}


export default HowItWorks;