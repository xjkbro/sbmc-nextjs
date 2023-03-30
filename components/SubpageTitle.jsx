import { Roboto_Slab } from "@next/font/google";
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["700", "900"],
});

export default function SubpageTitle({ title }) {
    return (
        <div className="h-[35vh] bg-fixed bg-bottom bg-contain md:bg-[length:140%] subpage-parallax">
            <div className="h-[35vh] flex flex-col justify-center items-center backdrop-brightness-75">
                <div
                    className={
                        "font-bold text-[56px] text-yellow-300 mt-16 " +
                        robotoSlab.className
                    }
                >
                    {title}
                </div>
            </div>
        </div>
    );
}
