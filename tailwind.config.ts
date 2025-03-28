
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
				sitio: {
					"green-dark": "#2D5C45",
					"green-light": "#8BC8AA",
					"green-forest": "#1A4731",
					"blue-water": "#A3CFDF",
					"blue-sky": "#C9E4F8",
					"white": "#FCFCFC",
					"accent": "#FF6B6B",
					"earth": "#5E4B2F",
					"earth-light": "#D0B894",
					"sand": "#F8F4EC",
					"coral": "#FF8E7F",
					"leaf": "#62A87C",
					"moss": "#718F6A",
					"sunshine": "#FFC857",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'scale-up': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'nature-breathe': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.9'
					}
				},
				'leaf-sway': {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				'water-ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'scale-up': 'scale-up 0.4s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'nature-breathe': 'nature-breathe 4s ease-in-out infinite',
				'leaf-sway': 'leaf-sway 3s ease-in-out infinite',
				'water-ripple': 'water-ripple 3s ease-out infinite'
			},
			boxShadow: {
				'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
				'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
				'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
				'nature': '0 5px 15px rgba(45, 92, 69, 0.15)',
				'leaf': '0 8px 20px rgba(98, 168, 124, 0.2)',
			},
			textShadow: {
				'sm': '0 1px 2px rgba(0, 0, 0, 0.2)',
				'md': '0 2px 4px rgba(0, 0, 0, 0.3)',
				'lg': '0 3px 6px rgba(0, 0, 0, 0.4)',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
			backgroundImage: {
				'nature-gradient': 'linear-gradient(135deg, #8BC8AA 0%, #C9E4F8 100%)',
				'forest-gradient': 'linear-gradient(135deg, #1A4731 0%, #62A87C 100%)',
				'sunset-gradient': 'linear-gradient(135deg, #FFC857 0%, #FF6B6B 100%)',
				'earth-gradient': 'linear-gradient(135deg, #5E4B2F 0%, #D0B894 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
