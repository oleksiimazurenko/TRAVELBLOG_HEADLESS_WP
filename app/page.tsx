import Link from 'next/link'

export const metadata = {
	title: 'Welcome to MY Travel Blog',
	description: 'my travel blog - read our travel stories',
}

export default function Home() {
	return (
		<>
			<section className="min-h-screen bg-[url('/home.jpg')] bg-no-repeat bg-cover relative pt-[120px] pb-[120px]">
				<div className='absolute bg-slate-900 inset-0 z-0 opacity-40'></div>

				<div className='min-h-[50vh] flex flex-col items-center justify-center z-10 relative'>
					<h1 className='text-6xl text-center text-slate-100'>
						Welcome to <span className='text-yellow-400'>MY</span> Travel
						Blog
					</h1>
					<div className='mt-20'>
						<Link
							href='/blog'
							className='text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition'
						>
							Read Blog
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
