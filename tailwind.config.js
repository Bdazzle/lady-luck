/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    }
  })
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryPurple": "#7f06c4",
        "midpurple": "#420466",
        "darkPurple": "#1a0029"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
      },
      fontFamily: {
        "roboto": "Roboto",
        "cursive": ["'Kaushan Script', cursive"],
        "crimson-text" : "Crimson Text"
      },
      animation: {
        'scrollX': 'textscrollX 8s linear infinite',
        'fadeSlide': 'fadeSlide 500ms ease-in-out',
        'leftSlide': 'leftSlide 500ms ease-in-out',
        /*forwards maintains animation state at end of animation */
        'expand' : 'expand 500ms ease-in-out forwards',
        'compress' : 'compress 500ms ease-in-out forwards',
        'flip' : 'flip ease-in-out forwards',
        'spin' : 'spin 6s linear infinite',
        'reverseSpin' : 'reverseSpin 6s linear infinite',
        'deal1' : 'deal1 100ms ease-in-out forwards',
        'deal2' : 'deal2 200ms ease-in-out forwards',
        'dealMid' : 'dealMid 300ms ease-in-out forwards',
        'deal4' : 'deal4 400ms ease-in-out forwards',
        'deal5' : 'deal5 500ms ease-in-out forwards',
        'fadeInandOut' : 'fadeInandOut 5000ms ease-in-out infinite'
      },
      keyframes: {
        /*
        number of total animations between words, in this case 3 words (4 animations),
        100/total animations to get increment % (100/4 = 25%),
        % + however long we want to stay on that word = 2nd number 
        (ex: stay on word for 12% of animation length = 25% + 12% = 37% or '25%, 37%' : {transform...} ) 
        time % to stay on word is 2nd number of first line?
        */
        textscrollX: {
          '0%, 12.66%, 100%': { transform: 'translate3d(0,0,0)' },
          '25%, 37.66%': { transform: 'translate3d(0,-33%,0)' },
          '50%, 62.66%': { transform: 'translate3d(0,-66%,0)' },
          '75%, 87.66%': { transform: 'translate3d(0,-33%,0)' }
        },
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateX(110%)'},
          '100%': { opacity: '1',  transform: 'translateX(0px)'}
        },
        fadeInandOut :{
          '0%' : { opacity : '0.25'},
          '50%' : { opacity : '1'},
          '100%' : { opacity : '0.25'},
        },
        leftSlide : {
          '0%': { opacity: '0', transform: 'translateX(-100%)'},
          '100%': { opacity: '1',  transform: 'translateX(0px)'}
        },
        /*clipPath will represent the element I want to effect, like a container or a wrapper
        expand goes from points (50%x, 100%y, 0x,0y, 50%x 0y, 50%x 100%y) making a straight line, looking like width 0,
        to (0x, 100%y, 0x,0y, 100%x 0y, 100%x 100%y) or to each corner of a quadrilateral shaped element, 
        revealing content of the component/element as animation time increases. 
        */
        expand : {
          '0%' : { clipPath : 'polygon(50% 100%,50% 0,50% 0,50% 100%)' },
          '100%' : { clipPath : 'polygon(0 100%, 0 0, 100% 0, 100% 100%)' },
        },
        compress : {
          '0%' : { clipPath : 'polygon(0 100%, 0 0, 100% 0, 100% 100%)' },
          '100%' : { clipPath : 'polygon(50% 100%,50% 0,50% 0,50% 100%)', },
        },
        flip : {
          '0%' : { transform : 'rotateY(0)', opacity:'0' },
          '100%' : { transform : 'rotateY(180deg)', opacity:'1'}
        },
        spin : {
          '0%' : { transform: 'rotate(0deg)' },
          '100%' : { transform: 'rotate(360deg)' }
        },
        reverseSpin : {
          '0%' : { transform: 'rotate(360deg)' },
          '100%' : { transform: 'rotate(0deg)' }
        },
        deal1 : {
          '0%': { transform : 'translate3d(0,0)' },
          '100%' : { 
            transform : 'translate3d(-200%,-50%,0) rotate(-45deg)',
          }
        },
        deal2 : {
          '0%': { transform : 'translate3d(0,0)' },
          '100%' : { transform : 'translate3d(-100%,-100%,0) rotate(-23deg)'}
        },
        dealMid : {
          '0%': { transform : 'translateY(0)' },
          '100%' : { transform : 'translateY(-130%)'}
        },
        deal4 : {
          '0%': { transform : 'translate3d(0,0)' },
          '100%' : { transform : 'translate3d(100%,-100%,0) rotate(23deg)'}
        },
        deal5 : {
          '0%': { transform : 'translate3d(0,0)' },
          '100%' : { transform : 'translate3d(200%,-50%,0) rotate(45deg)'}
        }
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms"), backfaceVisibility],
}

