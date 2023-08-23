/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : {
          100:'#0085ff',
          200:'#69b4ff',
          300:'#e0ffff',
        },
        'accent':{
          100:'#006fff',
          200:'#e1ffff',
        },
        'textColor':{
          100:'#FFFFFF',
          200:'#9e9e9e',
        },
        'bgColor':{
          100:'#1E1E1E',
          200:'#2d2d2d',
          300:'#454545',
        },
      },
      backgroundImage:{
        'backgroundDesign':"url(/src/image/blob-scene-haikei.svg)",
        'backgroundDesignSm':"url(/src/image/blob-scene-haikei-sm.svg)",
        'logoIcon':"url(/src/image/logoIcon.svg)",
        'logoIconSm':"url(/src/image/logoIconSm.png)",
        'payroll':"url(/src/image/payroll.svg)",
        'profile':"url(/src/image/profile.svg)",
        'user':"url(/src/image/user.png)",
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '95%': '95%',
      },
    },
  },
  plugins: [],
};

// --primary-100:#0085ff;
// --primary-200:#69b4ff;
// --primary-300:#e0ffff;
// --accent-100:#006fff;
// --accent-200:#e1ffff;
// --text-100:#FFFFFF;
// --text-200:#9e9e9e;
// --bg-100:#1E1E1E;
// --bg-200:#2d2d2d;
// --bg-300:#454545;
  