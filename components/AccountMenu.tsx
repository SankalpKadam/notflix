import React from 'react';
import { signOut, useSession } from 'next-auth/react';
interface AccountMenuProps {
    visible?: boolean
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const {data: session} = useSession();

    if (!visible) {
        return null;
    }
    return (
        <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-gray-800 flex'>
            <div className='flex flex-col gap-3'>
                <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                    <img src="/images/default-blue.png" alt="" className='w-8 rounded-md' />
                    <p className='text-white text-sm group-hover/item:underline'>
                        {session?.user?.name}
                    </p>
                </div>
                <hr className='bg-gray-600 border-0 h-px my-4' />
                <div className='px-3 text-center text-white hover:underline' onClick={()=>signOut()}>
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;
