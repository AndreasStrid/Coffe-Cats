import { URL, IMAGES } from "./Variables";

const notInitializedRedirect = (url: string) => {
    url = "";
}

const MENU_BUTTONS = [
    [{ name: "Cat", url: URL.ABOUT_CAT, redirect: notInitializedRedirect }],
    [{ name: "Böök", url: URL.BOOKING_1, redirect: notInitializedRedirect }],
    [{ name: "Home", url: URL.HOME, redirect: notInitializedRedirect }],
    [{ name: "Pröfile", url: URL.PROFILE_PRÖ, redirect: notInitializedRedirect }],
    [
        { name: "SignUp", url: URL.SIGN_UP, redirect: notInitializedRedirect },
        { name: "SignIn", url: URL.SIGN_IN, redirect: notInitializedRedirect }
    ]
];

const NAVBAR_BUTTONS = [
    { name: "About", url: URL.ABOUT, redirect: notInitializedRedirect },
    { name: "Booking", url: URL.BOOKING, redirect: notInitializedRedirect },
    { name: "Home", url: URL.HOME, redirect: notInitializedRedirect },
    { name: "Profile", url: URL.PROFILE, redirect: notInitializedRedirect },
    { name: "Sign/in/up", url: URL.SIGN, redirect: notInitializedRedirect }
];

const PAGES = [
    {
        comp1: 'aboutPage'
    },
    {
        comp1: 'bookingPage'
    }
    {
        comp1: {
            h1: "Cats",
            img: IMAGES.CAT_IMAGE.img,
            p:
                "Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price"
        },
        comp2: {
            h1: "Coffe",
            img: IMAGES.CAT_COFFEE_IMAGE.img,
            p:
                "Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life"
        }
    },
    {
        comp1: 'profilePage'
    }

    {
        label: "Login",
        stateNames: ["userName", "password"]
    },
    {
        label: "Login",
        stateNames: ["userName", "password"]
    }
]

export { NAVBAR_BUTTONS, MENU_BUTTONS, PAGES };




