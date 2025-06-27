import Layout from "@/components/layout/Layout"
import BlogArea1 from "@/components/sections/BlogArea1"
import BlogCategories1 from "@/components/sections/BlogCategories1"
import CtaArea1 from "@/components/sections/CtaArea1"
import HeroArea1 from "@/components/sections/HeroArea1"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				{/* <HeroArea1 /> */}
				<BlogArea1 />
				<BlogCategories1 />
				<CtaArea1 />
			</Layout>
		</>
	)
}