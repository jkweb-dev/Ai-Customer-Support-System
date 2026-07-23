"use client";

import {
  Building2,
  Mail,
  Lock,
  UserPlus
} from "lucide-react";


const RegisterForm = ({
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


      {/* Company Name */}

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
          Company Name
        </label>


        <div className="relative">


          <Building2
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

            type="text"

            name="companyName"

            value={formData.companyName}

            onChange={handleChange}

            placeholder="Enter company name"

            className="
            w-full

            pl-12
            pr-4

            py-3.5

            rounded-xl

            bg-white

            border
            border-slate-200

            text-slate-800

            placeholder:text-slate-400

            outline-none

            focus:border-violet-500

            focus:ring-4

            focus:ring-violet-100

            transition
            "

          />


        </div>

      </div>





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

            type= "password"

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





      {/* Confirm Password */}


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
          Confirm Password
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

            type=  "password"
            

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





      {/* Submit Button */}


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

        disabled:cursor-not-allowed
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

  );

};


export default RegisterForm;