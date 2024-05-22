import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState, useEffect, createContext } from 'react';
import { TContact } from './typings/app';
import ContactDetails from './components/ContactDetails';

type TContactContextType = {
	selectedContact: TContact | null;
	setSelectedContact: React.Dispatch<React.SetStateAction<TContact | null>>;
};

let CurrentContact = createContext<TContactContextType>({
	selectedContact: null,
	setSelectedContact: () => {},
});

function App() {
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

	const [contacts, setContacts] = useState<TContact[]>([]);
	const [selectedContact, setSelectedContact] = useState<TContact | null>(
		null
	);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setContacts(data));

            onResize();
            window.addEventListener('resize', onResize);
            return () => {
                window.removeEventListener('resize', onResize);
            };
	}, []);

    function onResize() {
        if (window.innerWidth < 768) {
            setShowSidebar(false);
        } else {
            setShowSidebar(true);
        }
    }

	return (
		<main id='app' className='w-screen h-screen'>
			<CurrentContact.Provider
				value={{ selectedContact, setSelectedContact }}
			>
				<Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
				<Sidebar show={showSidebar} contacts={contacts} />

				<div 
                    id='content'
                    className='flex-1 flex items-center justify-center w-full h-full overflow-auto'>
					{selectedContact ? (
                        <ContactDetails />
					) : (
						<div className='w-fit h-fit flex flex-col items-center justify-center'>
							<i className='bi bi-person-lines-fill text-6xl text-neutral/60'></i>
							<p className='text-2xl font-semibold text-neutral/60'>
								Select a contact to view details
							</p>
						</div>
					)}
				</div>
			</CurrentContact.Provider>
		</main>
	);
}

export { CurrentContact };
export default App;
