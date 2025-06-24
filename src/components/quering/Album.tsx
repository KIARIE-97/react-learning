export interface TAlbum {
    id: number;
    userId: number;
    title: string;
}

function Album({ album}: {
    album: TAlbum
}) {
  return (
		<div key={album.id} className="bg-gray-100 rounded-lg p-4">
		
			<p className="text-gray-700 text-sm leading-relaxed">{album.title}</p>
		</div>
	);
}

export default Album