// import { useState } from "react";

import { createContext, useContext, useState, type ReactNode } from "react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: 'admin' | 'user';
// }
// //userprofile
// const UserProfile =({user, onLogout, onUpdate}: {user:User; onLogout: () => void; onUpdate: (user:User) => void})=>{
// const [edit, setEdit] = useState(false);
// const [form, setForm] = useState(user);

// const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//   setForm({...form, [e.target.name]: e.target.value});
// };
// const handleSubmit = (edit: React.FormEvent) => {
//   edit.preventDefault();
//   onUpdate({...form, id: user.id});
//   setEdit(false);
// }

//   return (
// 		<div>
// 			<h3>usersProfile</h3>
// 			{edit ? (
// 				<form onSubmit={handleSubmit} className="m-4">
// 					<div>
// 						<label htmlFor="name"> name</label>
// 						<input
// 							name="name"
// 							value={form.name}
// 							onChange={handleChange}
// 							className="rounded p-2 w-full"
// 						/>
// 					</div>
// 					<div>
// 						<label> email</label>
// 						<input
// 							name="email"
// 							value={form.email}
// 							onChange={handleChange}
// 							className="rounded p-2 w-full"
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="name"> Role</label>
// 						<select
// 							name="role"
// 							value={form.role}
// 							onChange={handleChange}
// 							className="rounded p-2 w-full"
// 						>
// 							<option value="admin">admin</option>
// 							<option value="user">user</option>
// 						</select>
// 					</div>

// 					<div>
// 						<button type="submit">save</button>
// 						<button type="button" onClick={() => setEdit(false)}>
// 							cancel
// 						</button>
// 					</div>
// 				</form>
// 			) : (
// 				<div>
// 					<p>
// 						<span className="font-medium">Name:</span>
//             {user.name}
// 					</p>
// 					<p>
// 						<span className="font-medium">Email</span>
//             {user.email}
// 					</p>
// 					<p>
// 						<span className="font-medium">Role</span>
//             {user.role}
// 					</p>
// 				</div>
// 			)}
//       <div>
//         <button onClick={() =>setEdit ((s) => !s)} className="">{edit ? `editing....` : `edit`}</button>
//         <button onClick={onLogout} className="px-4 py-2 bg-red-400 text-shadow-amber-100 rounded ">logout</button>
//       </div>
// 		</div>
// 	);
// }

// //layout
// const Layout = ({
// 	user,
// 	onLogout,
// 	onUpdate,
// }: {
// 	user: User;
// 	onLogout: () => void;
// 	onUpdate: (user: User) => void;
// }) => {
// 	return <UserProfile user={user} onLogout={onLogout} onUpdate={onUpdate} />;
// };
// //main
// function Propdrilling() {
//   const [user, setUser] = useState<User | null>({
// 		id: 1,
// 		name: "Jane Doe",
// 		email: "jane@example.com",
// 		role: "admin",
// 	});

//   const handleLogout = () => setUser(null);
// 	const handleUpdate = (updated: User) => setUser(updated);
//   if (!user) {
//     return (
//         <div className="max-w-xl mx-auto bg-white p-8 rounded shadow text-center">
//             <h2 className="text-2xl font-bold mb-4">You are logged out.</h2>
//         </div>
//     );
// }
// return <Layout user={user} onLogout={handleLogout} onUpdate={handleUpdate} />;
// }
// export default Propdrilling

interface User {
	id: number;
	name: string;
	email: string;
	role: "admin" | "user";
}

//create context
const UserContext = createContext<{
  user:User | null;
  logout: () => void;
  update: (user: User) => void;
} | undefined>(undefined)

//the provider component
function UserProvider ({ children}: {children: ReactNode}) {
	const [user, setUser] = useState<User | null>({
		id: 1,
		name: "Jane Doe",
		email: "jane@example.com",
		role: "admin",
	});
	const logout = () => setUser(null);
	const update = (u: User) => setUser(u);

  return (
    <UserContext.Provider value={{user, logout, update}}>
      {children}
    </UserContext.Provider>
  );
}

//the nested components have ability to access the user direct
function UserProfile() {
  const ctx = useContext(UserContext);
	const [edit, setEdit] = useState(false);
  const [form, setForm] = useState <User | null>(ctx?.user ?? null);
  if (!ctx || !ctx.user || !form) return <div className="bg-white p-8 rounded shadow">you are logged out.</div>
  const {user, logout, update} = ctx;
  const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		update({ ...form, id: user.id });
		setEdit(false);
	};
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h4 className="text-lg font-semibold mb-4">User Profile</h4>
			{edit ? (
				<form onSubmit={handleSubmit} className="space-y-2 mb-4">
					<div>
						<label className="block text-sm font-medium">Name</label>
						<input
							name="name"
							value={form.name}
							onChange={handleChange}
							className="border rounded p-1 w-full"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Email</label>
						<input
							name="email"
							value={form.email}
							onChange={handleChange}
							className="border rounded p-1 w-full"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Role</label>
						<select
							name="role"
							value={form.role}
							onChange={handleChange}
							className="border rounded p-1 w-full"
						>
							<option value="admin">admin</option>
							<option value="user">user</option>
						</select>
					</div>
					<div className="flex gap-2 mt-2">
						<button
							type="submit"
							className="px-3 py-1 bg-blue-500 text-white rounded"
						>
							Save
						</button>
						<button
							type="button"
							onClick={() => setEdit(false)}
							className="px-3 py-1 bg-gray-300 rounded"
						>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<div className="space-y-2 mb-4">
					<p>
						<span className="font-medium">Name:</span> {user.name}
					</p>
					<p>
						<span className="font-medium">Email:</span> {user.email}
					</p>
					<p>
						<span className="font-medium">Role:</span> {user.role}
					</p>
				</div>
			)}
			<div className="flex gap-2">
				<button
					onClick={() => setEdit((v) => !v)}
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
				>
					{edit ? "Editing..." : "Edit"}
				</button>
				<button
					onClick={logout}
					className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
				>
					Logout
				</button>
			</div>
		</div>
	);
 }
 function Layout() {
		return (
			<div className="max-w-xl mx-auto">
				<h3 className="font-bold mb-2">Layout</h3>
				<UserProfile />
			</div>
		);
 }
 export default function Usecontext() {
		return (
			<UserProvider>
				<Layout />
			</UserProvider>
		);
 }