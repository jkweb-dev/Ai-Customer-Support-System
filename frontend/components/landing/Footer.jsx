import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";


const Footer = () => {

  return (

    <footer
      className="
      bg-slate-900
      text-slate-300
      py-14
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto

        px-5
        md:px-8

        grid

        sm:grid-cols-2

        lg:grid-cols-4

        gap-10
        "
      >


        {/* Brand */}

        <div>

          <h3
            className="
            text-2xl

            font-bold

            bg-gradient-to-r
            from-emerald-400
            to-teal-300

            bg-clip-text

            text-transparent
            "
          >

            SupportAI

          </h3>


          <p
            className="
            mt-4

            text-slate-400

            leading-relaxed

            max-w-xs
            "
          >

            AI-powered customer support platform
            helping businesses deliver faster
            and smarter customer experiences.

          </p>


        </div>




        {/* Product Links */}

        <div>

          <h4
            className="
            text-white

            font-semibold

            mb-5
            "
          >

            Product

          </h4>


          <ul
            className="
            space-y-3

            text-sm

            text-slate-400
            "
          >

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Features
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Knowledge Base
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              AI Assistant
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Analytics
            </li>

          </ul>


        </div>





        {/* Company Links */}

        <div>

          <h4
            className="
            text-white

            font-semibold

            mb-5
            "
          >

            Company

          </h4>


          <ul
            className="
            space-y-3

            text-sm

            text-slate-400
            "
          >

            <li className="hover:text-emerald-400 transition cursor-pointer">
              About Us
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Contact
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-emerald-400 transition cursor-pointer">
              Terms
            </li>


          </ul>


        </div>





        {/* Social */}

        <div>

          <h4
            className="
            text-white

            font-semibold

            mb-5
            "
          >

            Follow Us

          </h4>



          <div
            className="
            flex

            gap-4
            "
          >


            <a
              href="#"
              className="
              p-3

              rounded-xl

              bg-white/10

              hover:bg-emerald-500

              hover:text-white

              transition
              "
            >

              <FaGithub size={18}/>

            </a>




            <a
              href="#"
              className="
              p-3

              rounded-xl

              bg-white/10

              hover:bg-emerald-500

              hover:text-white

              transition
              "
            >

              <FaLinkedin size={18}/>

            </a>




            <a
              href="#"
              className="
              p-3

              rounded-xl

              bg-white/10

              hover:bg-emerald-500

              hover:text-white

              transition
              "
            >

              <FaTwitter size={18}/>

            </a>


          </div>


        </div>



      </div>





      {/* Bottom */}

      <div
        className="
        max-w-7xl

        mx-auto

        mt-12

        pt-6

        border-t

        border-white/10

        px-5
        md:px-8

        text-center

        text-sm

        text-slate-500
        "
      >

        © 2026 SupportAI. All rights reserved.

      </div>


    </footer>

  );

};


export default Footer;