import { getPostList } from '@/graphql/posts'
import PostList from '@/components/PostList'

export const metadata = {
	title: 'Blog',
	description: 'Read travel stories...',
}

export default async function BlogHome({ params }) {
	const initialPosts = await getPostList()

	return (
		<section className=''>

			<div className="h-[50vh] min-h-[20rem] bg-[url('/home.jpg')] bg-no-repeat bg-cover relative pt-[120px]">
				<div className='absolute bg-slate-900 inset-0 z-0 opacity-40'></div>

				<h1 className='text-6xl text-center text-slate-100 relative z-10 py-8'>
					BLOG
				</h1>

				<p className='relative z-10 text-center text-slate-200 text-2xl'>
					Read our latest articles
				</p>
			</div>
            
			<PostList initialPosts={initialPosts} />

		</section>
	)
}
