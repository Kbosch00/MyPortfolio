/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-black": "#030303",
      },
      fontFamily: {
        'dmSerifDisplay': ['DMSerifDisplay', 'sans-serif'],
        'handlee': ['Handlee', 'sans-serif'],
        'aclonica': ['Aclonica', 'sans-serif'],
        'alice': ['Alice', 'sans-serif'],
        'crimsonPro': ['Crimson Pro', 'sans-serif']
      }
    },
    screens: {
      ssssm: "320px",
      sssm: "430px",
      //=> @media (min-width: 500px)
      ssm: "500px",
      //=> @media (min-width: 500px)
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmd: "962px",
      // => @media (min-width: 962px) { ... }
      lg: "1103px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
