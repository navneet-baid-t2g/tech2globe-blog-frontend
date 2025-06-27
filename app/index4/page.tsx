

import Layout from "@/components/layout/Layout"
import BlogAllArea1 from "@/components/sections/BlogAllArea1"
import BlogArea7 from "@/components/sections/BlogArea7"
import CtaArea4 from "@/components/sections/CtaArea4"
import HeroArea4 from "@/components/sections/HeroArea4"
import LatestBlogArea1 from "@/components/sections/LatestBlogArea1"
export default function Home4() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={2}>
				<HeroArea4 />
				<BlogArea7 />
				<BlogAllArea1 />
				<LatestBlogArea1 />
				<CtaArea4 />
			</Layout>
		</>
	)
}