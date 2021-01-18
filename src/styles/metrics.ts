const spacer = '1rem'

export const spacing = {
    0: '0',
    1: `calc(${spacer} * .25)`,
    2: `calc(${spacer}* .5)`,
    3: `calc(${spacer} * 1)`,
    4: `calc(${spacer} * 1.5)`,
    5: `calc(${spacer} * 3)`,
    spacer
}

export const fontSpacing = {
    text: {
        top: "16px",
        right: 0,
        bottom: 0,
        left: 0
    }
}

export const fontFamily = {
    title: 'montserrat, proxima nova, gibson, avenir, roboto, sans-serif',
    subtitle: 'montserrat, proxima nova, gibson, avenir, roboto, sans-serif',
    text: 'muli, Nunito, Roboto, Helvetica, sans-serif'
}

export const fontSize = {
    title: '48px',
    subtitle: '32px',
    text: '16px',
    button: '16px',
}

export const fontWeight = {
    title: '700',
    subtitle: '700',
    text: '400',
    button: '300',
    boldButton: '700'
}

export const lineHeight = {
    title: 1.45,
    subtitle: 1.34,
    text: 1.68
}

export const letterSpacing = {
    title: "1.6px",
    subtitle: "1.06px",
    text: "1.87px",
    button: '0.48px',
    boldButton: '0.32px'
}

export const border = {
    width: "1px",
    radius: '5px'
}

export const zIndex = {
    header: 100
}

export const effects = {
    shadow: "0px 15px 20px #1D164D14"
}

export const card = {
    font: {
        size: "24px",
        weight: 700,
        lineHeight: 1.41,
        letterSpacing: "0.72px",
        align: "left"
    },
    border: {
        radius: "7px"
    }
}

const exportDefault = {
    spacing,
    fontSpacing,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    border,
    zIndex,
    card,
    effects
}

export default exportDefault