import { concat, map, prop } from 'ramda';

const cardedNoHeader: Link = {
    label: 'Carded No Header',
};
const fullWidthTabbed: Link = {
    label: 'Full Width Tabbed',
};
const cardedToolbar: Link = {
    label: 'Carded Toolbar'
};


export const navLinks: NavigationConfig = [
    {
        label: 'Layouts',
        children: [
            cardedNoHeader,
            cardedToolbar,
            fullWidthTabbed
        ]
    }
];
