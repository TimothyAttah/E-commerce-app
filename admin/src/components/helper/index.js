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
        name: 'Home'
      },
      {
        icon: <Timeline />,
        name: 'Analytics'
      },
      {
        icon: <TrendingUp />,
        name: 'Sales'
      },
    ]
  },
  {
    title: 'Quick Menu',
    sidebarListsItems: [
      {
        icon: <PermIdentity />,
        name: 'Users'
      },
      {
        icon: <Timeline />,
        name: 'Products'
      },
      {
        icon: <TrendingUp />,
        name: 'Transactions'
      },
      {
        icon: <TrendingUp />,
        name: 'Reports'
      },
    ]
  },
  {
    title: 'Notifications',
    sidebarListsItems: [
      {
        icon: <Mail />,
        name: 'Mail'
      },
      {
        icon: <Timeline />,
        name: 'Feedback'
      },
      {
        icon: <TrendingUp />,
        name: 'Messages'
      },
    ]
  },
  {
    title: 'Staff',
    sidebarListsItems: [
      {
        icon: <WorkOutline />,
        name: 'Manage'
      },
      {
        icon: <Timeline />,
        name: 'Analytics'
      },
      {
        icon: <Report />,
        name: 'Reports'
      },
    ]
  },
]