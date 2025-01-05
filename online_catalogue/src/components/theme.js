import { createTheme, styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { Switch, Card, Radio, Autocomplete, Grid, Paper, TextField, Button, CircularProgress, Typography, Accordion } from "@mui/material";


export const dark_color = '#222222'
const gray_color = '#D3D3D3'
export const yellow_color = '#e3ae0a'
export const white_color = '#e0e0e0'

// alternative to yellow: #36a28b from N26


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#262626',
            light: '#242424',
            dark: '#202020'
        },
        secondary: {
            main: yellow_color
        },
        text: {
            primary: white_color,
            secondary: yellow_color
        },
        blue: {
            main: '#376b8e',
            dark: '#2c5672',
            light: '#2e79ab'
        },
        dimgray: {
            main: '#696969'
        },
        lightgray: {
            main: '#e0e0e0'
        }
    },

});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e5e5e5',
            dark: '#ffffff',
            light: '#f3f3f3'
        },
        secondary: {
            main: '#e0aa02' //'#e39609'
        },
        text: {
            primary: dark_color,
            secondary: yellow_color
        },
        blue: {
            main: '#38749c',
            dark: '#2c5672',
            light: '#2e79ab'
        },
        dimgray: {
            main: '#c3c3c3'
        },
        lightgray: {
            main: '#e0e0e0'
        }
    }
});

export const getTheme = (mode) => {
    return mode === 'dark' ? darkTheme : lightTheme
};

export const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: theme.palette.text.primary,
        '&.Mui-focused fieldset': {
            // Border color when the input is focused
            borderColor: theme.palette.text.primary,
        },
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
        // Label color when the input is focused and label is shrunk
        color: theme.palette.secondary.main,
    }
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: theme.palette.text.primary,
        '&.Mui-focused fieldset': {
            // Border color when the input is focused
            borderColor: theme.palette.secondary.main,
        },
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
        // Label color when the input is focused and label is shrunk
        color: theme.palette.secondary.main,
    },
}));

export const MethodPaper = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    borderRadius: 100,
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main
    },
    // border: '1px solid'
}));


export const LinkLandingBrowse = styled(Link)(({ theme, selected }) => ({
    fontSize: 30,
    color: theme.palette.primary.light,
    textDecoration: "none",
    fontWeight: 'bold',
    margin: '20px',
    padding: 20, 
    '&:hover': {
        color: theme.palette.primary.dark,
    }
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}))

export const StyledPaperTitleTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    padding: '2px',
    backgroundColor: theme.palette.primary.main
}))

export const StyledPaperContentTypography = styled(Typography)(({ theme }) => ({
    padding: '20px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))'
}))
// '#00ff00'


export const CustomDeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '54px',
    '&:hover': {
        background: theme.palette.error.dark,
    },
    color: white_color
}));

export const AddMappingButton = styled(Button)(({ theme }) => ({
    color: theme.palette.blue.light,
    fontWeight: 'bold',
    '&:hover': {
        color: theme.palette.blue.dark,
    }
}));

// Custom Styled Radio Component
export const CustomRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.text.primary, // Default color
    '&.Mui-checked': {
        color: theme.palette.secondary.main, // Color when the radio button is selected
    },
}));

export const MenuButton = styled(Button)(({ theme, selected }) => ({
    fontSize: 18,
    color: selected === true ? theme.palette.secondary.main : theme.palette.text.primary,
    fontWeight: selected === true ? 'bold' : 'normal',
}));

export const CustomLink = styled(Link)(({ theme, selected }) => ({
    textDecoration: "none",
    // fontSize: 18,
    color: selected === true ? theme.palette.secondary.main : theme.palette.text.primary,
    fontWeight: selected === true ? 'bold' : 'normal',
}));


export const DatasetLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
}));

export const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}));

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}));

export const BackgroundGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    minHeight: '100vh'
}));


export const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.secondary.main
}));

export const ExamplQueryButton = styled(Button)(({ theme }) => ({
    background: theme.palette.blue.main,
    '&:hover': {
        background: theme.palette.blue.dark,
    },
    color: white_color
}));


export const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 4,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.secondary.main,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            border: '6px solid #fff',
        },
    },
    '& .MuiSwitch-thumb': {
        // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.light,
        boxSizing: 'border-box',
        width: 18,
        height: 18,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'dark' ? '#373737' : '#e9e9e9',
        opacity: 1
    },
}));


export const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            backgroundColor: theme.palette.text.primary,
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                color: theme.palette.primary.main,
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    theme.palette.text.primary, //the icon
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.light,
        width: 32,
        height: 32,
        '&:before': { //color icon light
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                theme.palette.text.primary,
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
    },
}));