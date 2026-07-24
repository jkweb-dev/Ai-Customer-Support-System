"use client";

import { useState } from "react";

import CompanySidebar from "./CompanySidebar";
import CompanyTopbar from "./CompanyTopbar";
import MobileSidebar from "./MobileSidebar";


const CompanyLayout = ({children}) => {


const [mobileOpen,setMobileOpen] = useState(false);



return (

<div className="
min-h-screen
bg-slate-50
flex
">


{/* Desktop Sidebar */}

<div className="
hidden
lg:block
">

<CompanySidebar/>

</div>



{/* Mobile Sidebar */}

<MobileSidebar

open={mobileOpen}

setOpen={setMobileOpen}

/>





<div className="
flex-1
flex
flex-col
min-w-0
">


<CompanyTopbar

setMobileOpen={setMobileOpen}

/>



<main className="
flex-1
p-4
sm:p-6
lg:p-8
">

{children}

</main>


</div>



</div>

);

};


export default CompanyLayout;