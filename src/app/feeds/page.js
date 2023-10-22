import PostCard from '../../components/PostCard';

const posts = [
	{
		id: 1,
		title: "World Help Day",
		description: "I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy11SVGb3tTkT5AJsPgHX17KdhA1ETL00V5ErblwCna3iWjWwb&usqp=CAU",
		username: "Hold My Hand",
		displayPicture: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/10gadgets-for-businessman_6_052915012252.jpg",
		slogan: "Let's become a helping hand of Needy",
		created_at: "2h ago",
		interestCount: 2583,
		isInterested: "false",
	},
	{
		id: 3,
		title: "World Help Day",
		description: "I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture.",
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		username: "Hold My Hand",
		displayPicture: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/10gadgets-for-businessman_6_052915012252.jpg",
		slogan: "Let's become a helping hand of Needy",
		created_at: "2h ago",
		interestCount: 2583,
		isInterested: "false",
	},
	{
		id: 2,
		title: "World Help Day",
		description: "I'm not supposed to notice the minutiae. Rather, these custom cards are crafted specifically to ensure that a party invite doesn't clash against vacation photos in your feed. Diverse content becomes a homogenous mixture.",
		image: "https://wallpaperaccess.com/full/301007.jpg",
		username: "Hold My Hand",
		displayPicture: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/10gadgets-for-businessman_6_052915012252.jpg",
		slogan: "Let's become a helping hand of Needy",
		created_at: "2h ago",
		interestCount: 2583,
		isInterested: "false",
	}
]

const Feeds = () => {
	return (
			<div className="container _container mx-auto">
				<div className="lg:flex">
					<div className="w-full lg:w-3/5">
						{posts.map(post => <PostCard key={post.id} post={post} />)}
					</div>
					<div className="w-full lg:w-2/5">
						<div className="">
						</div>
					</div>
				</div>
			</div>
	);
}

export default Feeds;