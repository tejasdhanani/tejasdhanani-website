import "./globals.css";
import { font, metadata as metadata_obj } from "@/data/global";

export const metadata = metadata_obj;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${font.classname}`}>{children}</body>
        </html>
    );
}
