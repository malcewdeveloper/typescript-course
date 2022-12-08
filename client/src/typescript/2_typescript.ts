// Enum
enum FontWight {
    Bold,
    Light = 'light',
    Lighter = 'lighter'
}
let fontWight: FontWight | FontWight.Lighter = FontWight.Bold;
let fontWightKey: string = FontWight.Light;

const fontWeights = {
    Bold: 'bold',
    Light: 'light',
    Lighter: 'lighter'
} as const;


