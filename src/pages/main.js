import React, { useEffect, useRef, useCallback } from 'react';
import TagCloud from 'TagCloud';

const Main = (props) => {
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

	useEffect(() => {
	    if (typeof window !== 'undefined') {
	      const ScrollReveal = require('scrollreveal').default;
	      
	      ScrollReveal().reveal('.anm_i', {
	      	duration: 1000,
	      	scale: 0.85
	      });

	      ScrollReveal().reveal('.anm_ii', {
	      	duration: 1000,
	      	delay: 375,
	      	scale: 0.85
	      });

	      ScrollReveal().reveal('.anm_iii', {
	      	duration: 1000,
	      	delay: 575,
	      	scale: 0.85
	      });

	      ScrollReveal().reveal('.anm_iv', {
	      	duration: 1000,
	      	delay: 875,
	      	scale: 0.85
	      });

	      ScrollReveal().reveal('.anm_v', {
	      	duration: 2000,
	      	delay: 1175,
	      	scale: 0.85
	      });

	    }
  	}, []);

	return (
		<div id="main" className="flex justify-center w-full h-max">
			<div className="pt-10 pb-44 flex w-full xl:w-7xl items-center px-6 max-w-7xl h-max">
				<div className="w-full">
					<p className="anm_i">Hi there! I am</p>

					<div className="relative anm_ii">
						<h1 className="font-bold text-5xl md:text-7xl xl:text-8xl text-blue-700">Lemuel k So</h1>
						<h1 className="absolute top-0 -translate-x-1 hover:-translate-x-1.5 lg:hover:-translate-x-2 transition-all font-bold text-5xl md:text-7xl xl:text-8xl text-blue-500">Lemuel k So</h1>
						
					</div>

					<p className="mt-5 anm_iii">{ props.data? props.data.desc : 'I am a web developer with a passion for continuous learning and problem-solving. I am committed to delivering high-quality web solutions by leveraging my problem-solving skills and staying up-to-date with the latest industry trends.' }</p>

					<div className="flex items-center gap-2 mt-5 anm_iv">
						<a href="#contact" className="py-3 px-5 border border-blue-500 hover:text-white hover:bg-blue-500 text-blue-500 transition-all hoverable">Get In Touch</a>
						<a href="/RESUME.pdf" target="_blank" className="flex gap-2 items-center py-3 px-5 border border-blue-500 bg-blue-500 text-white hoverable">
							Resume
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
							  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
							</svg>
						</a>
					</div>
				</div>

				<div className="hidden lg:flex items-center justify-center w-1/2">
					<div className="flex items-center justify-center w-full h-full anm_v">
					 	<div className="text-blue-700" ref={tagCloudRef}></div>
					 </div>
				</div>
			</div>
		</div>
	);
};

export default Main;