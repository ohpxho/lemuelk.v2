
const Skills = (props) => {

	return (
		<div id="skills" className="flex justify-center w-full h-max">
			<div className="flex flex-col w-full xl:w-7xl py-32 px-6 max-w-7xl h-max test animation-element">
				<div className="relative w-max group">
					<h1 className="text-3xl font-bold text-blue-700">Skills & Technologies</h1>
					<h1 className="absolute top-0 text-3xl -translate-y-0.5 group-hover:-translate-y-0.7 font-bold text-blue-500 transition-all">Skills & Technologies</h1>
				</div>
				<h2 className="text-blue-500">What I know.</h2>
				
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
					
					<div className="group w-full">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 rounded-md text-white -translate-y-2 group-hover:-translate-y-3 transition-all">
								<div className="relative w-full h-full">
									<h1 className="text-2xl font-bold text-blue-700">Frontend</h1>
									<h1 className="absolute -translate-y-0.5 top-0 text-2xl font-bold text-white">Frontend</h1>
								</div>

								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.frontend.map((d, i) => (
											<li key={d.title} className="text-blue-200 group-hover:text-white">{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<table className="border-collapse w-full">
								{ props.data?
									props.data.frontend.map((d, i) => (
										<tr key={d.title} className="flex w-full gap-4 items-center py-1">
											<td width="20%" className="group-hover:text-blue-500 lg:text-end">{d.title}</td>
											<td width="70%">
												<div className="w-full flex h-2 rounded-full bg-slate-300 items-center">
													<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
												</div>
											</td>
											<td width="10%" className="text-sm text-slate-500">{d.percent}</td>
										</tr>
									)) : ""
								}
							</table>
						</div>
					</div>

					<div className="group w-full mt-10 lg:mt-0">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 text-white rounded-md -translate-y-2 group-hover:-translate-y-3 transition-all">
								<div className="relative w-full h-full">
									<h1 className="text-2xl font-bold text-blue-700">Backend</h1>
									<h1 className="absolute -translate-y-0.5 top-0 text-2xl font-bold text-white">Backend</h1>
								</div>
								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.backend.map((d, i) => (
											<li key={d.title} className="text-blue-200 group-hover:text-white">{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<table className="border-collapse w-full">
								{ props.data?
									props.data.backend.map((d, i) => (
										<tr key={d.title} className="flex w-full gap-4 items-center py-1">
											<td width="20%" className="group-hover:text-blue-500 lg:text-end">{d.title}</td>
											<td width="70%">
												<div className="w-full flex h-2 rounded-full bg-slate-300 items-center">
													<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
												</div>
											</td>
											<td width="10%" className="text-sm text-slate-500">{d.percent}</td>
										</tr>
									)) : ""
								}
							</table>
						</div>
					</div>

					<div className="group w-full mt-10 xl:mt-0">
						<div className="w-full bg-blue-700 rounded-md">
							<div className="w-full h-full p-6 bg-blue-500 text-white rounded-md -translate-y-2 group-hover:-translate-y-3 transition-all">
								<div className="relative w-full h-full">
									<h1 className="text-2xl font-bold text-blue-700">Tools</h1>
									<h1 className="absolute -translate-y-0.5 top-0 text-2xl font-bold text-white">Tools</h1>
								</div>
								<ul className="mt-5 grid grid-cols-3 gap-4">
									{ props.data?
										props.data.tools.map((d, i) => (
											<li key={d.title} className="text-blue-200 group-hover:text-white">{d.title}</li>
										)) : ""
									}
								</ul>
							</div>
						</div>

						<div className=" mt-10 w-full rounded-md">
							<table className="border-collapse w-full">
								{ props.data?
									props.data.tools.map((d, i) => (
										<tr key={d.title} className="flex w-full gap-4 items-center py-1">
											<td width="20%" className="group-hover:text-blue-500 lg:text-end ">{d.title}</td>
											<td width="70%">
												<div className="w-full flex h-2 rounded-full bg-slate-300 items-center">
													<div className={`${d.proficiency} h-2 rounded-full bg-blue-500`}></div>
												</div>
											</td>
											<td width="10%" className="text-sm text-slate-500">{d.percent}</td>
										</tr>
									)) : ""
								}
							</table>
						</div>

					</div>
				</div>

				<div>
					<p className="mt-10 text-orange-500">This reflects my personal opinion, which is based on an assessment of my own knowledge and experience.</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;