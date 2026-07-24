"use client";

import { 
  Menu,
  Bell,
  ChevronDown,
  Building2,
  LogOut
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/Context/AuthProvider";



const CompanyTopbar = ({setMobileOpen}) => {


const router = useRouter();


const [profileOpen,setProfileOpen] = useState(false);


const {
  user,
  logout
}=useAuth();




const handleLogout = ()=>{

logout();

router.push("/");

};





return (

<header

className="
h-20

sticky
top-0
z-40

bg-white/80

backdrop-blur-xl

border-b
border-slate-200

flex
items-center
justify-between

px-4
sm:px-6
lg:px-8

"

>


{/* Left Side */}

<div

className="
flex
items-center
gap-4
"

>


{/* Mobile Menu */}

<button

onClick={()=>setMobileOpen(true)}

className="
lg:hidden

w-10
h-10

rounded-xl

flex
items-center
justify-center

bg-slate-50

border
border-slate-200

text-slate-600

hover:bg-blue-50

hover:text-blue-600

transition
"

>

<Menu size={22}/>

</button>




<div>

<h2

className="
text-lg
sm:text-xl

font-semibold

text-slate-900
"

>

Company Dashboard

</h2>


<p

className="
hidden
sm:block

text-sm
text-slate-500
"

>

Manage your AI support system

</p>


</div>


</div>





{/* Right Side */}

<div

className="
flex
items-center
gap-3
"

>



{/* Notification */}

<button

className="
relative

w-10
h-10

rounded-xl

flex
items-center
justify-center

bg-slate-50

border
border-slate-200

text-slate-500

hover:bg-blue-50

hover:text-blue-600

transition
"

>


<Bell size={20}/>


<span

className="
absolute

top-2
right-2

w-2
h-2

rounded-full

bg-blue-500

"

></span>


</button>





{/* Profile */}

<div

className="
relative
"

>


<button

onClick={()=>
setProfileOpen(!profileOpen)
}

className="
flex
items-center
gap-3

px-3
py-2

rounded-xl

hover:bg-slate-50

transition
"

>


<div

className="
w-10
h-10

rounded-xl

bg-gradient-to-br

from-blue-100

to-indigo-100

flex
items-center
justify-center

text-blue-600
"

>

<Building2 size={20}/>

</div>




<div

className="
hidden
md:block

text-left
"

>

<p

className="
text-sm

font-semibold

text-slate-800
"

>

{
user?.companyName ||
"Company"
}

</p>


<p

className="
text-xs

text-slate-500
"

>

Admin

</p>


</div>



<ChevronDown

size={18}

className="
text-slate-400
"

/>


</button>





{/* Dropdown */}

{

profileOpen && (

<div

className="
absolute

right-0

mt-3

w-52

bg-white

rounded-2xl

border

border-slate-200

shadow-xl

p-2

"

>


<button

onClick={handleLogout}

className="
w-full

flex
items-center
gap-3

px-4
py-3

rounded-xl

text-sm

text-red-500

hover:bg-red-50

transition
"

>

<LogOut size={18}/>

Logout

</button>


</div>

)

}



</div>



</div>



</header>

);


};


export default CompanyTopbar;