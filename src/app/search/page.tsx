import { articles } from '@/db/articles'
import { redirect } from 'next/navigation'

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

  const textToSearch = query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
  let pattern = new RegExp(`${textToSearch}`, "gi")

  const filteredArticles = articles.filter(article => {
    const title = article.title.toLowerCase().trim()
    const description = article.description.toLowerCase().trim()
    const filterKey = query.toLowerCase().trim()

    const result = title.includes(filterKey) || description.includes(filterKey)

    return result
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