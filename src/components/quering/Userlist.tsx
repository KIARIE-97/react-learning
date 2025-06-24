import { useState } from "react";
import type { TUser } from "./User"
import { useSuspenseQuery } from "@tanstack/react-query";
import UserModal from "./UserModal";
import User from "./User";
import Error from "./Error";


const fetchUsers= async (): Promise<TUser[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json();
}


function Userlist() {
    const [seletedUser, setseletedUser] = useState<TUser | null>(null);
    const [isModalOpen, setisModalOpen] = useState(false)
  const { data, error } = useSuspenseQuery<TUser[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const handleOpenModal= (user: TUser) => {
    setseletedUser(user);
    setisModalOpen(true);
  }
  if (error) {
    return <Error error={error} />
  }
  return (
		<div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{data.map((user) => (
					<User key={user.id} user={user} openModal={handleOpenModal} />
				))}
				{isModalOpen && seletedUser && (
					<UserModal
						user={seletedUser}
						closeModal={() => {
							setisModalOpen(false);
							setseletedUser(null);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default Userlist