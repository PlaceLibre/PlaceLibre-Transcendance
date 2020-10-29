import { extendTheme } from "@chakra-ui/core"

/*const customColors={
  brand: '#FFC000',
  brandBlack: '#4D4C4C',
  brandDark: '#736E61',
  brandMiddle: '#E4E1D7',
  brandLight: '#FAF8F2',
  brandVariant: {
    50: '#fff9da',
    100: '#ffecad',
    200: '#ffe07d',
    300: '#ffd34b',
    400: '#ffc61a',
    500: '#e6ad00', 
    600: '#b38600',
    700: '#806000',
    800: '#4e3a00',
    900: '#1d1300',
    },
};*/

const customColors={
  brand: '#FFC000',
  brandBlack: '#4D4C4C',
  brandDark: '#736E61',
  brandMiddle: '#E4E1D7',
  brandLight: '#FAF8F2',
  brandVariant: {
    50: '#FFF5D6',
    100: '#FEECB4',
    200: '#FFE492',
    300: '#FFD967',
    400: '#FFD144',
    500: '#FFC000', 
    600: '#EDB200',
    700: '#D8AC26',
    800: '#B29333',
    900: '#816F3B',
    1000: '#5F563A',
    1100: '#4D4634',
    1200: '#343127',
    },
};

const customThemeColor = extendTheme({
  colors: customColors
});


const customTheme = extendTheme({
  colors: customColors,
  styles: {
    global: {
      "html, body": {
        fontSize: "sm",
        color: customThemeColor.colors.gray[700],
        lineHeight: "tall",
        fontFamily: 'Ubuntu, sans-serif'
      },
      a: {
        color: "teal.500",
      },
      button: {
        fontWeight: 'bold'
      },
    },
  },
  components: {
    Tabs: {
      variants:{
        brandVariant:{
          tablist: {
            borderBottom: "1px solid",
            borderColor: "transparent",
          },
          tab: {
            color: customThemeColor.colors.brandDark,
            borderBottom: "1px solid",
            borderColor: "customThemeColor.colors.brandDark",
            mb: "-1px",
            _selected: {
              color: customThemeColor.colors.brand,
              borderColor: customThemeColor.colors.brand,
            },
            _hover: {
              color: customThemeColor.colors.brand,
              borderColor: customThemeColor.colors.brand,
            },
            _disabled: {
              opacity: 0.4,
              cursor: "not-allowed",
            },
          },
        },
      
      },
    },
  },
  shadows:{
    outline: ` 0 0 2px 2px ${customThemeColor.colors.brandVariant[100]}`,
  },
    fonts: {
      body: "Ubuntu, sans-serif",
      heading: "Ubuntu, sans-serif",
      mono: "Menlo, monospace",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      normal: "normal",
      none: "1",
      shorter: "1.25",
      short: "1.375",
      base: "1.5",
      tall: "1.625",
      taller: "2",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  });

  export default customTheme;

  
