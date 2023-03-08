import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {roboto} from '../components/font'



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className={"text-black bg-white " + roboto.className}>
                <Header />
                {children}
            <Footer />
            </body>
        </html>
    )
}
