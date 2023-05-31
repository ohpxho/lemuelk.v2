import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const Main = () => {
	const tagCloudRef = useRef(null);

	useEffect(() => {
		const container = tagCloudRef.current;
		const texts = [
		  'HTML', 'Javascript', 'React',
		  'CSS3', 'Next.js', 'Python',
		  'Git', 'Github', 'PHP',
		  'Responsive Design', 'Mysql',
		  'SQL', 'MongoDB', 'MERN'
		];
		const options = {radius:200};

		TagCloud(container, texts, options);

		return () => {
		  container.innerHTML = '';
		};
	}, []);

	return (
		<div className="flex justify-center w-full h-max">
			<div className="pt-28 pb-60 flex w-full xl:w-7xl items-center px-6 max-w-7xl h-max">
				<div className="w-full lg:w-1/2">
					<p>Hi there! I am</p>
					<div className="font-bold text-8xl from-slate-700 via-slate-700 to-slate-800 bg-gradient-to-b bg-clip-text text-transparent">Lemuel k So</div>
					<p className="mt-5">I build web application specialized in MERN stack. <br/> I have passion in learning and problem-solving</p>

					<div className="flex items-center gap-2 mt-5">
						<a className="py-3 px-5 border border-slate-500 hover:text-white hover:bg-slate-500 transition-all hoverable">Get In Touch</a>
						<a className="flex gap-2 items-center py-3 px-5 border border-slate-500 bg-slate-500 text-white hoverable">
							Resume
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
							</svg>
						</a>
					</div>
				</div>

				<div className="hidden lg:flex items-center justify-center w-1/2">
					<div className="flex items-center justify-center w-full h-full">
					 	<div ref={tagCloudRef}></div>
					 </div>
				</div>


			</div>
		</div>
	);
};

export default Main;