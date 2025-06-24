import { useQuery } from "@tanstack/react-query";
import type { TAlbum } from "./Album"
import Album from "./Album";
import Error from "./Error";


function AlbumList({userId}: {userId: number}) {
    const fetchAlbums = async (userId:number): Promise<TAlbum[]> => {
        const res = await fetch(
					`https://jsonplaceholder.typicode.com/users/${userId}/albums`
				);
                return res.json();
    }
    const {data: albums, isLoading, error } = useQuery<TAlbum[], Error> ({
        queryKey: ['albums', userId],
        queryFn: () =>fetchAlbums(userId),
        enabled: !!userId
    })
  return (
    <div className="mt-2 pt-2 border-gray-100 flex flex-col gap-2 justify-end space-x-3" >
         {
                error && <Error error={error} />
            }
            {isLoading ? <h2>loading ...</h2> :

albums?.map(album => (
    <Album

        key={album.id} album={album} />
))
}
    </div>
  )
}

export default AlbumList