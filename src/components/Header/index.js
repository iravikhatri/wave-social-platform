import Link from 'next/link'

import HomeIcon from '../../icons/HomeIcon'
import CertificateIcon from '../../icons/CertificateIcon'
import MessageIcon from '../../icons/MessageIcon'
import NotificationIcon from '../../icons/NotificationIcon'
import SettingsIcon from '../../icons/SettingsIcon'
import PostIcon from '../../icons/PostIcon'

const style = {
	width:"350px"
}

const Header = () => {
	return (
		<header className="w-full h-auto sticky top-0 lg:px-16 z-50 bg-white shadow-xs"> 
			<div className="container mx-auto flex">
				<div className="text-2xl py-3">
					<h1>Hoppie</h1>
				</div>
				<nav className="w-full md:w-auto h-auto grid grid-cols-5 md:mx-auto md:flex text-center text-sm font-light">
					<div className="my-3 mr-5">
						<input style={style} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="search an event..." />
					</div>
					<Link href="/" className=" px-4 pt-3 pb-2 block">
						<PostIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div className="hidden sm:block">Post</div>
					</Link>
				</nav>
				<nav className="w-full md:w-auto h-auto grid grid-cols-5 md:flex text-center text-sm font-light">
					<Link href="/" className=" px-4 pt-3 pb-2 block">
						<HomeIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div className="hidden sm:block">Home</div>
					</Link>
					<Link href="/events" className="px-4 pt-3 pb-2 block">
						<CertificateIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div className="hidden sm:block">Events</div>
					</Link>
					<Link href="/messages" className="px-4 pt-3 pb-2 block">
						<MessageIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div className="hidden sm:block">Messages</div>
					</Link>
					<Link href="/notifications" className="px-4 pt-3 pb-2 block">
						<NotificationIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div className="hidden sm:block">Notifications</div>
					</Link>
					<Link href="/settings" className="px-4 pt-3 pb-2 block">
						<SettingsIcon classes="inline-block" height="22px" width="22px" color="#ccc" />
						<div  className="hidden sm:block">Setting</div>
					</Link>
					<Link href="/settings" className="px-4 pt-3 pb-2 block">
						<img classes="m-auto"  height="22px" width="22px" scr="https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg" alt="" />
						<div  className="hidden sm:block">Profile</div>
					</Link>
				</nav>
			</div>
		</header>
	)
} 

export default Header