"use client";

import {
  User,
  Mail,
  Lock,
  UserPlus
} from "lucide-react";


const CustomerRegisterForm = ({
  formData,
  handleChange,
  handleRegister,
  loading,
  
}) => {


return (

<form
onSubmit={handleRegister}
className="space-y-5"
>


<div>

<label className="block text-sm font-medium text-slate-700 mb-2">
Full Name
</label>


<div className="relative">

<User
size={20}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
/>


<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your name"

className="
w-full
pl-12
py-3.5
rounded-xl
border
border-slate-200
outline-none
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
transition
"

/>


</div>

</div>





<div>

<label className="block text-sm font-medium text-slate-700 mb-2">
Email
</label>


<div className="relative">

<Mail
size={20}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="example@gmail.com"

className="
w-full
pl-12
py-3.5
rounded-xl
border
border-slate-200
outline-none
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
transition
"

/>


</div>

</div>





<div>

<label className="block text-sm font-medium text-slate-700 mb-2">
Password
</label>


<div className="relative">

<Lock
size={20}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
/>


<input

type="password"

name="password"

value={formData.password}

onChange={handleChange}

placeholder="Create password"

className="
w-full
pl-12
pr-12
py-3.5
rounded-xl
border
border-slate-200
outline-none
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
transition
"

/>





</div>

</div>





<div>

<label className="block text-sm font-medium text-slate-700 mb-2">
Confirm Password
</label>


<div className="relative">

<Lock
size={20}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
/>


<input

type="password"

name="confirmPassword"

value={formData.confirmPassword}

onChange={handleChange}

placeholder="Confirm password"

className="
w-full
pl-12
pr-12
py-3.5
rounded-xl
border
border-slate-200
outline-none
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
transition
"

/>



</div>

</div>





<button

disabled={loading}

className="
w-full

flex
items-center
justify-center
gap-2

py-3.5

rounded-xl

text-white

font-semibold

bg-gradient-to-r

from-blue-600

to-cyan-500

shadow-lg

hover:scale-[1.02]

transition

disabled:opacity-60
"

>

<UserPlus size={20}/>

{
loading
?
"Creating Account..."
:
"Create Account"
}


</button>


</form>

)

}


export default CustomerRegisterForm;