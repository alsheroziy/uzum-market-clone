import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export default function SearchInput() {
	const [inputValue, setInputValue] = useState<string>('')
	return (
		<div className='border border-gray-300 flex max-w-[507px] w-full rounded-md'>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder='Mahsulotlarni va turkumlarni izlash'
				className='px-4 py-2 flex-grow outline-none'
			/>
			<div className='px-5 py-3 bg-gray-300 flex items-center justify-center'>
				<MagnifyingGlassIcon className='w-5 h-5' />
			</div>
		</div>
	)
}
