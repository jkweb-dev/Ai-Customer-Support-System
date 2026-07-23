"use client";

import {
  Mail,
  Lock,
  LogIn
} from "lucide-react";

import Link from "next/link";


const LoginForm = ({
  formData,
  handleChange,
  handleLogin,
  loading,
  
}) => {


return (

<form
onSubmit={handleLogin}
className="space-y-5"
>


{/* Email */}

<div>

<label
className="
block
text-sm
font-medium
text-slate-700
mb-2
"
>
Business Email
</label>


<div className="relative">


<Mail

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="company@gmail.com"

className="
w-full

pl-12
pr-4

py-3.5

rounded-xl

bg-white

border
border-slate-200

outline-none

focus:border-violet-500

focus:ring-4

focus:ring-violet-100

transition
"

/>


</div>

</div>





{/* Password */}

<div>


<label

className="
block
text-sm
font-medium
text-slate-700
mb-2
"

>

Password

</label>



<div className="relative">


<Lock

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>



<input

type=
"password"


name="password"

value={formData.password}

onChange={handleChange}

placeholder="Enter password"

className="
w-full

pl-12
pr-12

py-3.5

rounded-xl

bg-white

border
border-slate-200

outline-none

focus:border-violet-500

focus:ring-4

focus:ring-violet-100

transition
"

/>








</div>


</div>





{/* Forgot Password */}

<div
className="
text-right
"
>

<Link

href="/company/forgot-password"

className="
text-sm

font-medium

text-violet-600

hover:text-indigo-600

transition
"

>

Forgot Password?

</Link>


</div>





{/* Button */}


<button

type="submit"

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

from-violet-600

to-indigo-600

shadow-lg

hover:scale-[1.02]

transition

disabled:opacity-60
"

>

<LogIn size={20}/>


{
loading
?
"Signing In..."
:
"Login"
}


</button>



</form>

);


};


export default LoginForm;