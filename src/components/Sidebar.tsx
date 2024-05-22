import { useEffect, useState } from 'react';
import { TContact } from '../typings/app';
import ContactItem from './ContactItem';
import SearchInput from './SearchInput';

type TSidebarProps = {
    show: boolean;
	contacts: TContact[];
};

const Sidebar: React.FC<TSidebarProps> = ({ contacts, show }) => {
	const [filteredContacts, setFilteredContacts] =
		useState<TContact[]>(contacts);

	const handleSearchChange = (newValue: string) => {
		if (newValue) {
			const filtered = contacts.filter((contact) => {
				return (
					contact.name
						.toLowerCase()
						.includes(newValue.toLowerCase()) ||
					contact.username
						.toLowerCase()
						.includes(newValue.toLowerCase()) ||
					contact.email
						.toLowerCase()
						.includes(newValue.toLowerCase()) ||
					contact.phone.toLowerCase().includes(newValue.toLowerCase())
				);
			});
			setFilteredContacts(filtered);
		} else {
			setFilteredContacts(contacts);
		}
	};

	useEffect(() => {
		setFilteredContacts(contacts);
	}, [contacts]);

	return (
		<aside
			id='sidebar'
			className={`h-full space-y-2 z-10 font-medium px-3 py-4 overflow-y-auto transition-transform  backdrop-blur-sm bg-black/5 border-r-[1px] border-r-neutral/20 left-0 md:w-auto w-[16rem] ${!show ? '-translate-x-full' : 'translate-x-0' } `}
			aria-label='Sidebar'
		>
			<SearchInput onSearchChange={handleSearchChange} />

			{filteredContacts.length > 0 ? (
				filteredContacts.map((value, _) => {
					return <ContactItem contact={value} key={value.id} />;
				})
			) : (
				<div className='w-full h-fit flex flex-col items-center justify-center animate-pulse'>
					<i className='bi bi-search text-3xl '></i>
					<p>No Result</p>
				</div>
			)}
		</aside>
	);
};

export default Sidebar;
