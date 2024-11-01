import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "400"],
});

export const metadata = {
    title: "Tejas Dhanani",
    description:
        "Welcome to Tejas's portfolio! Discover projects in software development, including responsive websites and custom solutions.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.classname}`}>{children}</body>
        </html>
    );
}
