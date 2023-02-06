const snapIntern = {
	title: 'Software Engineering Intern',
	location: 'Snap Inc.',
	date: 'Aug 2022 - Dec 2022',
	summary:
		'Had a lot of fun during my final internship yet my first in-person experience',
	contributions: [
		'Processed data from ops team and migrated over 40K tracks from 7.3K collaborations to 15K artists using Golang script.',
		'Pivoted the project to automate scanning over 3M artists and performing complex logic check to identify "collab artists".',
		'Introduced new columns on DynamoDB for "collab artists" and updated Spark job to export data to Big Query.',
		'Revamped API endpoints and configured React to enable roles and permissions for users on Snap Music Internal CMS.',
	],
	projects: [
		'Collab artists linking and songs consolidation',
		'User roles and permissions for Snap Music CMS',
	],
	skills: ['Working knowledge of Golang, DynamoDB, Grafana, gRPC, React.'],
	visible: true,
};

const doordashIntern = {
	title: 'Software Engineering Intern',
	location: 'DoorDash',
	date: 'May 2022 - Aug 2022',
	summary:
		'Took ownership of a project from start to finish on the backend side, from setting up the database and tables schema and persisting data from Kafka to CockroachDB to building search API with pagination support and logging key metrics.',
	contributions: [
		'Integrated CockroachDB into Kotlin microservice and built a data connection layer following DAO/repository pattern.',
		'Consumed photos message from Kafka Consumer and created new activity on Cadence workflow to persist data to CockroachDB.',
		'Wrote a Python script to backfill over 8 million photos and inference records from Snowflake to CockroachDB.',
		'Designed database schema and built a search API endpoint in gRPC with pagination that enables Data Science & Machine Learning engineers to query inference data based on product UPC or item name with optional confidence level.',
	],
	projects: [
		'Backend for a tool to support searching for product image inference data based on UPC or product name.',
	],
	skills: [
		'Working knowledge of Kotlin, CockroachDB, Kafka, Cadence, gRPC, Python.',
		'Ability to break down complicated business problem into smaller challenges and define milestones over the course of 3 months.',
		'Ability to navigate unfamiliar codebase with little help from mentor while picking up new programming language and several new tools on the go.',
		'Ability to tackle unfamiliar challenges and come up with creative solutions to resolve problems.',
	],
	visible: true,
};

const merakiIntern = {
	title: 'Software Engineering Intern',
	location: 'Cisco Meraki, Mobile Features team',
	date: 'Jan 2022 - Apr 2022',
	summary:
		'Took charge of multiple projects that improve the login experience and bring MG product support onto Meraki mobile app in addition to cross-team effort and volunteering to make cross team service better.',
	contributions: [
		'Completed 42 Jira tickets across 3 codebases with over 5100-line changes, most of which were deployed into production.',
		'Revamped the clusters flow that would enable thousands of users on the China cluster to use the mobile app once released.',
		'Integrated hCaptcha widget on the React Native app and verified user responses on the Rails server to protect the application from bots and allow users to unlock themselves without navigating to the Meraki Web Dashboard.',
		'Collaborated with cross-team engineers to bring Meraki Cellular Gateway (MG) product line support into the mobile app.',
		'Took initiative to branch out and volunteered to help security team with Meraki internal security tool; optimized the time complexity of secrets pre-processing; overhauled the UI and enabled developers to search and filter secrets by attributes; built a workflow in Python/Flask that enabled developers to generate Terraform code snippets for secret slots in AWS S3 bucket.',
		'Integrated Google MLKit in Swift to enable object detection for camera video stream as a PoC for Hack Week project.',
	],
	projects: [
		'Cluster flow revamp that would enable China users to utilize the mobile app once released.',
		'hCaptcha integration on mobile that unblock users from getting stuck after failed authentication attempts.',
		'Meraki Cellular Gateway mobile support on mobile app.',
		'Meraki internal tool complete UI refactoring.',
		'Terraform code generation for secret slot in AWS S3 bucket.',
		'Goolge MLKit integration that enables object video detection for camera video stream.',
	],
	skills: [
		'Working knowledge of Node.js, React Native, Testing Libary, Ruby on Rails, Python.',
		'Ability to quickly iterate and build new features on top of various existing code bases.',
		'Effective teamwork and communication skills.',
		'Ability to manage multiple projects with speedy execution.',
	],
	visible: true,
};

