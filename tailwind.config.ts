
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// New modern natural color palette
				nature: {
					// Primary green shades
					"50": "#f1f9f5",
					"100": "#dcf0e4",
					"200": "#bbdfc9",
					"300": "#8ec6a8",
					"400": "#59a582",
					"500": "#3a8c66",
					"600": "#2a7253",
					"700": "#235c43",
					"800": "#1e4a38",
					"900": "#1a3d2f",
					"950": "#0d221b",

					// Earth tones
					"earth-100": "#f5f0e6",
					"earth-200": "#e6d7bd",
					"earth-300": "#d3bc8d",
					"earth-400": "#c4a366",
					"earth-500": "#b18842",
					"earth-600": "#8f6930",
					"earth-700": "#735228",
					"earth-800": "#5c4120",
					"earth-900": "#4a351b",

					// Water/sky blues
					"water-100": "#e6f7ff",
					"water-200": "#c5eaff",
					"water-300": "#9bd6ff",
					"water-400": "#70baff",
					"water-500": "#3b95ff",
					"water-600": "#0067ff",
					"water-700": "#0055d4",
					"water-800": "#0045ad",
					"water-900": "#00398a",

					// Accent colors
					"sunset": "#ff7e5f",
					"sunrise": "#feb47b",
					"blossom": "#f78fb3",
					"berry": "#9b59b6",
					"autumn": "#e74c3c",
					"wheat": "#f5deb3",
					"sage": "#7fad71"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				"pulse-soft": {
					"0%, 100%": {
						opacity: "1",
					},
					"50%": {
						opacity: "0.8",
					},
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"scale-up": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0",
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1",
					},
				},
				"rotate-slow": {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				"leaf-sway": {
					"0%, 100%": {
						transform: "rotate(-5deg)",
					},
					"50%": {
						transform: "rotate(5deg)",
					},
				},
				"ripple": {
					"0%": {
						transform: "scale(0)",
						opacity: "1",
					},
					"100%": {
						transform: "scale(4)",
						opacity: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 5s ease-in-out infinite",
				"pulse-soft": "pulse-soft 3s ease-in-out infinite",
				"fade-in-up": "fade-in-up 0.7s ease-out",
				"fade-in-right": "fade-in-right 0.7s ease-out",
				"fade-in-left": "fade-in-left 0.7s ease-out",
				"scale-up": "scale-up 0.4s ease-out",
				"rotate-slow": "rotate-slow 20s linear infinite",
				"leaf-sway": "leaf-sway 3s ease-in-out infinite",
				"ripple": "ripple 2s ease-out",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["Playfair Display", "serif"],
				nature: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				"gradient-natural": "linear-gradient(135deg, #8ec6a8 0%, #e6f7ff 100%)",
				"gradient-sunset": "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
				"gradient-earth": "linear-gradient(135deg, #e6d7bd 0%, #8f6930 100%)",
				"gradient-forest": "linear-gradient(135deg, #235c43 0%, #7fad71 100%)",
				"gradient-water": "linear-gradient(135deg, #70baff 0%, #c5eaff 100%)",
			},
			boxShadow: {
				"natural": "0 10px 30px -5px rgba(10, 86, 53, 0.1)",
				"leaf": "0 10px 30px -5px rgba(142, 198, 168, 0.3)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
