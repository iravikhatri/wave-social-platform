import React from "react";

const Card = ({post}) => { 
 	return (
		<div className="mb-1 border-t border-l border-r border-b border-gray-400">
			<div className="flex sm:flex content-center px-4 pt-4 md:px-5 md:pt-5">
				<img className="w-16 h-16 rounded-full object-cover mr-4" src={post.displayPicture} alt="" />
				<div className="self-center">
					<p className="text-sm font-semibold">{post.username}</p>
					<p className="text-xs">{post.slogan}</p>
					<p className="text-xs">{post.created_at}</p>
				</div>
			</div>
			<div className="px-4 pt-4 mb-4  md:px-5 md:pt-5 md:mb-5">
				<h2 className="text-gray-900 font-bold text-xl mb-1">{post.title}</h2>
				<p className="">{post.description}</p>
			</div>

			<div className="w-full border-b border-gray-400 _image-height">
				<img className="w-full _image-height object-cover" src={post.image} alt="" />
			</div> 

			<div className="px-4 pt-4 mb-4 md:px-5 md:pt-5 md:mb-5">
				<div className="flex content-center">
					<p>{post.isInterested} </p>
					<p>{post.interestCount} Likes</p>
				</div>
			</div>
		</div>
	);
}

export default Card;