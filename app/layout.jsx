import "../styles/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { Roboto } from "@next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
    title: {
        template:  "%s | South Bay Math Circle",
        default:  "South Bay Math Circle",
    },
    icons: {
        icon: "/sun.png"
    }
  };

  
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={"text-black bg-white " + roboto.className}>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
