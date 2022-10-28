import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [

	{
		Header : '#',
		Footer : '#',
		accessor: 'user_id',
		Filter: ColumnFilter,
		//disableFilters: true,
	},
	
	{
		Header : 'Name',
		Footer : 'Name',
		accessor: 'user_name',
		Filter: ColumnFilter,
	},
	{
		Header : 'Email Id',
		Footer : 'Email Id',
		accessor: 'user_email',
		Filter: ColumnFilter,
	},
	{
		Header : 'Phone',
		Footer : 'Phone',
		accessor: 'user_phone',
		Filter: ColumnFilter,
	},
	{
		Header : 'Username Id',
		Footer : 'Username Id',
		accessor: 'user_username',
		Filter: ColumnFilter,
	},
	
	{
		Header : 'Avatar',
		Footer : 'Avatar',
		accessor: 'user_avatar',
		Filter: ColumnFilter,
	},

	{
		Header : 'Actions',
		Footer : 'Actions',
		accessor: '',
		Filter: ColumnFilter,
	},
]

export const GROUPED_COLUMNS = [
	{
		Header : 'Id',
		Footer : 'Id',
		accessor: 'id'
	},
	{
		Header : 'Name',
		Footer : 'Name',
		columns: [
			{
				Header : 'First Name',
				Footer : 'First Name',
				accessor: 'first_name'
			},
			{
				Header : 'Last Name',
				Footer : 'Last Name',
				accessor: 'last_name'
			},
		]
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header : 'Date of  Birth',
				Footer : 'Date of  Birth',
				accessor: 'date_of_birth'
			},
			{
				Header : 'Country',
				Footer : 'Country',
				accessor: 'country',
			},
			{
				Header : 'Phone',
				Footer : 'Phone',
				accessor: 'phone'
			},
		]
	},
]