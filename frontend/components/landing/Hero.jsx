"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";


const Hero = () => {

  return (

    <section
      className="
      relative
      overflow-hidden

      pt-36
      pb-20

      bg-gradient-to-br
      from-emerald-50
      via-teal-50
      to-sky-50
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-10

        w-72
        h-72

        bg-emerald-200/40

        rounded-full

        blur-3xl
        "
      />


      <div
        className="
        absolute
        bottom-10
        right-10

        w-80
        h-80

        bg-teal-200/40

        rounded-full

        blur-3xl
        "
      />



      <div
        className="
        relative
        max-w-7xl
        mx-auto

        px-5
        md:px-8

        grid
        lg:grid-cols-2

        gap-14

        items-center
        "
      >



        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

        >


          {/* Small Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-white/70

            border
            border-emerald-100

            text-emerald-700

            text-sm
            font-medium

            shadow-sm
            "
          >

            <Sparkles size={16}/>

            AI Powered Customer Support


          </div>



          <h1
            className="
            mt-6

            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-bold

            leading-tight

            text-slate-900
            "
          >

            Transform Customer Support
            With{" "}

            <span
              className="
              bg-gradient-to-r
              from-emerald-600
              to-teal-500

              bg-clip-text
              text-transparent
              "
            >
              Intelligent AI
            </span>


          </h1>



          <p
            className="
            mt-6

            text-lg

            text-slate-600

            max-w-xl

            leading-relaxed
            "
          >

            Build smarter customer experiences with an AI assistant
            trained on your business knowledge. Answer questions,
            automate support, and help customers instantly.

          </p>




          {/* Buttons */}

          <div
            className="
            mt-8

            flex
            flex-col
            sm:flex-row

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

              px-6
              py-3.5

              rounded-xl

              text-white

              font-semibold

              bg-gradient-to-r
              from-emerald-600
              to-teal-500

              shadow-lg

              hover:scale-105

              transition
              "
            >

              Start Building

              <ArrowRight size={18}/>

            </Link>



            <Link
              href="/chat"

              className="
              flex
              items-center
              justify-center

              px-6
              py-3.5

              rounded-xl

              bg-white/70

              border
              border-emerald-100

              text-slate-700

              font-semibold

              hover:bg-white

              transition
              "
            >

              Try AI Assistant

            </Link>


          </div>




          {/* Trust Features */}

          <div
            className="
            mt-10

            flex
            flex-wrap

            gap-6
            "
          >


            <div
              className="
              flex
              items-center
              gap-2

              text-sm
              text-slate-600
              "
            >

              <ShieldCheck
                size={18}
                className="text-emerald-600"
              />

              Secure

            </div>



            <div
              className="
              flex
              items-center
              gap-2

              text-sm
              text-slate-600
              "
            >

              <Zap
                size={18}
                className="text-emerald-600"
              />

              Instant Responses

            </div>


          </div>


        </motion.div>





        {/* RIGHT AI PREVIEW */}


        <motion.div

          initial={{
            opacity:0,
            scale:0.9
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

          className="
          relative
          "
        >



          {/* Floating Card */}

          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            absolute

            -top-6
            -right-4

            bg-white/80

            backdrop-blur-xl

            border
            border-emerald-100

            rounded-2xl

            px-5
            py-3

            shadow-xl

            text-sm
            "
          >

            🤖 AI Online

          </motion.div>





          {/* Chat Window */}


          <div
            className="
            bg-white/80

            backdrop-blur-xl

            border
            border-emerald-100

            rounded-3xl

            shadow-2xl

            p-6
            "
          >


            {/* Header */}

            <div
              className="
              flex
              items-center
              gap-3

              pb-4

              border-b
              border-slate-100
              "
            >

              <div
                className="
                w-10
                h-10

                rounded-full

                bg-gradient-to-br
                from-emerald-500
                to-teal-400

                flex
                items-center
                justify-center

                text-white
                "
              >

                AI

              </div>


              <div>

                <h3
                  className="
                  font-semibold
                  text-slate-900
                  "
                >

                  Support Assistant

                </h3>


                <p
                  className="
                  text-xs
                  text-emerald-600
                  "
                >

                  Online now

                </p>

              </div>


            </div>




            {/* Messages */}


            <div
              className="
              mt-6
              space-y-4
              "
            >


              <div
                className="
                bg-slate-100

                rounded-2xl

                p-4

                text-sm

                text-slate-700
                "
              >

                Hello 👋 How can I help you today?

              </div>



              <div
                className="
                ml-auto

                max-w-[80%]

                bg-gradient-to-r
                from-emerald-600
                to-teal-500

                text-white

                rounded-2xl

                p-4

                text-sm
                "
              >

                What is your return policy?

              </div>



              <div
                className="
                bg-slate-100

                rounded-2xl

                p-4

                text-sm

                text-slate-700
                "
              >

                You can return products within 30 days according to our policy.

              </div>


            </div>


          </div>



        </motion.div>



      </div>


    </section>

  );
};


export default Hero;