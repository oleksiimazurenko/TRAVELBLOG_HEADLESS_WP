'use client'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().min(5).max(50),
	message: z.string(),
})

export default function ContactForm() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			message: ''
		},
	})

	const handleSubmit = async (values: z.infer<typeof formSchema>) => {

		console.log(values)

		form.reset()
	}

	return (
		<section className='pt-[120px] pb-[120px]'>
			<div className='container mx-auto lg:max-w-4xl'>
				<h1 className='text-4xl text-center text-slate-700 py-8'>Contact Us</h1>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className='space-y-8'
					>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage className='text-red-300'/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage className='text-red-300'/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' className='border rounded-[5px] hover:bg-slate-100'>Submit</Button>
					</form>
				</Form>
			</div>
		</section>
	)
}
