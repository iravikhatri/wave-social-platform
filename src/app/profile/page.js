import React from 'react';

const Profile = () => {
	return (
		<div>
			<div className="w-full h-48">
				<img className="w-full h-48 object-cover" src="https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg" alt="" />
			</div>
			<div className="">
				<div className="h-auto w-full bg-red-100 p-5 ">
					<div className="h-auto w-full -mt-24">
						<div className="lg:grid grid-flow-col">
							<div className="h-auto w-auto">
								<img className="h-48 w-48 mx-auto lg:mx-none rounded-full object-cover" src="https://wallpaperaccess.com/full/301007.jpg" alt="" />
								<p>Fb Insta G+</p>
							</div>
							<div className="w-full h-auto lg:mt-24 lg:pl-5">
								<p className="text-3xl font-semibold">Hold My Hand</p>
								<p className="text-2xl mb-3">Let's become a helping hand of Needy</p>
								<div className="text-lg">
									<p className="mb-1">About:</p>
									<p>I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture. </p>
									<br/>
									<p>I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture. </p>
									<br/>
									<p>I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;