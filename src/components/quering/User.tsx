 export interface TUser {
    id: number;
    name:string;
    email: string;
    username: string;
    address: {};
    geo: {};
    phone: string;
    website: string;
    company: string;
}

function User( {user, openModal}: {user: TUser, openModal: (user: TUser) => void}) {
  return (
		<article key={user.id} className="">
			<div className="p-6">
				<div>
					<h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
						{user.name}
					</h2>
					<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
						{user.email}
					</p>
				</div>
				<div>
					<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
						{user.phone}
					</p>
					<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
						{user.website}
					</p>
				</div>
				<div className="mt-4 pt-4 border-t border-gray-100">
					<button
						onClick={() => openModal(user)}
						className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
					>
						Read more →
					</button>
				</div>
			</div>
		</article>
	);
}

export default User