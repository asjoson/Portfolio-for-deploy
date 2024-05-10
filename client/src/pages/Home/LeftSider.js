import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:mb-5">
                    <a href='https://www.facebook.com/aj.joson.52'>
                        <i class="ri-facebook-box-fill text-gray-300 text-xl"></i>
                    </a>
                    <a href='asjosonjr@gmail.com'>
                        <i class="ri-mail-fill text-gray-300 text-xl"></i>
                    </a>
                    <a href='https://t.me/+l9cjzI7kbYsxMWQ9'>
                        <i class="ri-telegram-fill text-gray-300 text-xl"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/arnel-joson-9383b8251/?trk=opento_sprofile_details'>
                        <i class="ri-linkedin-box-fill text-gray-300 text-xl"></i>
                    </a>
                    <a href='https://github.com/asjoson'>
                        <i class="ri-github-fill text-gray-300 text-xl"></i>
                    </a>
                    <a href='https://discord.com/invite/48W54p2p'>
                        <i class="ri-discord-fill text-gray-300 text-xl"></i>
                    </a>
                </div>
                <div className='w-[1px] h-32 bg-[#42cbf17d] m-2 sm:hidden'></div>
            </div>
        </div>
    )
}

export default LeftSider