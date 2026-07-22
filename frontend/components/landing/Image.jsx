"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const AIShowcase = () => {

  return (

    <section
      className="
      relative

      py-10
      md:py-18

      

      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute

        top-10
        left-1/2

        -translate-x-1/2

        w-[500px]
        h-[300px]

        bg-emerald-200/40

        blur-3xl

        rounded-full
        "
      />



      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:0.8
        }}

        className="
        relative

        max-w-7xl

        mx-auto

        px-5
        md:px-8
        "

      >


        <div
          className="
          rounded-3xl

          p-2
          md:p-4

          bg-white/60

          backdrop-blur-xl

          border
          border-emerald-100

          shadow-2xl
          "
        >


          <div
            className="
            relative

            overflow-hidden

            rounded-2xl

            "
          >

            <Image

              src="/images/ai-showcase.jpg"

              alt="AI customer support platform"

              width={1400}

              height={900}

              className="
              w-full

              h-auto

              object-cover
              "

              priority

            />


          </div>


        </div>


      </motion.div>


    </section>

  );

};


export default AIShowcase;