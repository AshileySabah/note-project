const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#4A0BA8",
            light: "#CBAFF3",
            dark: "#20024A",
            contrastText: "#fff",
          },
          secondary: {
            main: "#F376D3",
            light: "#F694DD",
            dark: "#F353CA",
            contrastText: "#fff",
          },
        }
      : {
          primary: {
            main: "#4A0BA8",
            light: "#CBAFF3",
            dark: "#20024A",
            contrastText: "#fff",
          },
          secondary: {
            main: "#F376D3",
            light: "#F694DD",
            dark: "#F353CA",
            contrastText: "#fff",
          },
        }),
  },
});

export default getDesignTokens;
