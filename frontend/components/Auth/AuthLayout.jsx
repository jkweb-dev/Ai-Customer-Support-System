const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section
      className="
      min-h-screen

      flex
      items-center
      justify-center

      px-5

      bg-gradient-to-br
      from-violet-50
      via-indigo-50
      to-sky-50
      "
    >
      <div
        className="
        w-full
        max-w-md

        bg-white/80
        backdrop-blur-xl

        rounded-3xl

        border
        border-white

        shadow-2xl

        p-8
        "
      >
        <h1
          className="
          text-3xl

          font-bold

          text-center

          text-slate-900
          "
        >
          {title}
        </h1>

        <p
          className="
          mt-3

          text-center

          text-slate-600
          "
        >
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;