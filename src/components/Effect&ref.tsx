import { useEffect, useState } from 'react'

interface Data{
    id: string;
    title: string;
}

function Basic() {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1)

const fetchData = async () => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
        const result = await res.json()
        setData(result);
    }catch(error) {
  setError(`failed to fetch data `)
    }finally{
setLoading(false)
    }
}

    useEffect(() => {
fetchData()

    }, [])

  if (error) return <div className='text-red-300'>{error}</div>

  const handlePrev = () => {
    if (page > 1) {
        setPage (page - 1)
        fetchData();
    }}
    const handleNext = () => {
        setPage (page + 1)
            fetchData();
    
  }

    return (
			<div>
				<p> POSTS</p>
				<button
					className="bg-blue-400 text-white px-4 py-3"
					onClick={handlePrev}
				>
					prev
				</button>
				<button
					className="bg-red-400 text-white px-4 py-3"
					onClick={handleNext}
				>
					next
				</button>

				{JSON.stringify(data, null, 2)}
			</div>
		);
}

export default Basic