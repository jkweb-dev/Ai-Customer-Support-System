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

import {
  LogOut
} from "lucide-react";

import { useAuth } from "@/Context/AuthProvider";

const CompanySidebar = () => {

  
const {
  logout
}=useAuth();



const pathname = usePathname();



const menuItems = [

{
name:"Dashboard",
href:"/companySide/dashboard",
icon:LayoutDashboard
},

{
name:"Knowledge Base",
href:"/companySide/Knowledge-List",
icon:BookOpen
},

{
name:"AI Controller",
href:"/companySide/Ai-Controller",
icon:Bot
},

{
name:"Conversations",
href:"/companySide/Conversations",
icon:MessageCircle
},

{
name:"Tickets",
href:"/companySide/my-tickets",
icon:Ticket
},

{
name:"Customers",
href:"/companySide/customers",
icon:Users
},

{
name:"Analytics",
href:"/companySide/Analytics",
icon:BarChart3
},


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



<button

onClick={logout}

className="
mb-5

flex
items-center
gap-3

px-4
py-3

rounded-xl

text-sm
font-medium

text-slate-600

hover:bg-red-50

hover:text-red-600

transition-all
duration-200

"

>

<LogOut

size={20}

/>


<span>

Logout

</span>


</button>


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