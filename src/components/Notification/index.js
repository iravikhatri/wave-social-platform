import React from 'react';

const Notification = ({userDetials, notificationDetails})=> {
	let displayMessage

	if(notificationDetails.notificationType === "event_follow"){
		displayMessage = `interested in ${notificationDetails.eventName}`
	}
	else{
		displayMessage = `started following the you`
	}

	return (
		<div className="flex items-center p-3 border-t border-l border-r border-b border-gray-400">
			<div className="w-16 h-16">
				<img className="w-16 h-16 object-cover rounded-full" src={userDetials.image} alt={userDetials.username} />
			</div>
			<div className="pl-4 relative">
				<p className=""><span className="font-medium">{userDetials.fullname}</span> ({userDetials.username})</p>
				<p className="">{displayMessage} {notificationDetails.followDate}</p>
			</div>
		</div>
	)
}

export default Notification