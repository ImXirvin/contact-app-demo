import React from 'react';

type THeaderProps = {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<THeaderProps> = ({showSidebar, setShowSidebar}) => {

    function toggleSidebar() {
        if (window.innerWidth > 768) {
            return;
        }
        setShowSidebar(!showSidebar);
    }
	return (
		<header
			id='header'
			className='p-4 backdrop-blur-sm bg-black/5 border-b-[1px] border-b-neutral/20 w-full fixed top-0'
		>
			<div className='flex items-center justify-start gap-2 w-fit'>
				<button 
                onClick={toggleSidebar}
                className={`flex items-center justify-center w-12 h-12 ${showSidebar && 'bg-primary/50'} md:bg-primary/50 rounded-full aspect-square hover:scale-105 hover:brightness-105 active:scale-100`}>
					<i className='bi bi-person-lines-fill text-3xl ' />
				</button>

				<h1 className='text-2xl hover:animate-pulse'>Contacts</h1>
			</div>
		</header>
	);
};

export default Header;
