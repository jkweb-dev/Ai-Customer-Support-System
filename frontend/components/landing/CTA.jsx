"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";


const CTA = () => {

return (

<section

className="
py-24

bg-gradient-to-b

from-slate-50

to-emerald-50
"

>

<div

className="
max-w-6xl

mx-auto

px-5
md:px-8
"

>


<motion.div

initial={{
opacity:0,
scale:0.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
relative

overflow-hidden

rounded-3xl

bg-gradient-to-br

from-emerald-600

via-teal-500

to-cyan-500

p-10

md:p-16

text-center

shadow-2xl
"

>


{/* Glow */}

<div

className="
absolute

top-0

left-1/2

-translate-x-1/2

w-80

h-80

bg-white/20

blur-3xl

rounded-full
"

/>



<div className="relative">


<div

className="
inline-flex

items-center

gap-2

px-4

py-2

rounded-full



text-white

text-sm

mb-6
"

>

<Sparkles size={16}/>

Start Your AI Journey

</div>



<h2

className="
text-3xl

sm:text-4xl

lg:text-5xl

font-bold

text-white

leading-tight
"

>

Ready to Transform Your Customer Support?

</h2>



<p

className="
mt-5

max-w-2xl

mx-auto

text-white/80

text-lg
"

>

Create your AI assistant and deliver faster,
smarter customer experiences today.

</p>



<div

className="
mt-8

flex

flex-col

sm:flex-row

justify-center

gap-4
"

>


<Link

href="/register"

className="
flex

items-center

justify-center

gap-2

px-7

py-3.5

rounded-xl

bg-white

text-emerald-700

font-semibold

hover:scale-105

transition
"

>

Get Started

<ArrowRight size={18}/>

</Link>



<Link

href="/chat"

className="
px-7

py-3.5

rounded-xl

border

border-white/40

text-white

font-semibold

hover:bg-white/10

transition
"

>

Try AI Assistant

</Link>



</div>


</div>


</motion.div>


</div>


</section>

)

}


export default CTA;