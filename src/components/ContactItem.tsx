import { useContext } from 'react';
import { TContact } from '../typings/app';
import { CurrentContact } from '../App';
import Avatar from './Avatar';

type TContactHeader = {
	contact: TContact;
};

const ContactItem: React.FC<TContactHeader> = ({ contact }) => {
    const {selectedContact, setSelectedContact} = useContext(CurrentContact)

	return (
		<button 
        onClick={()=> setSelectedContact(contact)}
        className={`flex items-center justify-center p-2 rounded-default active:scale-100 hover:brightness-125 hover:scale-105 bg-surface-primary gap-2 w-full ${selectedContact?.id === contact.id && 'brightness-125 scale-110'}`}>
            <Avatar />

			<div className='flex flex-col  items-start w-full justify-between'>
				<h3>{contact.username}</h3>
				<p className='opacity-75 text-sm'>{contact.name}</p>
			</div>
		</button>
	);
};

export default ContactItem;
