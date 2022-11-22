import Link from 'next/link';
import { BellIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScorll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            <header className={`${isScorll && 'bg-black'}`}>
                <div className="flex items-center space-x-2 md:space-x-6">
                    <h2 className='text-2xl font-bold text-white'>NONTONIN</h2>
                    <ul className="hidden space-x-4 md:flex">
                        <li className="header-item-link">Home</li>
                        <li className="header-item-link">TV Shows</li>
                        <li className="header-item-link">Movies</li>
                        <li className="header-item-link">New & Popular</li>
                        <li className="header-item-link">My List</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-4'>
                    <MagnifyingGlassIcon className='hidden sm:inline w-6 h-6' />
                    <p className='hidden lg:inline text-sm'>Kids</p>
                    <BellIcon className='h-6 w-6' />
                    <UserCircleIcon className='h-6 w-6' />
                </div>
            </header>
        </div>
    );
}

export default Header;