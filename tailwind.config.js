/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      })
    },
    colors: {
      Danger10: '#FBF4F4',
      Danger20: '#F8E9E9',
      Danger30: '#F0D2D2',
      Danger40: '#D37979',
      Danger50: '#D37979',
      Danger60: '#C44C4C',
      Danger70: '#B61F1F',
      Danger80: '#A00A0A',
      Neutral80: '#140A08',
      Neutral70: '#433B39',
      Neutral60: '#726C6B',
      Neutral50: '#D0CECE',
      Neutral40: '#E7E6E6',
      Neutral30: '#F3F3F3',
      Neutral20: '#FAFAFA',
      Neutral10: '#FFFFFF',
      Yellow80: '#72510D',
      Yellow70: '#D8940E',
      Yellow60: '#F2AF29',
      Yellow50: '#F5BF54',
      Yellow40: '#F7CF7F',
      Yellow30: '#FADFA9',
      Yellow20: '#FCEFD4',
      Yellow10: '#FEF7EA',
      Blue80: '#26435E',
      Blue70: '#3877B2',
      Blue60: '#4891D4',
      Blue50: '#6CA7DD',
      Blue40: '#91BDE5',
      Blue30: '#B6D3EE',
      Blue20: '#DAE9F6',
      Blue10: '#EDF4FB',

      Primary80: '#0E390E',
      Primary70: '#186218',
      Primary60: '#228B22',
      Primary50: '#4EA24E',
      Primary40: '#7AB97A',
      Primary30: '#BDDCBD',
      Primary20: '#E9F3E9',
      Primary10: '#F4F9F4',
      PrimaryHue: '#89C01C',
      PrimaryGradient: '-webkit-linear-gradient(90deg, #2A9428 0%, #89C22D 100%)',

      Secondary80: '#140A08',
      Secondary70: '#230803',
      Secondary60: '#543731',
      Secondary50: '#765F5A',
      Secondary40: '#988783',
      Secondary30: '#BAAFAD',
      Secondary20: '#DDD7D6',
      Secondary10: '#EEEBEA',

      SecondaryHuw: '#9F7143',
      SecondaryGradient: 'linear-gradient(180deg, #543731 0%, #9F7143 100%)'



    },
    container: {
      maxWidth: {
        xl: '1224px',
        sm: '360px',
      }
    },

    fontSize: {
      'Medium+/Display/Large': ['64px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '72px',
        letterSpacing: '-0.04em',
      }],
      'Medium+/Display/Medium': ['48px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '64px',
        letterSpacing: '-0.04em',
      }],
      'Medium+/Title/xxLarge': ['64px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '76px',
        letterSpacing: '-0.02em',
      }],
      'Medium+/Title/xLarge': ['48px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '56px',
        letterSpacing: '-0.02em',
      }],
      'Medium+/Title/Large': ['40px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '48px',
        letterSpacing: '-0.02em',
      }],

      'Medium+/Title/Medium': ['32px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '40px',
        letterSpacing: '-0.015em',
      }],

      'Medium+/Title/Small': ['24px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '28px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Title/xSmall': ['18px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Title/xxsmall': ['14px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '20px',
        letterSpacing: '-0.05em',
      }],
      'Medium+/Paragraph/Large': ['18px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/Large-Strong': ['18px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '28px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/Medium': ['16px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/Medium-Strong': ['16px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/Small': ['14px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/Small-Strong': ['14px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '20px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/xSmall': ['12px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px',
        letterSpacing: '-0.015em',
      }],
      'Medium+/Paragraph/xSmall-Strong': ['12px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '16px',
        letterSpacing: '-0.015em',
      }],

      'Medium+/Label/Large': ['18px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/Large-Strong': ['18px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/Medium': ['16px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/Medium-Strong': ['16px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '20px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/Small': ['14px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/Small-Strong': ['14px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/xSmall ': ['12px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }],
      'Medium+/Label/xSmall-Strong': ['12px', {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }],

      'Small/Display/Large': ['48px',
        {
          fontFamily: 'Manrope',
          fontWeight: '700',
          lineHeight: '64px',
          letterSpacing: '-0.02em',
        }
      ],
      'Small/Display/Medium': ['40px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Title/xxLarge': ['48px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
        }
      ],
      'Small/Title/xLarge': ['40px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.02em',
        }
      ],
      'Small/Title/Large': ['32px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '40px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Title/Medium': ['24px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '32px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Title/Small': ['18px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Title/xSmall': ['16px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Title/xxsmall': ['12px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '16px',
          letterSpacing: '-0.05em',
        }
      ],
      'Small/Paragraph/Large': ['16px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/Large-Strong': ['16px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/Medium': ['14px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/Medium-Strong': ['14px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/Small': ['12px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/Small-Strong': ['12px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/xSmall': ['10px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Paragraph/xSmall-Strong': ['10px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }
      ],
      'Small/Label/Large': ['16px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }
      ],
      'Small/Label/Large-Strong': ['16px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }
      ],
      'Small/Label/Medium': ['14px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }
      ],
      'Small/Label/Medium-Strong': ['14px',
      {
        fontFamily: 'Manrope',
        fontStyle: 'Normal',
        fontWeight: '700',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }
    ],
    'Small/Label/Small': ['12px',
      {
        fontFamily: 'Manrope',
        fontStyle: 'Normal',
        fontWeight: '500',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }
    ],

    'Small/Label/Small-Strong': ['12px',
      {
        fontFamily: 'Manrope',
        fontStyle: 'Normal',
        fontWeight: '700',
        lineHeight: '16px',
        letterSpacing: '-0.01em',
      }
    ],
    'Small/Label/xSmall': ['10px',
      {
        fontFamily: 'Manrope',
        fontStyle: 'Normal',
        fontWeight: '500',
        lineHeight: '12px',
        letterSpacing: '-0.01em',
      }
    ],

    'Small/Label/xSmall-Strong': ['10px',
      {
        fontFamily: 'Manrope',
        fontStyle: 'Normal',
        fontWeight: '700',
        lineHeight: '12px',
        letterSpacing: '-0.01em',
      }
    ],


    }
  },
  plugins: [],
}
