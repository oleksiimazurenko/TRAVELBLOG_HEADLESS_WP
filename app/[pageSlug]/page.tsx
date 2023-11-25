
import { getPageSlugs, getSinglePage } from '@/graphql/pages'

export async function generateStaticParams() {
	const pageSlugs = await getPageSlugs()

	const paths = pageSlugs.map(s => ({
		pageSlug: s.slug,
	}))

	return paths
}

export async function generateMetadata({ params }) {
	const pageData = await getSinglePage(params.pageSlug)

	return {
		title: pageData.title,
	}
}
export default async function Page({ params }) {
	const pageData = await getSinglePage(params.pageSlug)

	return (
		<section className='content-area py-8 pt-[120px] pb-[120px]'>
			<article>
				<h1 className='text-6xl text-center text-slate-700 relative py-8'>
					{pageData.title}
				</h1>
				<div
					dangerouslySetInnerHTML={{ __html: pageData.content }}
					className='post-content container mx-auto lg:max-w-4xl'
				/>
			</article>
		</section>
	)
}
