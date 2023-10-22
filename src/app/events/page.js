
import Certificate from '@/components/Certificate';


const certificates = [
	{
		id: 1,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "Hold My Hand Foundation",
		createdAt: "12 July, 2020",
		eventName: "World Help Day",
		eventDate: "18 December, 2020",
	},
	{
		id: 2,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "Tata Foundation",
		createdAt: "26 December, 2020",
		eventName: "One Day Deed",
		eventDate: "28 December, 2020",
	},
	{
		id: 3,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "World Health Organizations",
		createdAt: "05 August, 2020",
		eventName: "I Dont Know",
		eventDate: "08 August, 2020",
	},
	{
		id: 4,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "Hold My Hand Foundation",
		createdAt: "12 July, 2020",
		eventName: "World Help Day",
		eventDate: "18 December, 2020",
	},
	{
		id: 5,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "Tata Foundation",
		createdAt: "26 December, 2020",
		eventName: "One Day Deed",
		eventDate: "28 December, 2020",
	},
	{
		id: 6,
		image: "https://www.theladders.com/wp-content/uploads/friends-happy-190821.jpg",
		createdBy: "World Health Organizations",
		createdAt: "05 August, 2020",
		eventName: "I Dont Know",
		eventDate: "08 August, 2020",
	},
]


const Events = () => {
	return (
		<div className="container _container mx-auto">
			<div className="lg:flex">
				<div className="w-full lg:w-8/12">
					{certificates.map(certificate =>
						<Certificate key={certificate.id} certificate={certificate} />
					)}
				</div>
				<div className="w-full lg:w-4/12 ">
					<div className="">
					</div>
				</div>
			</div>
		</div>
	);
}

export default Events;