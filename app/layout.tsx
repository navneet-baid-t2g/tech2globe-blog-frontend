import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/fontawesome.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
// import "/public/assets/css/slick-slider.css"
import "/public/assets/css/owl.carousel.min.css"
import "/public/assets/css/aos.css"
// import "/public/assets/css/swiper-bundle.css"
import "/public/assets/css/mobile-menu.css"
import "/public/assets/css/utility.css"
import "/public/assets/css/main.css"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"

const figtree = Figtree({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--figtree",
	display: 'swap',
})

export const metadata: Metadata = {
    title: "Tech2Globe - Blog",
    description: "Tech2Globe is the all-in-one platform for your business 360 degree digital needs, including IT consulting, software development, ecommerce, digital marketing, data analytics, and much more. Connect with us now to expand your business.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.variable}`}>{children}</body>
        </html>
    )
}
