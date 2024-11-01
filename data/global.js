import { Poppins } from "next/font/google";

export const metadata = {
    title: "Tejas Dhanani",
    description:
        "Welcome to Tejas's portfolio! Discover projects in software development, including responsive websites and custom solutions.",
};

export const font = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "400"],
});
