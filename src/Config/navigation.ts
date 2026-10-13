export interface NavItem {
    label: string;
    to: string;
}

export const navItems: NavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'Projecten', to: '/projecten' },
    { label: 'Over mij', to: '/over-mij' },
    { label: 'Contact', to: '/contact' },
];
