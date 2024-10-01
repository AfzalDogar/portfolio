/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetBrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        //   accent:{
        // 	DEFAULT:"#00ff99",
        // 	hover:"#00e187"
        //   }
        accent: {
          DEFAULT: "#22a6b3",
          hover: "#7ed6df",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// extend: {
// 	colors: {
// 	  background: "hsl(var(--background))",
// 	  foreground: "hsl(var(--foreground))",
// 	  card: {
// 		DEFAULT: "hsl(var(--card))",
// 		foreground: "hsl(var(--card-foreground))",
// 	  },
// 	  popover: {
// 		DEFAULT: "hsl(var(--popover))",
// 		foreground: "hsl(var(--popover-foreground))",
// 	  },
// 	  primary: {
// 		DEFAULT: "hsl(var(--primary))",
// 		foreground: "hsl(var(--primary-foreground))",
// 	  },
// 	  secondary: {
// 		DEFAULT: "hsl(var(--secondary))",
// 		foreground: "hsl(var(--secondary-foreground))",
// 	  },
// 	  muted: {
// 		DEFAULT: "hsl(var(--muted))",
// 		foreground: "hsl(var(--muted-foreground))",
// 	  },
// 	  accent: {
// 		DEFAULT: "hsl(var(--accent))",
// 		foreground: "hsl(var(--accent-foreground))",
// 	  },
// 	  destructive: {
// 		DEFAULT: "hsl(var(--destructive))",
// 		foreground: "hsl(var(--destructive-foreground))",
// 	  },
// 	  border: "hsl(var(--border))",
// 	  input: "hsl(var(--input))",
// 	  ring: "hsl(var(--ring))",
// 	  chart: {
// 		1: "hsl(var(--chart-1))",
// 		2: "hsl(var(--chart-2))",
// 		3: "hsl(var(--chart-3))",
// 		4: "hsl(var(--chart-4))",
// 		5: "hsl(var(--chart-5))",
// 	  },
// 	},
// 	borderRadius: {
// 	  lg: "var(--radius)",
// 	  md: "calc(var(--radius) - 2px)",
// 	  sm: "calc(var(--radius) - 4px)",
// 	},
//   },