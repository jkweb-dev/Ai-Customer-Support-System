"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  X,
  LayoutDashboard,
  BookOpen,
  Bot,
  MessageCircle,
  Ticket,
  Users,
  BarChart3,
  Settings,
  Sparkles
} from "lucide-react";



const MobileSidebar = ({
  open,
  setOpen
}) => {


const pathname = usePathname();



const menuItems = [

{
name:"Dashboard",
href:"/companySide/dashboard",
icon:LayoutDashboard
},

{
name:"Knowledge Base",
href:"/companySide/knowledge-base",
icon:BookOpen
},

{
name:"AI Assistant",
href:"/companySide/ai-assistant",
icon:Bot
},

{
name:"Conversations",
href:"/companySide/conversations",
icon:MessageCircle
},

{
name:"Tickets",
href:"/companySide/tickets",
icon:Ticket
},

{
name:"Customers",
href:"/companySide/customers",
icon:Users
},

{
name:"Analytics",
href:"/companySide/analytics",
icon:BarChart3
},

{
name:"Settings",
href:"/companySide/settings",
icon:Settings
}

];





return (

<>

{/* Overlay */}

{

open && (

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0

z-40

bg-slate-900/20

backdrop-blur-sm

lg:hidden
"

></div>

)

}





{/* Drawer */}

<aside

className={`

fixed

top-0
left-0

z-50

h-screen

w-[280px]

bg-white

border-r
border-slate-200

px-5
py-6

transform

transition-transform

duration-300

ease-in-out

lg:hidden


${

open

?

"translate-x-0"

:

"-translate-x-full"

}

`}

>





{/* Header */}

<div

className="
flex
items-center
justify-between

mb-10
"

>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-11
h-11

rounded-2xl

bg-gradient-to-br

from-blue-500

to-indigo-500

flex
items-center
justify-center

shadow-lg

shadow-blue-100
"

>

<Sparkles

size={22}

className="
text-white
"

/>

</div>



<div>

<h1

className="
font-bold
text-lg
text-slate-900
"

>

SupportAI

</h1>


<p

className="
text-xs
text-slate-500
"

>

Company Portal

</p>

</div>


</div>





<button

onClick={()=>setOpen(false)}

className="
w-9
h-9

rounded-xl

flex
items-center
justify-center

bg-slate-50

text-slate-500

hover:bg-blue-50

hover:text-blue-600

transition
"

>

<X size={20}/>

</button>



</div>






{/* Navigation */}

<nav

className="
space-y-2
"

>


{

menuItems.map((item)=>{


const Icon=item.icon;


const active =
pathname === item.href;



return (

<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className={`

flex
items-center
gap-3

px-4
py-3

rounded-xl

text-sm

font-medium

transition-all


${

active

?

"bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-100"

:

"text-slate-600 hover:bg-slate-50 hover:text-blue-600"

}

`}

>


<Icon

size={20}

className={

active

?

"text-blue-600"

:

"text-slate-400"

}

/>


<span>

{item.name}

</span>


</Link>

);


})


}



</nav>






{/* Bottom Card */}

<div

className="
absolute

bottom-6

left-5

right-5

p-4

rounded-2xl

bg-gradient-to-br

from-blue-50

to-indigo-50

border

border-blue-100

"

>


<p

className="
text-sm

font-semibold

text-slate-800
"

>

AI Support Active

</p>


<p

className="
text-xs

text-slate-500

mt-1
"

>

Your assistant is ready

</p>


</div>





</aside>


</>

);


};


export default MobileSidebar;