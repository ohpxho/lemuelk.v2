
const About = (props) => {
	return (
		<div id="about" className="flex relative justify-center bg-blue-100 w-full h-max z-20">
			<div className="flex flex-col w-full xl:w-7xl py-32 px-6 max-w-7xl h-max">
				<h1 className="text-3xl font-bold text-blue-500 text-center">About Me</h1>
				<h2 className="text-blue-500 text-center">Who Am I?</h2>

				<div className="w-full flex flex-col lg:flex-row items-center mt-16"> 
					<div className="w-full lg:w-1/2 flex items-center justify-center">
						<div class="w-80 object-fit bg-blue-500 translate-y-3 -translate-x-3">
							<img src={props.data? props.data.image_url : ""} className="h-full w-full -translate-y-5 translate-x-5"/>
						</div>
					</div>
					
					<div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10">
						<div className="flex flex-col text-center lg:text-start">
							<h1 className="text-2xl">👋 Hi, I am <span className="text-blue-500 font-bold">Lemuel k Costuna So</span></h1>
							<p className="mt-5 md:px-20 lg:px-0">{props.data? props.data.first : 'I have successfully completed my Bachelor of Science in Information Technology (BSIT) degree at Quezon City University. Throughout my academic journey, I have honed my skills and deepened my knowledge in various areas of technology. I am confident in my abilities and enthusiastic about continuously learning and growing through hands-on experiences.'}</p>
							<p className="mt-5 md:px-20 lg:px-0">{props.data? props.data.second : 'I am passionate about web development and have a strong interest in AI and Machine Learning. I have acquired a solid understanding of clean coding practices and good design principles. Additionally, I possess a strong knowledge of Algorithms and Data Structures, regularly challenging myself to solve problems on platforms such as LeetCode and CodeChef. Continuous learning is an integral part of my journey, and I find great comfort in constantly improving my problem-solving skills. I am determined to enhance my abilities in order to excel in my chosen fields.'}</p>
						</div>
					</div>
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

export default About;