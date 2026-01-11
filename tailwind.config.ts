import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Tight', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))'
			},
			animation: {
				shimmer: 'shimmer 2s linear infinite',
				gradient: 'gradient 8s linear infinite',
				meteor: 'meteor 5s linear infinite',
				ripple: 'ripple 3s ease-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'border-beam': 'border-beam 15s linear infinite',
				grid: 'grid 20s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-reverse': 'marquee-reverse var(--duration) linear infinite'
			},
			keyframes: {
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				meteor: {
					'0%': { transform: 'translateY(-20vh) translateX(-20vw)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) translateX(100vw)', opacity: '0' }
				},
				ripple: {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(1.5)', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'border-beam': {
					'0%': { 'offset-distance': '0%' },
					'100%': { 'offset-distance': '100%' }
				},
				grid: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-reverse': {
					from: { transform: 'translateX(calc(-100% - var(--gap)))' },
					to: { transform: 'translateX(0)' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},

	plugins: [forms]
} satisfies Config;
