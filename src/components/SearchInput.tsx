import { useState } from 'react';

type TSearchInputProps = {
    onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<TSearchInputProps> = ({ onSearchChange }) => {
    const [search, setSearch] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSearch(newValue);
        onSearchChange(newValue); // Emit the event to the parent
    };

    return (
        <form className='max-w-md mx-auto'>
            <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <i className="bi bi-search text-4 text-neutral/60"></i>
                </div>
                <input
                    type='search'
                    id='default-search'
                    className='block w-full p-4 ps-10 text-sm text-neutral border border-neutral/20 rounded-lg bg-surface-primary focus:border-neutral/60'
                    placeholder='Search People...'
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default SearchInput;