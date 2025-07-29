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
	default?: string
	path?: string
	grey?: string
	active?: boolean
}
export const ListIcon: ListIconModel[] = [
	{
		active: true,
		name: 'Html',
		type: [Types.FRONT_END],
		path: './assets/svgs/html'
	},
	{
		active: true,
		name: 'Css/ Css Module',
		type: [Types.FRONT_END],
		path: './assets/svgs/css'
	},
	{
		active: true,
		name: 'Javascript',
		type: [Types.FRONT_END, Types.BACK_END],
		path: './assets/svgs/javascript'
	},
	{
		active: true,
		name: 'Typescript',
		type: [Types.FRONT_END, Types.BACK_END],
		path: './assets/svgs/typescript'
	},
	{
		active: true,
		name: 'C#',
		type: [Types.BACK_END],
		path: './assets/svgs/c_sharp'
	},
	{
		active: true,
		name: 'Java',
		type: [Types.BACK_END],
		path: './assets/svgs/java'
	},
	{
		active: true,
		name: 'Node.js',
		type: [Types.BACK_END],
		path: './assets/svgs/node_js'
	},
	{
		active: true,
		name: 'Nest.js',
		type: [Types.BACK_END],
		path: './assets/svgs/nest_js'
	},
	{
		active: true,
		name: 'Express.js',
		type: [Types.BACK_END],
		path: './assets/svgs/express_js'
	},
	{
		active: true,
		name: 'Dot Net',
		type: [Types.BACK_END],
		path: './assets/svgs/dot_net'
	},
	{
		active: false,
		name: 'Spring',
		type: [Types.BACK_END],
		path: './assets/svgs/spring'
	},

	{
		active: true,
		name: 'React/React Native',
		type: [Types.FRONT_END],
		path: './assets/svgs/react_js'
	},
	{
		active: true,
		name: 'Angular/ Angularjs',
		type: [Types.FRONT_END],
		path: './assets/svgs/angular_js'
	},
	{
		active: true,
		name: 'Vue',
		type: [Types.FRONT_END],
		path: './assets/svgs/vue'
	},
	{
		active: true,
		name: 'Next',
		type: [Types.FRONT_END],
		path: './assets/svgs/next_js'
	},
	{
		active: false,
		name: 'Nuxt',
		type: [Types.FRONT_END],
		path: './assets/svgs/nuxt_js'
	},
	{
		active: true,
		name: 'Jquery',
		type: [Types.FRONT_END],
		path: './assets/svgs/jquery'
	},
	{
		active: true,
		name: 'React Query',
		type: [Types.FRONT_END],
		path: './assets/svgs/react_query'
	},
	{
		active: true,
		name: 'Redux Toolkit',
		type: [Types.FRONT_END],
		path: './assets/svgs/redux_toolkit'
	},
	{
		active: true,
		name: 'Ngrx',
		type: [Types.FRONT_END],
		path: './assets/svgs/ngrx'
	},
	{
		active: true,
		name: 'Vuex',
		type: [Types.FRONT_END],
		path: './assets/svgs/vuex'
	},
	{
		active: true,
		name: 'Rxjs',
		type: [Types.FRONT_END],
		path: './assets/svgs/rxjs'
	},
	{
		active: true,
		name: 'Pug',
		type: [Types.FRONT_END],
		path: './assets/svgs/pug'
	},
	{
		active: true,
		name: 'Tailwind Css',
		type: [Types.FRONT_END],
		path: './assets/svgs/tailwind_css'
	},
	{
		active: true,
		name: 'Sass/Scss',
		type: [Types.FRONT_END],
		path: './assets/svgs/sass'
	},
	{
		active: true,
		name: 'Styled Components',
		type: [Types.FRONT_END],
		path: './assets/svgs/styled_component'
	},
	{
		active: true,
		name: 'Emotion',
		type: [Types.FRONT_END],
		path: './assets/svgs/emotion'
	},
	{
		active: true,
		name: 'Ant Design',
		type: [Types.FRONT_END],
		path: './assets/svgs/ant_design'
	},
	{
		active: true,
		name: 'Material UI',
		type: [Types.FRONT_END],
		path: './assets/svgs/material_ui'
	},
	{
		active: true,
		name: 'Primeng',
		type: [Types.FRONT_END],
		path: './assets/svgs/primeng'
	},
	{
		active: true,
		name: 'DevExtreme',
		type: [Types.FRONT_END],
		path: './assets/svgs/dev_extreme'
	},
	{
		active: true,
		name: 'Bootstrap',
		type: [Types.FRONT_END],
		path: './assets/svgs/bootstrap'
	},
	{
		active: true,
		name: 'Sql Server',
		type: [Types.DATABASE],
		path: './assets/svgs/sql_server'
	},
	{
		active: true,
		name: 'My Sql',
		type: [Types.DATABASE],
		path: './assets/svgs/my_sql'
	},
	{
		active: true,
		name: 'PostgreSql',
		type: [Types.DATABASE],
		path: './assets/svgs/postgre_sql'
	},
	{
		active: true,
		name: 'Mongo DB',
		type: [Types.DATABASE],
		path: './assets/svgs/mongo_db'
	},
	{
		active: true,
		name: 'redis',
		type: [Types.DATABASE],
		path: './assets/svgs/redis'
	},
	{
		active: true,
		name: 'Firebase',
		type: [Types.DATABASE],
		path: './assets/svgs/firebase'
	},
	{
		active: true,
		name: 'Cloudinary',
		type: [Types.BACK_END],
		path: './assets/svgs/cloudinary'
	},
	{
		active: true,
		name: 'Restfull Api',
		type: [Types.BACK_END],
		path: './assets/svgs/restfull_api'
	},
	{
		active: true,
		name: 'Socket Io',
		type: [Types.BACK_END],
		path: './assets/svgs/socket_io'
	},
	{
		active: true,
		name: 'Graphql',
		type: [Types.BACK_END],
		path: './assets/svgs/graphql'
	},
	{
		active: true,
		name: 'Apollo Client',
		type: [Types.FRONT_END],
		path: './assets/svgs/apollo_client'
	},
	{
		active: true,
		name: 'Type Orm',
		type: [Types.BACK_END],
		path: './assets/svgs/type_orm'
	},
	{
		active: true,
		name: 'Sequelize',
		type: [Types.BACK_END],
		path: './assets/svgs/sequelize'
	},
	{
		active: false,
		name: 'Elastic',
		type: [Types.BACK_END],
		path: './assets/svgs/elastic'
	},
	{
		active: false,
		name: 'Logstash',
		type: [Types.BACK_END],
		path: './assets/svgs/logstash'
	},
	{
		active: false,
		name: 'Kibana',
		type: [Types.BACK_END],
		path: './assets/svgs/kibana'
	},
	{
		active: true,
		name: 'Docker',
		type: [Types.OTHERS, Types.BACK_END],
		path: './assets/svgs/docker'
	},
	{
		active: true,
		name: 'Puppeteer',
		type: [Types.OTHERS],
		path: './assets/svgs/puppeteer'
	},
	{
		active: true,
		name: 'Git',
		type: [Types.OTHERS],
		path: './assets/svgs/git'
	},
	{
		active: false,
		name: 'Github',
		type: [Types.OTHERS],
		path: './assets/svgs/github'
	},
	{
		active: false,
		name: 'Gitlab',
		type: [Types.OTHERS],
		path: './assets/svgs/gitlab'
	},
	{
		active: false,
		name: 'Bitbucket',
		type: [Types.OTHERS],
		path: './assets/svgs/bitbucket'
	},
	{
		active: false,
		name: 'Npm',
		type: [Types.OTHERS],
		path: './assets/svgs/npm'
	},
	{
		active: false,
		name: 'Yarn',
		type: [Types.OTHERS],
		path: './assets/svgs/yarn'
	},
	{
		active: false,
		name: 'Pmpm',
		type: [Types.OTHERS],
		path: './assets/svgs/pmpm'
	},
	{
		active: false,
		name: 'Bun',
		type: [Types.OTHERS],
		path: './assets/svgs/bun'
	},
	{
		active: false,
		name: 'Maven',
		type: [Types.OTHERS],
		path: './assets/svgs/maven'
	},
	{
		active: false,
		name: 'Gradle',
		type: [Types.OTHERS],
		path: './assets/svgs/gradle'
	},

	{
		active: false,
		name: 'Webpack',
		type: [Types.OTHERS],
		path: './assets/svgs/webpack'
	},
	{
		active: false,
		name: 'Vite',
		type: [Types.OTHERS],
		path: './assets/svgs/vite'
	},
	{
		active: false,
		name: 'Turbo',
		type: [Types.OTHERS],
		path: './assets/svgs/turbo'
	},
	{
		active: false,
		name: 'Nx',
		type: [Types.OTHERS],
		path: './assets/svgs/nx'
	},
	{
		active: true,
		name: 'Story book',
		type: [Types.FRONT_END],
		path: './assets/svgs/story_book'
	},
	{
		active: true,
		name: 'Photoshop',
		type: [Types.OTHERS],
		path: './assets/svgs/photoshop'
	},
	{
		active: true,
		name: 'Figma',
		type: [Types.OTHERS],
		path: './assets/svgs/figma'
	},
	{
		active: false,
		name: 'Linux',
		type: [Types.OTHERS],
		path: './assets/svgs/linux'
	},
	{
		active: false,
		name: 'Ubutu',
		type: [Types.OTHERS],
		path: './assets/svgs/ubutu'
	}
]
