const components = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: "#FFFFFF",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            },
        },
    },

    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: 8,
                padding: "10px 16px",
                boxShadow: "none",
            }),
            containedPrimary: {
                backgroundImage: "none",
            },
        },
    },

    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                borderBottom: "1px solid #E5E7EB",
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 10,
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 10,
                boxShadow: "0 6px 18px rgba(16,24,40,0.06)",
                border: "1px solid transparent",
            },
        },
    },

    MuiTextField: {
        defaultProps: {
            variant: "outlined",
        },
        styleOverrides: {
            root: {
                "& .MuiOutlinedInput-root": {
                    borderRadius: 8,
                },
            },
        },
    },

    MuiContainer: {
        defaultProps: {
            maxWidth: "lg",
        },
    },

    MuiSnackbar: {
        styleOverrides: {
            root: {
                bottom: 24,
            },
        },
    },
}


export default components