export const Types = {
	ALL: 'All',
	FRONT_END: 'Front end',
	BACK_END: 'Back end',
	DATABASE: 'Database',
	OTHERS: 'Others'
} as const

export type Types = (typeof Types)[keyof typeof Types]

export interface ListIconModel {
	name: string
	type: Types[]
	default: string
	grey?: string
	active?: boolean
}
export const ListIcon: ListIconModel[] = [
	{
		active: true,
		name: 'Html',
		type: [Types.FRONT_END],
		default: './assets/svgs/html/default.svg',
		grey: './assets/svgs/html/grey.svg'
	},
	{
		active: true,
		name: 'Css/ Css Module',
		type: [Types.FRONT_END],
		default: './assets/svgs/css/default.svg',
		grey: './assets/svgs/css/grey.svg'
	},
	{
		active: true,
		name: 'Javascript',
		type: [Types.FRONT_END, Types.BACK_END],
		default: './assets/svgs/javascript/default.svg',
		grey: './assets/svgs/javascript/grey.svg'
	},
	{
		active: true,
		name: 'Typescript',
		type: [Types.FRONT_END, Types.BACK_END],
		default: './assets/svgs/typescript/default.svg',
		grey: './assets/svgs/typescript/grey.svg'
	},
	{
		active: true,
		name: 'C#',
		type: [Types.BACK_END],
		default: './assets/svgs/c_sharp/default.svg',
		grey: './assets/svgs/c_sharp/grey.svg'
	},
	{
		active: true,
		name: 'Java',
		default: './assets/svgs/java/default.svg',
		grey: './assets/svgs/java/grey.svg',
		type: [Types.BACK_END]
	},
	{
		active: true,
		name: 'Node.js',
		type: [Types.BACK_END],
		default: './assets/svgs/node_js/default.svg',
		grey: './assets/svgs/node_js/grey.svg'
	},
	{
		active: true,
		name: 'Nest.js',
		type: [Types.BACK_END],
		default: './assets/svgs/nest_js/default.svg',
		grey: './assets/svgs/nest_js/grey.svg'
	},
	{
		active: true,
		name: 'Express.js',
		type: [Types.BACK_END],
		default: './assets/svgs/express_js/default.svg'
	},
	{
		active: true,
		name: 'Dot Net',
		type: [Types.BACK_END],
		default: './assets/svgs/dot_net/default.svg',
		grey: './assets/svgs/dot_net/grey.svg'
	},
	{
		active: false,
		name: 'Spring',
		type: [Types.BACK_END],
		default: './assets/svgs/spring/default.svg'
	},

	{
		active: true,
		name: 'React/React Native',
		type: [Types.FRONT_END],
		default: './assets/svgs/react_js/default.svg',
		grey: './assets/svgs/react_js/grey.svg'
	},
	{
		active: true,
		name: 'Angular/ Angularjs',
		type: [Types.FRONT_END],
		default: './assets/svgs/angular_js/default.svg',
		grey: './assets/svgs/angular_js/grey.svg'
	},
	{
		active: true,
		name: 'Vue',
		type: [Types.FRONT_END],
		default: './assets/svgs/vue/default.svg',
		grey: './assets/svgs/vue/grey.svg'
	},
	{
		active: true,
		name: 'Next',
		type: [Types.FRONT_END],
		default: './assets/svgs/next_js/default.svg'
	},
	{
		active: false,
		name: 'Nuxt',
		type: [Types.FRONT_END],
		default: './assets/svgs/nuxt_js/default.svg'
	},
	{
		active: true,
		name: 'Jquery',
		type: [Types.FRONT_END],
		default: './assets/svgs/jquery/default.svg'
	},
	{
		active: true,
		name: 'React Query',
		type: [Types.FRONT_END],
		default: './assets/svgs/react_query/default.svg',
		grey: './assets/svgs/react_query/grey.svg'
	},
	{
		active: true,
		name: 'Redux Toolkit',
		type: [Types.FRONT_END],
		default: './assets/svgs/redux_toolkit/default.svg'
	},
	{
		active: true,
		name: 'Ngrx',
		type: [Types.FRONT_END],
		default: './assets/svgs/ngrx/default.svg'
	},
	{
		active: true,
		name: 'Vuex',
		type: [Types.FRONT_END],
		default: './assets/svgs/vuex/default.svg'
	},
	{
		active: true,
		name: 'Rxjs',
		type: [Types.FRONT_END],
		default: './assets/svgs/rxjs/default.svg'
	},
	{
		active: true,
		name: 'Pug',
		type: [Types.FRONT_END],
		default: './assets/svgs/pug/default.svg'
	},
	{
		active: true,
		name: 'Tailwind Css',
		type: [Types.FRONT_END],
		default: './assets/svgs/tailwind_css/default.svg',
		grey: './assets/svgs/tailwind_css/grey.svg'
	},
	{
		active: true,
		name: 'Sass/Scss',
		type: [Types.FRONT_END],
		default: './assets/svgs/sass/default.svg',
		grey: './assets/svgs/sass/grey.svg'
	},
	{
		active: true,
		name: 'Styled Components',
		type: [Types.FRONT_END],
		default: './assets/svgs/styled_component/default.svg'
	},
	{
		active: true,
		name: 'Emotion',
		type: [Types.FRONT_END],
		default: './assets/svgs/emotion/default.svg'
	},
	{
		active: true,
		name: 'Ant Design',
		type: [Types.FRONT_END],
		default: './assets/svgs/ant_design/default.svg'
	},
	{
		active: true,
		name: 'Material UI',
		type: [Types.FRONT_END],
		default: './assets/svgs/material_ui/default.svg'
	},
	{
		active: true,
		name: 'Primeng',
		type: [Types.FRONT_END],
		default: './assets/svgs/primeng/default.svg'
	},
	{
		active: true,
		name: 'DevExtreme',
		type: [Types.FRONT_END],
		default: './assets/svgs/dev_extreme/default.svg'
	},
	{
		active: true,
		name: 'Bootstrap',
		type: [Types.FRONT_END],
		default: './assets/svgs/bootstrap/default.svg',
		grey: './assets/svgs/bootstrap/grey.svg'
	},
	{
		active: true,
		name: 'Sql Server',
		type: [Types.DATABASE],
		default: './assets/svgs/sql_server/default.svg'
	},
	{
		active: true,
		name: 'My Sql',
		type: [Types.DATABASE],
		default: './assets/svgs/my_sql/default.svg',
		grey: './assets/svgs/my_sql/grey.svg'
	},
	{
		active: true,
		name: 'PostgreSql',
		type: [Types.DATABASE],
		default: './assets/svgs/postgre_sql/default.svg'
	},
	{
		active: true,
		name: 'Mongo DB',
		type: [Types.DATABASE],
		default: './assets/svgs/mongo_db/default.svg',
		grey: './assets/svgs/mongo_db/grey.svg'
	},
	{
		active: true,
		name: 'redis',
		type: [Types.DATABASE],
		default: './assets/svgs/redis/default.svg'
	},
	{
		active: true,
		name: 'Firebase',
		type: [Types.DATABASE],
		default: './assets/svgs/firebase/default.svg'
	},
	{
		active: true,
		name: 'Cloudinary',
		type: [Types.BACK_END],
		default: './assets/svgs/cloudinary/default.svg',
		grey: './assets/svgs/cloudinary/grey.svg'
	},
	{
		active: true,
		name: 'Restfull Api',
		type: [Types.BACK_END],
		default: './assets/svgs/restfull_api/default.svg'
	},
	{
		active: true,
		name: 'Socket Io',
		type: [Types.BACK_END],
		default: './assets/svgs/socket_io/default.svg'
	},
	{
		active: true,
		name: 'Graphql',
		type: [Types.BACK_END],
		default: './assets/svgs/graphql/default.svg',
		grey: './assets/svgs/graphql/grey.svg'
	},
	{
		active: true,
		name: 'Apollo Client',
		type: [Types.FRONT_END],
		default: './assets/svgs/apollo_client/default.svg'
	},
	{
		active: true,
		name: 'Type Orm',
		type: [Types.BACK_END],
		default: './assets/svgs/type_orm/default.svg'
	},
	{
		active: true,
		name: 'Sequelize',
		type: [Types.BACK_END],
		default: './assets/svgs/sequelize/default.svg'
	},
	{
		active: false,
		name: 'Elastic',
		type: [Types.BACK_END],
		default: './assets/svgs/elastic/default.svg'
	},
	{
		active: false,
		name: 'Logstash',
		type: [Types.BACK_END],
		default: './assets/svgs/logstash/default.svg'
	},
	{
		active: false,
		name: 'Kibana',
		type: [Types.BACK_END],
		default: './assets/svgs/kibana/default.svg'
	},
	{
		active: true,
		name: 'Docker',
		default: './assets/svgs/docker/default.svg',
		grey: './assets/svgs/docker/grey.svg',
		type: [Types.OTHERS, Types.BACK_END]
	},
	{
		active: true,
		name: 'Puppeteer',
		type: [Types.OTHERS],
		default: './assets/svgs/puppeteer/default.svg'
	},
	{
		active: true,
		name: 'Git',
		type: [Types.OTHERS],
		default: './assets/svgs/git/default.svg'
	},
	{
		active: false,
		name: 'Github',
		type: [Types.OTHERS],
		default: './assets/svgs/github/default.svg'
	},
	{
		active: false,
		name: 'Gitlab',
		type: [Types.OTHERS],
		default: './assets/svgs/gitlab/default.svg'
	},
	{
		active: false,
		name: 'Bitbucket',
		type: [Types.OTHERS],
		default: './assets/svgs/bitbucket/default.svg'
	},
	{
		active: false,
		name: 'Npm',
		type: [Types.OTHERS],
		default: './assets/svgs/npm/default.svg'
	},
	{
		active: false,
		name: 'Yarn',
		type: [Types.OTHERS],
		default: './assets/svgs/yarn/default.svg'
	},
	{
		active: false,
		name: 'Pmpm',
		type: [Types.OTHERS],
		default: './assets/svgs/pmpm/default.svg'
	},
	{
		active: false,
		name: 'Bun',
		type: [Types.OTHERS],
		default: './assets/svgs/bun/default.svg'
	},
	{
		active: false,
		name: 'Maven',
		type: [Types.OTHERS],
		default: './assets/svgs/maven/default.svg'
	},
	{
		active: false,
		name: 'Gradle',
		type: [Types.OTHERS],
		default: './assets/svgs/gradle/default.svg'
	},

	{
		active: false,
		name: 'Webpack',
		type: [Types.OTHERS],
		default: './assets/svgs/webpack/default.svg'
	},
	{
		active: false,
		name: 'Vite',
		type: [Types.OTHERS],
		default: './assets/svgs/vite/default.svg'
	},
	{
		active: false,
		name: 'Turbo',
		type: [Types.OTHERS],
		default: './assets/svgs/turbo/default.svg'
	},
	{
		active: false,
		name: 'Nx',
		type: [Types.OTHERS],
		default: './assets/svgs/nx/default.svg'
	},
	{
		active: true,
		name: 'Story book',
		type: [Types.FRONT_END],
		default: './assets/svgs/story_book/default.svg',
		grey: './assets/svgs/story_book/grey.svg'
	},
	{
		active: true,
		name: 'Photoshop',
		type: [Types.OTHERS],
		default: './assets/svgs/photoshop/default.svg',
		grey: './assets/svgs/photoshop/grey.svg'
	},
	{
		active: true,
		name: 'Figma',
		type: [Types.OTHERS],
		default: './assets/svgs/figma/default.svg',
		grey: './assets/svgs/figma/grey.svg'
	},
	{
		active: false,
		name: 'Linux',
		type: [Types.OTHERS],
		default: './assets/svgs/linux/default.svg'
	},
	{
		active: false,
		name: 'Ubutu',
		type: [Types.OTHERS],
		default: './assets/svgs/ubutu/default.svg'
	}
]
