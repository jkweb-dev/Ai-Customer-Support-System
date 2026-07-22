"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BookOpen,
  MessageCircle,
  Ticket,
  BarChart3,
  Users
} from "lucide-react";


const features = [

{
 title:"AI Assistant",
 description:
 "Smart AI that understands customer questions and provides instant answers.",
 icon:Bot
},

{
 title:"Knowledge Base",
 description:
 "Train your AI with company documents, FAQs, and business information.",
 icon:BookOpen
},

{
 title:"Smart Conversations",
 description:
 "Manage customer conversations with AI-powered insights.",
 icon:MessageCircle
},

{
 title:"Ticket Management",
 description:
 "Convert complex issues into organized support tickets.",
 icon:Ticket
},

{
 title:"Analytics",
 description:
 "Understand customer behavior and support performance.",
 icon:BarChart3
},

{
 title:"Customer Management",
 description:
 "Keep track of customers, conversations, and history.",
 icon:Users
}

];


const Features = () => {


return (

<section
id="features"
className="
py-24

bg-gradient-to-b
from-slate-50
via-emerald-50
to-teal-50
"
>


<div
className="
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

Everything You Need for

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

Intelligent Support

</span>

</h2>


<p
className="
mt-5

text-slate-600

text-lg
"
>

Powerful AI tools that help businesses automate support
and create better customer experiences.

</p>


</motion.div>




{/* Cards */}


<div
className="
mt-16

grid

sm:grid-cols-2

lg:grid-cols-3

gap-6
"
>


{
features.map((feature,index)=>{


const Icon = feature.icon;


return (

<motion.div

key={feature.title}


initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}


whileHover={{
y:-8
}}


className="
group

p-7

rounded-3xl

bg-white/70

backdrop-blur-xl

border
border-emerald-100

shadow-sm

hover:shadow-xl

transition

"

>


<div
className="
w-14
h-14

rounded-2xl

flex
items-center
justify-center

bg-gradient-to-br
from-emerald-500
to-teal-400

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

{feature.title}

</h3>



<p
className="
mt-3

text-slate-600

leading-relaxed
"
>

{feature.description}

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


export default Features;