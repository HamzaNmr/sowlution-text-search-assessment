import { articles } from '@/db/articles'
import { redirect } from 'next/navigation'

import { X } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import ListOfArticles from '@/components/ListOfArticles'

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const SearchPage = async ({ searchParams }: PageProps) => {
  const { query } = searchParams

  if (Array.isArray(query) || !query) {
    return redirect('/')
  }

  if (articles.length === 0) {
    return (
      <div className='text-center py-4 bg-white shadow-md rounded-b-md'>
        <X className='mx-auto h-8 w-8 text-gray-400' />
        <h3 className='mt-2 text-sm font-semibold text-gray-900'>No results</h3>
        <p className='mt-1 text-sm mx-auto max-w-prose text-gray-500'>
          Sorry, we couldn't find any matches for{' '}
          <span className='text-green-600 font-medium'>{query}</span>.
        </p>
      </div>
    )
  }

  const textToSearch = query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
  let pattern = new RegExp(`${textToSearch}`, "gi")

  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query)
  })

  return (
    <div className='p-5'>
      <div className="lg:w-[50%] w-full flex-col space-y-5">
        <h1 className="text-2xl font-bold">
          Sowlutions Search
        </h1>
        <SearchBar />
      </div>
      
      <ListOfArticles 
        articles={filteredArticles} 
        pattern={pattern} 
      />
    </div>
  )
}

export default SearchPage