
const About = (props) => {
	return (
		<div className="flex justify-center bg-sky-100 w-full h-max pb-10">
			<div className="flex flex-col w-full lg:w-9/12 xl:w-7xl py-20 px-6 max-w-7xl h-max">
				<h1 className="mt-10 text-3xl font-bold text-blue-500">About Me</h1>
				<h2 className="text-blue-500">Who Am I?</h2>

				<div className="w-full flex flex-col lg:flex-row items-center mt-16"> 
					<div className="w-full lg:w-1/2 flex items-center justify-center">
						<div class="w-80 object-fit">
							<img src="/me.jpg" className="h-full w-full"/>
						</div>
					</div>
					
					<div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10">
						<div className="flex flex-col">
							<h1 className="text-2xl">👋 Hi, I am <span className="text-blue-500 font-bold">Lemuel k Costuna So</span></h1>
							<p className="mt-5">{props.data? props.data.first : 'I have successfully completed my Bachelor of Science in Information Technology (BSIT) degree at Quezon City University. Throughout my academic journey, I have honed my skills and deepened my knowledge in various areas of technology. I am confident in my abilities and enthusiastic about continuously learning and growing through hands-on experiences.'}</p>
							<p className="mt-5">{props.data? props.data.second : 'I am passionate about web development and have a strong interest in AI and Machine Learning. I have acquired a solid understanding of clean coding practices and good design principles. Additionally, I possess a strong knowledge of Algorithms and Data Structures, regularly challenging myself to solve problems on platforms such as LeetCode and CodeChef. Continuous learning is an integral part of my journey, and I find great comfort in constantly improving my problem-solving skills. I am determined to enhance my abilities in order to excel in my chosen fields.'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;