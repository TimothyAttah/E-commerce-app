import {
	LineStyle,
	Mail,
	PermIdentity,
	Report,
	Timeline,
	TrendingUp,
	WorkOutline,
} from '@material-ui/icons';

export const sidebarLists = [
	{
		title: 'Dashboard',
		sidebarListsItems: [
			{
				icon: <LineStyle />,
				name: 'Home',
				path: '/',
			},
			{
				icon: <Timeline />,
				name: 'Analytics',
				// path: '/',
			},
			{
				icon: <TrendingUp />,
				name: 'Sales',
				// path: '/',
			},
		],
	},
	{
		title: 'Quick Menu',
		sidebarListsItems: [
			{
				icon: <PermIdentity />,
				name: 'Users',
				path: '/users',
			},
			{
				icon: <Timeline />,
				name: 'Products',
				// path: '/',
			},
			{
				icon: <TrendingUp />,
				name: 'Transactions',
				// path: '/',
			},
			{
				icon: <TrendingUp />,
				name: 'Reports',
				// path: '/',
			},
		],
	},
	{
		title: 'Notifications',
		sidebarListsItems: [
			{
				icon: <Mail />,
				name: 'Mail',
				// path: '/',
			},
			{
				icon: <Timeline />,
				name: 'Feedback',
				// path: '/',
			},
			{
				icon: <TrendingUp />,
				name: 'Messages',
				// path: '/',
			},
		],
	},
	{
		title: 'Staff',
		sidebarListsItems: [
			{
				icon: <WorkOutline />,
				name: 'Manage',
				// path: '/',
			},
			{
				icon: <Timeline />,
				name: 'Analytics',
				// path: '/',
			},
			{
				icon: <Report />,
				name: 'Reports',
				// path: '/',
			},
		],
	},
];