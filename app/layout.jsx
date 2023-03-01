import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
// config.autoAddCss = false;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
                <head /> will contain the components returned by the nearest parent
                head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

            <head />
            <body>
                <Header />
                {children}
            </body>
            <Footer />
        </html>
    )
}
