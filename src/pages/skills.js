
const Skills = (props) => {

	return (
		<div id="skills" className="flex justify-center w-full h-max">
			<div className="flex flex-col w-full xl:w-7xl py-32 px-6 max-w-7xl h-max">
				<h1 className="text-3xl font-bold text-blue-500">Skills & Technologies</h1>
				<h2 className="text-blue-500">What I know.</h2>
				
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
					
					<div className="w-full">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 rounded-md text-white -translate-y-2 hover:-translate-y-3 transition-all">
								<h1 className="text-xl font-bold">Frontend</h1>
								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.frontend.map((d, i) => (
											<li>{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<ul className="flex w-full flex-col gap-4 mt-5">
								{ props.data?
									props.data.frontend.map((d, i) => (
										<li className="flex w-full gap-4 items-center ">
											<span>{d.title}</span>
											<div className="w-full lg:w-80 flex h-2 rounded-full bg-slate-300 items-center">
												<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
											</div>
										</li>
									)) : ""
								}
							</ul>
						</div>
					</div>

					<div className="w-full mt-10 md:mt-0">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 text-white rounded-md -translate-y-2 hover:-translate-y-3 transition-all">
								<h1 className="text-xl font-bold">Backend</h1>
								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.backend.map((d, i) => (
											<li>{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<ul className="flex w-full flex-col gap-4 mt-5">
								{ props.data?
									props.data.backend.map((d, i) => (
										<li className="flex w-full gap-4 items-center ">
											<span>{d.title}</span>
											<div className="w-full lg:w-80 flex h-2 rounded-full bg-slate-300 items-center">
												<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
											</div>
										</li>
									)) : ""
								}
							</ul>
						</div>
					</div>

					<div className="w-full mt-10 lg:mt-0">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 text-white rounded-md -translate-y-2 hover:-translate-y-3 transition-all">
								<h1 className="text-xl font-bold">Tools</h1>
								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.tools.map((d, i) => (
											<li>{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<ul className="flex w-full flex-col gap-4 mt-5">
								{ props.data?
									props.data.tools.map((d, i) => (
										<li className="flex w-full gap-4 items-center ">
											<span>{d.title}</span>
											<div className="w-full lg:w-80 flex h-2 rounded-full bg-slate-300 items-center">
												<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
											</div>
										</li>
									)) : ""
								}
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;