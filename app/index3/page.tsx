

import Layout from "@/components/layout/Layout"
import BlogArea5 from "@/components/sections/BlogArea5"
import BlogArea6 from "@/components/sections/BlogArea6"
import BlogBoxsArea1 from "@/components/sections/BlogBoxsArea1"
import BlogWeek1 from "@/components/sections/BlogWeek1"
import CtaArea3 from "@/components/sections/CtaArea3"
import HeroArea3 from "@/components/sections/HeroArea3"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={1}>
				<HeroArea3 />
				<BlogBoxsArea1 />
				<BlogArea5 />
				<BlogArea6 />
				<BlogWeek1 />
				<CtaArea3 />
			</Layout>
		</>
	)
}