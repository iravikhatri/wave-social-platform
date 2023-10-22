import Notification from '@/components/Notification'


const notifications = [
	{
		id: 1,
		userDetials:{
			username:"iravikhatri",
			fullname: "Ravi khatri",
			image:"https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		},
		notificationDetails:{
			notificationType:"event_follow",
			eventName:"World Help Day",
			followDate:"18 December, 2020",
		}
	},
	{
		id: 2,
		userDetials:{
			username:"roykhatri",
			fullname: "Roy Khatri",
			image:"https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		},
		notificationDetails:{
			notificationType:"event_follow",
			eventName:"World Help Day",
			followDate:"15 December, 2020",
		}
	},
	{
		id: 1,
		userDetials:{
			username:"riverkhatri",
			fullname: "River khatri",
			image:"https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		},
		notificationDetails:{
			notificationType:"user_follow",
			eventName:"",
			followDate:"18 December, 2020",
		}
	},
]

const Notifications = () => {
	return (
		<div className="container _container mx-auto">
			<div className="lg:flex">
				<div className="w-full lg:w-8/12">
				<div className="home-feeds">
					{notifications.map(notification => <Notification
						key={notification.id}
						userDetials={notification.userDetials}
						notificationDetails={notification.notificationDetails}
					/>)}
				</div>
			</div>
				<div className="w-full lg:w-4/12 ">
					<div className="">
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Notifications;