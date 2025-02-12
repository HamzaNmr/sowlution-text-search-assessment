import { redirect } from 'next/navigation'
import SearchBar from '@/components/SearchBar'

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

  return (
    <div className='p-5'>
      <div className="lg:w-[50%] w-full flex-col space-y-5">
        <h1 className="text-2xl font-bold">
          Sowlutions Search
        </h1>
        <SearchBar />
      </div>
      
    </div>
  )
}

export default SearchPage