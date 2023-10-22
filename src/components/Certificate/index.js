
const Certificate = ({ certificate })=> {
	return (
		<div className="grid grid-cols-2 p-4 border-t border-l border-r border-b border-gray-400">
			<div className="w-full h-48">
				<img className="w-full h-48 object-cover" src={certificate.image} alt={certificate.eventName} />
			</div>
			<div className="pl-4 relative">
				<p className="mb-1"><span className="font-medium">Event Name:</span> {certificate.eventName}</p>
				<p className="mb-1"><span className="font-medium">Event Date:</span> {certificate.eventDate}</p>
				<p className="mb-1"><span className="font-medium">Organization Name:</span> {certificate.createdBy}</p>
				{/* <p className="mb-1"><span className="font-medium">Issued Date:</span> {certificate.createdAt}</p> */}
				<button className="flex absolute bottom-0 right-0 px-2 py-1 bg-indigo-500 text-white text-xs">
					Download
				</button>
			</div>
		</div>
	)
}

export default Certificate