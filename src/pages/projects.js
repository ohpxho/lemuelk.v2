import Image from 'next/image';

const Projects = (props) => {

	return (
		<div id="projects" className="relative flex justify-center w-full h-max bg-blue-100 z-20">
			<div className="flex flex-col w-full xl:w-7xl py-32 px-6 max-w-7xl h-max text-center lg:text-start">
				<h1 className="text-3xl text-blue-500 font-bold">Featured Projects</h1>
				<h2 className="text-blue-500">What I&#39;m capable of.</h2>

				<ul className="flex flex-col gap-16 mt-16">
					{ props.data? 
						props.data.featured.map((d, i) => (
							<li key={i} className="flex flex-col lg:flex-row group lg:even:flex-row-reverse">
								<div className={`flex flex-col lg:flex-row items-center gap-6 w-full lg:w-3/5 justify-center ${i%2!=0? 'lg:flex-row-reverse' : ''}`}>
									<span className="text-blue-500">0{i+1}</span>
									<div className="w-full md:w-10/12 aspect-video border rounded-md border-2 bg-blue-500 border-blue-200">
										<Image alt="Image" width={500} height={500} src={d.image_url} className={`w-full h-full ${i%2!=0? '-skew-y-3' : 'skew-y-3'}  rounded-md group-hover:skew-y-0 transition-all`}/>
									</div>
								</div>
								
								<div className="flex flex-col w-full lg:w-2/5 mt-10 justify-center">
									<div className="flex gap-2 text-sm w-full justify-center lg:justify-start">
										{
											d.keyword.map((d, i) => (
												<span key={d} className="px-4 py-1 rounded-full border border-blue-500 text-blue-500 group-hover:text-white group-hover:bg-blue-500 transition-all">{d}</span>
											))
										}
									
									</div>

									<p className="mt-5 text-slate-500 md:px-20 lg:px-0 group-hover:text-slate-700">{d.desc}</p>
									
									<div className="mt-5 flex gap-4 text-sm justify-center lg:justify-start">
										<a href={d.github_link} target="_blank" className="flex gap-2 group-hover:text-slate-600 hover:!text-blue-500 text-slate-500 items-center hoverable">
											<span>Github</span> 
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
											  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
											</svg>
										</a>

										<a href={d.website_link} target="_blank" className="flex gap-2 group-hover:text-slate-600 items-center hover:!text-blue-500 text-slate-500 hoverable">
											<span>Website</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
											  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
											</svg>
										</a>
									</div>
								</div>
							</li>
						)) : ""
					}
				</ul>
				
				<h1 className="mt-10 font-bold text-blue-500 text-3xl">Other Noteworthy Projects</h1>
				<h2 className="text-blue-500">Got to do something more.</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 text-start">
					
					{ props.data?
						props.data.others.map((d,i) => (
							<div key={i} className="w-full bg-blue-500 from-blue-500 via-blue-500 to-blue-700 bg-gradient-to-b text-white p-6 rounded-md hover:-translate-y-3 transition-all">
								<div className="flex justify-between text-white items-center">
									<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
									<div className="flex gap-3 items-center">
										{d.github_link!=""? <a className="hoverable" target="_blank" href={d.github_link}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> : ""}
										{d.website_link!=""? <a className="hoverable" target="_blank" href={d.website_link}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> : ""}
									</div>
								</div>

								<div className="mt-5 flex flex-col gap-2">
									<h1 className="text-xl font-bold">{d.title}</h1>
									<p>{d.desc}</p>
								</div>

								<div className="flex gap-2 text-sm mt-5">
									{
										d.keyword.map((d, i) => (
											<span key={d} className="text-blue-300">{d}</span>
										))
									}
								</div>
							</div>
						)) : ""
					}
					
				</div>

				<div className="mt-10 w-full flex justify-center">
					<a target="_blank" href="https://github.com/ohpxho" className="flex gap-2 group items-center text-blue-500 hoverable">
						<span>view repository</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="transition-all group-hover:translate-x-1 group-hover:scale-x-105 w-6 h-6">
					  		<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
						</svg>
					</a>
				</div>
			</div>

			<ul className="background">
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			</ul>
		</div>
	);
};

export default Projects;