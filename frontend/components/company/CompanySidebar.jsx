"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
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



const CompanySidebar = () => {


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

<aside

className="
h-screen
w-[280px]

bg-white

border-r
border-slate-200

flex
flex-col

px-5
py-6

sticky
top-0
"

>


{/* Logo */}

<div

className="
flex
items-center
gap-3
mb-10
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
leading-none
"

>

SupportAI

</h1>


<p

className="
text-xs
text-slate-500
mt-1
"

>

Company Portal

</p>


</div>


</div>





{/* Navigation */}

<nav

className="
flex-1
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

className={`
group

flex
items-center
gap-3

px-4
py-3

rounded-xl

text-sm
font-medium

transition-all
duration-200


${
active

?

"bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 shadow-sm"

:

"text-slate-600 hover:bg-slate-50 hover:text-blue-600"

}

`}

>


<Icon

size={20}

className={`
transition

${
active
?
"text-blue-600"
:
"text-slate-400 group-hover:text-blue-500"
}

`}

/>


<span>

{item.name}

</span>


</Link>

);


})


}



</nav>






{/* Bottom Company Card */}

<div

className="
mt-auto

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

);


};


export default CompanySidebar;