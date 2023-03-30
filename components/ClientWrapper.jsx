"use client";
import { useState } from "react";

import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function ClientWrapper({ children }) {
    const [overlay, setOverlay] = useState(false);
    return (
        <div className="">
            <Header overlay={overlay} setOverlay={setOverlay} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
