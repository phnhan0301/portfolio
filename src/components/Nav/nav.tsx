import { Chip, Typography } from '@mui/material';
import Router from 'next/link';
import { useRouter } from 'next/router';
import { NavRoot, NavItem, NavLink } from './nav.styled';

const Nav = () => {
    const { asPath } = useRouter();

    return (
        <NavRoot>
            <NavItem state={asPath === '/' ? 'activated' : null}>
                <Router href="/" passHref>
                    <NavLink>
                        <img
                            src="/icons/overview.svg"
                            alt="overview"
                            height={16}
                            width={16}
                        />
                        <Typography component="span">Overview</Typography>
                    </NavLink>
                </Router>
            </NavItem>

            <NavItem
                state={asPath.startsWith('/projects') ? 'activated' : null}
            >
                <Router href="/projects" passHref>
                    <NavLink>
                        <img
                            src="/icons/projects.svg"
                            alt="overview"
                            height={16}
                            width={16}
                        />
                        <Typography component="span">Projects</Typography>
                        <Chip label="7" size="small" />
                    </NavLink>
                </Router>
            </NavItem>

            <NavItem
                state={asPath.startsWith('/contact-me') ? 'activated' : null}
            >
                <Router href="/contact-me" passHref>
                    <NavLink>
                        <img
                            src="/icons/contact.svg"
                            alt="overview"
                            height={16}
                            width={16}
                        />
                        <Typography component="span">Contact Me</Typography>
                    </NavLink>
                </Router>
            </NavItem>
        </NavRoot>
    );
};

export default Nav;
