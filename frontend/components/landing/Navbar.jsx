"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {

  const [open, setOpen] = useState(false);


  const navLinks = [
    {
      name: "Features",
      href: "#features"
    },
    {
      name: "How It Works",
      href: "#how-it-works"
    },
    {
      name: "Solutions",
      href: "#solutions"
    },
    {
      name: "Pricing",
      href: "#pricing"
    }
  ];


  return (

    <header className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-4
      md:px-8
      py-4
    ">

      <nav className="
        max-w-7xl
        mx-auto

        bg-emerald-50/80
        backdrop-blur-xl

        border
        border-emerald-100

        rounded-2xl

        shadow-sm

        px-5
        py-3

        flex
        items-center
        justify-between
      ">


        {/* Logo */}

        <Link
          href="/"
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-emerald-600
          to-teal-500
          bg-clip-text
          text-transparent
          "
        >

          SupportAI

        </Link>



        {/* Desktop Navigation */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">

          {
            navLinks.map((link)=>(
              <Link
                key={link.name}
                href={link.href}
                className="
                text-sm
                font-medium
                text-slate-700

                hover:text-emerald-600

                transition
                duration-300
                "
              >

                {link.name}

              </Link>
            ))
          }

        </div>



        {/* Desktop Buttons */}

        <div className="
          hidden
          md:flex
          items-center
          gap-6
        ">

          <Link
            href="/login"
            className="
            text-sm
            font-medium
            text-slate-700
            hover:text-emerald-600
            transition
            "
          >
            Login
          </Link>


          <Link
            href="/register"
            className="
            px-5
            py-2.5

            rounded-xl

            text-sm
            font-semibold

            text-white

            bg-gradient-to-r
            from-emerald-600
            to-teal-500

            hover:scale-105

            transition
            duration-300
            "
          >

            Get Started

          </Link>


        </div>



        {/* Mobile Menu Button */}

        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden

          p-2

          rounded-lg

          hover:bg-emerald-100

          transition
          "

        >

          {
            open ?

            <X size={24}/>

            :

            <Menu size={24}/>

          }

        </button>



      </nav>



      {/* Mobile Menu */}

      <AnimatePresence>

      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            exit={{
              opacity:0,
              y:-20
            }}

            className="
            md:hidden

            max-w-7xl

            mx-auto

            mt-3

            bg-emerald-50

            border
            border-emerald-100

            rounded-2xl

            shadow-lg

            p-5
            "

          >


            <div className="
              flex
              flex-col
              gap-4
            ">


              {
                navLinks.map((link)=>(

                  <Link

                    key={link.name}

                    href={link.href}

                    onClick={()=>setOpen(false)}

                    className="
                    text-slate-700
                    font-medium
                    hover:text-emerald-600
                    "

                  >

                    {link.name}

                  </Link>

                ))
              }



              <Link
                href="/login"
                className="
                text-slate-700
                font-medium
                "
              >
                Login
              </Link>



              <Link
                href="/register"
                className="
                text-center

                px-5
                py-2.5

                rounded-xl

                text-white
                font-semibold

                bg-gradient-to-r
                from-emerald-600
                to-teal-500
                "
              >

                Get Started

              </Link>


            </div>


          </motion.div>

        )
      }

      </AnimatePresence>


    </header>

  );

};


export default Navbar;