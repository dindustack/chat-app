import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    borderColor: "#323336"
  },
})

// // 3. Pass the new theme to `ChakraProvider`
// <ChakraProvider theme={theme}>
//   <App />
// </ChakraProvider>

// // 4. Now you can use these colors in your components
// function Usage() {
//   return <Box bg="brand.100">Welcome</Box>
// }