const imgPath = '/hero.jpg';

const LandingPage = () => {
		return (
			<>
				<div className="h-screen w-full">
					<img className="h-screen w-full object-cover" src={imgPath} alt={imgPath} />
				</div>
				<div className="container mx-auto">
					<div className="py-12 lg:mx-8">
						<div>
							<h1 className="text-2xl font-bold">Events Near by You</h1>
							<div className="grid grid-cols-3 gap-10 mt-2">
								<div className="">
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />	
								</div>
								<div>
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />	
								</div>
								<div>
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />
									<h3>Rave Party in Goa</h3>	
									<p></p>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<h1 className="text-2xl font-bold">Events All Over in India</h1>
							<div className="grid grid-cols-3 gap-10 mt-2">
								<div className="">
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />	
								</div>
								<div>
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />	
								</div>
								<div>
									<img className="h-64 w-full object-cover" src={imgPath} alt={imgPath} />	
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
}

export default LandingPage