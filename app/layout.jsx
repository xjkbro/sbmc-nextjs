import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Roboto } from "@next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className={"text-black bg-white " + roboto.className}>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
