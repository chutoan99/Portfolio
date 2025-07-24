// export enum Types {
// 	ALL = 'All',
// 	FRONT_END = 'Front End',
// 	BACK_END = 'Back End',
// 	DATABASE = 'Database',
// 	OTHERS = 'Others'
// }


export const Types = {
  ALL: 'All',
  FRONT_END: 'Front end',
  BACK_END: 'Back end',
  DATABASE: 'Database',
  OTHERS: 'Others',
} as const

export type Types = typeof Types[keyof typeof Types]

export interface ListIconModel {
	name: string
	type: Types[]
	path: string
	active?: boolean
}
export const ListIcon: ListIconModel[] = [
	{
		active: true,
		name: 'Html',
		type: [Types.FRONT_END],
		path: './assets/svgs/html/defalut.svg'
	},
	{
		active: true,
		name: 'Css/ Css Module',
		type: [Types.FRONT_END],
		path: './assets/svgs/css/defalut.svg'
	},
	{
		active: true,
		name: 'Javascript',
		type: [Types.FRONT_END, Types.BACK_END],
		path: './assets/svgs/javascript/defalut.svg'
	},
	{
		active: true,
		name: 'Typescript',
		type: [Types.FRONT_END, Types.BACK_END],
		path: './assets/svgs/typescript/defalut.svg'
	},
	{
		active: true,
		name: 'C#',
		type: [Types.BACK_END],
		path: './assets/svgs/c_sharp/defalut.svg'
	},
	{
		active: true,
		name: 'Java',
		path: './assets/svgs/java/defalut.svg',
		type: [Types.BACK_END]
	},
	{
		active: true,
		name: 'Node.js',
		type: [Types.BACK_END],
		path: './assets/svgs/node_js/defalut.svg'
	},
	{
		active: true,
		name: 'Nest.js',
		type: [Types.BACK_END],
		path: './assets/svgs/nest_js/defalut.svg'
	},
	{
		active: true,
		name: 'Express.js',
		type: [Types.BACK_END],
		path: './assets/svgs/express_js/defalut.svg'
	},
	{
		active: true,
		name: 'Dot Net',
		type: [Types.BACK_END],
		path: './assets/svgs/dot_net/defalut.svg'
	},
	{
		active: false,
		name: 'Spring',
		type: [Types.BACK_END],
		path: './assets/svgs/spring/defalut.svg'
	},

	{
		active: true,
		name: 'React/React Native',
		type: [Types.FRONT_END],
		path: './assets/svgs/react_js/defalut.svg'
	},
	{
		active: true,
		name: 'Angular/ Angularjs',
		type: [Types.FRONT_END],
		path: './assets/svgs/angular_js/defalut.svg'
	},
	{
		active: true,
		name: 'Vue',
		type: [Types.FRONT_END],
		path: './assets/svgs/vue/defalut.svg'
	},
	{
		active: true,
		name: 'Next',
		type: [Types.FRONT_END],
		path: './assets/svgs/next_js/defalut.svg'
	},
	{
		active: false,
		name: 'Nuxt',
		type: [Types.FRONT_END],
		path: './assets/svgs/nuxt_js/defalut.svg'
	},
	{
		active: true,
		name: 'Jquery',
		type: [Types.FRONT_END],
		path: './assets/svgs/jquery/defalut.svg'
	},
	{
		active: true,
		name: 'React Query',
		type: [Types.FRONT_END],
		path: './assets/svgs/react_query/defalut.svg'
	},
	{
		active: true,
		name: 'Redux Toolkit',
		type: [Types.FRONT_END],
		path: './assets/svgs/redux_toolkit/defalut.svg'
	},
	{
		active: true,
		name: 'Ngrx',
		type: [Types.FRONT_END],
		path: './assets/svgs/ngrx/defalut.svg'
	},
	{
		active: true,
		name: 'Vuex',
		type: [Types.FRONT_END],
		path: './assets/svgs/vuex/defalut.svg'
	},
	{
		active: true,
		name: 'Rxjs',
		type: [Types.FRONT_END],
		path: './assets/svgs/rxjs/defalut.svg'
	},
	{
		active: true,
		name: 'Pug',
		type: [Types.FRONT_END],
		path: './assets/svgs/pug/defalut.svg'
	},
	{
		active: true,
		name: 'Tailwind Css',
		type: [Types.FRONT_END],
		path: './assets/svgs/tailwind_css/defalut.svg'
	},
	{
		active: true,
		name: 'Sass/Scss',
		type: [Types.FRONT_END],
		path: './assets/svgs/sass/defalut.svg'
	},
	{
		active: true,
		name: 'Styled Components',
		type: [Types.FRONT_END],
		path: './assets/svgs/styled_component/defalut.svg'
	},
	{
		active: true,
		name: 'Emotion',
		type: [Types.FRONT_END],
		path: './assets/svgs/emotion/defalut.svg'
	},
	{
		active: true,
		name: 'Ant Design',
		type: [Types.FRONT_END],
		path: './assets/svgs/ant_design/defalut.svg'
	},
	{
		active: true,
		name: 'Material UI',
		type: [Types.FRONT_END],
		path: './assets/svgs/material_ui/defalut.svg'
	},
	{
		active: true,
		name: 'Primeng',
		type: [Types.FRONT_END],
		path: './assets/svgs/primeng/defalut.svg'
	},
	{
		active: true,
		name: 'DevExtreme',
		type: [Types.FRONT_END],
		path: './assets/svgs/dev_extreme/defalut.svg'
	},
	{
		active: true,
		name: 'Bootstrap',
		type: [Types.FRONT_END],
		path: './assets/svgs/bootstrap/defalut.svg'
	},
	{
		active: true,
		name: 'Sql Server',
		type: [Types.DATABASE],
		path: './assets/svgs/sql_server/defalut.svg'
	},
	{
		active: true,
		name: 'My Sql',
		type: [Types.DATABASE],
		path: './assets/svgs/my_sql/defalut.svg'
	},
	{
		active: true,
		name: 'PostgreSql',
		type: [Types.DATABASE],
		path: './assets/svgs/postgre_sql/defalut.svg'
	},
	{
		active: true,
		name: 'Mongo DB',
		type: [Types.DATABASE],
		path: './assets/svgs/mongo_db/defalut.svg'
	},
	{
		active: true,
		name: 'redis',
		type: [Types.DATABASE],
		path: './assets/svgs/redis/defalut.svg'
	},
	{
		active: true,
		name: 'Firebase',
		type: [Types.DATABASE],
		path: './assets/svgs/firebase/defalut.svg'
	},
	{
		active: true,
		name: 'Cloudinary',
		type: [Types.BACK_END],
		path: './assets/svgs/cloudinary/defalut.svg'
	},
	{
		active: true,
		name: 'Restfull Api',
		type: [Types.BACK_END],
		path: './assets/svgs/restfull_api/defalut.svg'
	},
	{
		active: true,
		name: 'Socket Io',
		type: [Types.BACK_END],
		path: './assets/svgs/socket_io/defalut.svg'
	},
	{
		active: true,
		name: 'Graphql',
		type: [Types.BACK_END],
		path: './assets/svgs/graphql/defalut.svg'
	},
	{
		active: true,
		name: 'Apollo Client',
		type: [Types.FRONT_END],
		path: './assets/svgs/apollo_client/defalut.svg'
	},
	{
		active: true,
		name: 'Type Orm',
		type: [Types.BACK_END],
		path: './assets/svgs/type_orm/defalut.svg'
	},
	{
		active: true,
		name: 'Sequelize',
		type: [Types.BACK_END],
		path: './assets/svgs/sequelize/defalut.svg'
	},
	{
		active: false,
		name: 'Elastic',
		type: [Types.BACK_END],
		path: './assets/svgs/elastic/defalut.svg'
	},
	{
		active: false,
		name: 'Logstash',
		type: [Types.BACK_END],
		path: './assets/svgs/logstash/defalut.svg'
	},
	{
		active: false,
		name: 'Kibana',
		type: [Types.BACK_END],
		path: './assets/svgs/kibana/defalut.svg'
	},
	{
		active: true,
		name: 'Docker',
		path: './assets/svgs/docker/defalut.svg',
		type: [Types.OTHERS, Types.BACK_END]
	},
	{
		active: true,
		name: 'Puppeteer',
		type: [Types.OTHERS],
		path: './assets/svgs/puppeteer/defalut.svg'
	},
	{
		active: true,
		name: 'Git',
		type: [Types.OTHERS],
		path: './assets/svgs/git/defalut.svg'
	},
	{
		active: false,
		name: 'Github',
		type: [Types.OTHERS],
		path: './assets/svgs/github/defalut.svg'
	},
	{
		active: false,
		name: 'Gitlab',
		type: [Types.OTHERS],
		path: './assets/svgs/gitlab/defalut.svg'
	},
	{
		active: false,
		name: 'Bitbucket',
		type: [Types.OTHERS],
		path: './assets/svgs/bitbucket/defalut.svg'
	},
	{
		active: false,
		name: 'Npm',
		type: [Types.OTHERS],
		path: './assets/svgs/npm/defalut.svg'
	},
	{
		active: false,
		name: 'Yarn',
		type: [Types.OTHERS],
		path: './assets/svgs/yarn/defalut.svg'
	},
	{
		active: false,
		name: 'Pmpm',
		type: [Types.OTHERS],
		path: './assets/svgs/pmpm/defalut.svg'
	},
	{
		active: false,
		name: 'Bun',
		type: [Types.OTHERS],
		path: './assets/svgs/bun/defalut.svg'
	},
	{
		active: false,
		name: 'Maven',
		type: [Types.OTHERS],
		path: './assets/svgs/maven/defalut.svg'
	},
	{
		active: false,
		name: 'Gradle',
		type: [Types.OTHERS],
		path: './assets/svgs/gradle/defalut.svg'
	},

	{
		active: false,
		name: 'Webpack',
		type: [Types.OTHERS],
		path: './assets/svgs/webpack/defalut.svg'
	},
	{
		active: false,
		name: 'Vite',
		type: [Types.OTHERS],
		path: './assets/svgs/vite/defalut.svg'
	},
	{
		active: false,
		name: 'Turbo',
		type: [Types.OTHERS],
		path: './assets/svgs/turbo/defalut.svg'
	},
	{
		active: false,
		name: 'Nx',
		type: [Types.OTHERS],
		path: './assets/svgs/nx/defalut.svg'
	},
	{
		active: true,
		name: 'Story book',
		type: [Types.FRONT_END],
		path: './assets/svgs/story_book/defalut.svg'
	},
	{
		active: true,
		name: 'Photoshop',
		type: [Types.OTHERS],
		path: './assets/svgs/photoshop/defalut.svg'
	},
	{
		active: true,
		name: 'Figma',
		type: [Types.OTHERS],
		path: './assets/svgs/figma/defalut.svg'
	},
	{
		active: false,
		name: 'Linux',
		type: [Types.OTHERS],
		path: './assets/svgs/linux/defalut.svg'
	},
	{
		active: false,
		name: 'Ubutu',
		type: [Types.OTHERS],
		path: './assets/svgs/ubutu/defalut.svg'
	}
]