const adobeIntern = {
	title: 'Software Engineering Intern',
	location: 'Adobe Inc, Adobe Stock Contributor team',
	date: 'May 2021 - Aug 2021',
	summary:
		'Drove an initiative to refactor key components on Asset Upload Page to increase code readability and maintainability and site accessibility.',
	contributions: [
		'Took ownership of the Asset Info Tagger refactor initiative: put together a plan, presented and gathered feedback from the team, carried out the development and testing phase, and presented the work to the Adobe Stock organization.',
		'Built and integrated reusable UI components on top of React Spectrum to enforce Adobe brand consistency across the Adobe Stock Contributor website.',
		'Participated in SCRUM team activities, including daily standup, refinement, sprint planning, tech discussion and code review.',
		'Closed 25 Jira tickets and deployed over 4000-line changes into production that greatly improves site UI and accessibility.',
	],
	projects: [
		"Asset Info Tagger refactor initiative, including shifting from React class-based components to functional components, cleaning up key component's implementation, and adding/modifying over 80 tests to enhance code readability and maintainability.",
		'Accessibility tickets that focus on fixing contrast ratio, aria label and role, keyboard navigation and other minor bugs to improve the accessibility of the Contributor site.',
	],
	skills: [
		'Working knowledge of Node.js, React, Jest, Enzyme',
		'Ability to quickly learn and build on top of a huge existing code base',
		'Effective teamwork and communication skills.',
		"Attention to detail to help improve site's accessibility",
		'Punctuality, reliable attendance, and flexibility.',
		'Ability to work in a fast-paced and diverse team environment.',
	],
	visible: true,
};

const studentWebDev = {
	title: 'Student Web Developer',
	location: 'UW-Madison',
	date: 'October 2019 - December 2020',
	summary:
		'Built new web applications and maintained department website to support the students and faculty of the Department of Medical Physics.',
	contributions: [
		'Designed, implemented, and maintained source code.',
		'Modified, updated and improved the department website, content and application.',
		'Built new web pages and internal applications using PHP, MySQL and WordPress that serve around 250 students, faculties, and staffs of the Department of Medical Physics.',
	],
	projects: [
		'Contact form with verification using jQuery, dynamic data handling using AJAX, bots-prevention with Google Recaptcha API, dashboard view with intuitive interface for administrative staffs to easily manage the submissions.',
		'Internal nomination system with multiple files upload, verification using jQuery, dynamic data handling using AJAX for Department faculties to nominate pre-doctoral students for research support and dashboard view for administrative staffs.',
		'Learned about building Wordpress Plugins for the purpose of code sharing and reusability.',
	],
	skills: [
		'Working knowledge of PHP, MySQL, WordPress, HTML, CSS, JavaScript.',
		'Ability to pick up new language and new development stack quickly.',
		'Effective writing and communication skills.',
		'Attention to detail, well organized.',
		'Punctuality, reliable attendance, and flexibility.',
		'Excellent time management skills.',
	],
	visible: true,
};

const mathTutor = {
	title: 'Residence Hall Math Tutor',
	location: 'UW-Madison',
	date: 'September 2019 - May 2021',
	summary:
		'Facilitating weekly individual and group tutoring to university housing residents taking Mathematics courses through Math 222 (Calculus II).',
	contributions: [
		'Helping students make academic progress, while at the same time promoting independent learning, problem solving skills, and self-reliance.',
		'Working one-on-one or in small groups to help university housing residents gain confidence in their math skills.',
		'Collaborating with Residence Life staff to promote and provide feedback regarding the hall math tutoring program.',
		'Answering questions and/or explained general concepts to aid students in their overall comprehension of the course material, without giving away the answers.',
	],
	skills: [
		'Ability to provide individual or small group tutoring sessions.',
		'Ability to engage students in a discussion of the course content.',
		"Ability to identify and successfully adapt to different students' learning styles.",
		'Possess excellent communication skills, problem solving skills, and the ability to work with a diverse student body.',
		'Ability to work independently.',
	],
	visible: true,
};

const diningTeamMember = {
	title: 'Dining Team Member',
	location: 'UW-Madison',
	date: 'August 2019 - May 2019',
	summary:
		'Provided more than 250 hours of exceptional customer service with the goal of making guests feel welcome and satisfied.',
	contributions: [
		'Communicated effectively with other coworkers and supervisors.',
		'Worked with other students and professional staff to learn kitchen and food prep techniques.',
		'Provided a welcoming, respectful and efficient food service experience to customers.',
		'Operated cash register/POS system.',
		'Washed dishes and maintain a clean and inviting dining area.',
		'Served hot and cold menu items; grill; stock and inventory food and supplies.',
	],
	skills: [
		'Ability to work collaboratively and independently.',
		'Strong commitment and communication skills.',
		'Attention to detail and organization.',
		'Ability to creatively solve problems.',
	],
	visible: true,
};

export const extraExperiences = [studentWebDev, mathTutor, diningTeamMember];

export const mainExperiences = [doordashIntern, merakiIntern, adobeIntern];

export const upcomingExperience = snapIntern;
