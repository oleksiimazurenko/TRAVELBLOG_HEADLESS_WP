'use client'

import Link from "next/link";
import cn from "classnames"
import { usePathname } from 'next/navigation'

export default function Footer({className}) {

	const pathname = usePathname();

    return (
        
			<footer id="site-footer" className={cn(`${className} w-full text-slate-100`, {
				['bg-slate-500/70']: pathname !== '/',
			})}>

					<div className="flex justify-between items-center container mx-auto">
							<div className="py-3">&copy; 2022-2023 CoolNomad</div>
							<ul className="flex [&>li>a]:px-2">
									<li>
											<Link href="/about">About</Link> 
									</li>
									<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
									</li>
									<li>
											<Link href="/sample-page">Sample Page</Link>
									</li>
							</ul>
					</div>
					
			</footer>
        
    )
}