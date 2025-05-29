import { useState } from 'react';
import {
    IconAddressBook,
    IconBrandReact,
    IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group, Text } from '@mantine/core';
import classes from './SideNavigation.module.css';
import { Link } from '@remix-run/react';
import { MantineLogo } from '@mantinex/mantine-logo';

const data = [
    { link: '/contacts', label: 'Contacts', icon: IconAddressBook },
    // { link: '', label: 'Notifications', icon: IconBellRinging },
    // { link: '', label: 'Billing', icon: IconReceipt2 },
    // { link: '', label: 'Security', icon: IconFingerprint },
    // { link: '', label: 'Databases', icon: IconDatabaseImport },
    // { link: '', label: 'Authentication', icon: Icon2fa },
    // { link: '', label: 'Other Settings', icon: IconSettings },
];

export default function SideNavigation() {
    const [active, setActive] = useState('');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <MantineLogo size={28} />
                    {/* <Code fw={700}>v3.1.2</Code> */}
                </Group>

                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}