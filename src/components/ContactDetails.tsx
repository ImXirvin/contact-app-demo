import { useContext } from 'react';
import { CurrentContact } from '../App';
import { TContact } from '../typings/app';
import Avatar from './Avatar';

const ContactDetails: React.FC = () => {
	const contact = useContext(CurrentContact).selectedContact as TContact;

	return (
		<div className='w-full h-full flex flex-col items-center margin-auto p-8 gap-8 z-0'>
			<div className='flex flex-col items-center justify-center h-fit'>
				<Avatar size='lg' />
				<h1 className='text-3xl font-bold'>{contact.username}</h1>
				<p className='text-xl font-medium text-neutral/60'>
					{contact.name}
				</p>
			</div>

			<div className='flex flex-col items-start justify-start gap-4  w-fit h-full relative'>

                {/* Contact */}
				<div className='flex flex-row items-center justify-center gap-2 w-full h-fit'>
					<i className='bi bi-telephone text-2xl'></i>

					<div className='bg-neutral w-0.5 h-8' />

					<div className='flex flex-col items-start justify-center w-full'>
						<p className='text-lg font-semibold'>{contact.phone}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Phone
						</p>
						<p className='text-lg font-semibold'>{contact.email}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Email
						</p>
					</div>
				</div>

                {/* Address */}
				<div className='flex flex-row items-center justify-start gap-2 w-full h-fit'>
					<i className='bi bi-geo-alt text-2xl'></i>

					<div className='bg-neutral w-0.5 h-8' />

					<div className='flex flex-col items-start justify-center w-full'>
						<p className='text-lg font-semibold'>{contact.address.suite} {contact.address.street}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Street
						</p>
						<p className='text-lg font-semibold'>{contact.address.city}</p>
						<p className='text-sm font-normal text-neutral/60'>
							City
						</p>
					</div>
				</div>

                {/* Occupation */}
                <div className='flex flex-row items-center justify-start gap-2 w-full h-fit'>
					<i className='bi bi-briefcase text-2xl'></i>

					<div className='bg-neutral w-0.5 h-8' />

					<div className='flex flex-col items-start justify-center w-full'>
						<p className='text-lg font-semibold'>{contact.company.name}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Company
						</p>
						<p className='text-lg font-semibold'>{contact.company.catchPhrase}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Field
						</p>
					</div>
				</div>

                                {/* Website */}
                <div className='flex flex-row items-center justify-start gap-2 w-full h-fit'>
					<i className='bi bi-globe text-2xl'></i>

					<div className='bg-neutral w-0.5 h-8' />

					<div className='flex flex-col items-start justify-center w-full'>
						<p className='text-lg font-semibold'>{contact.website}</p>
						<p className='text-sm font-normal text-neutral/60'>
							Website
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
