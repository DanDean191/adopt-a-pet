import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';

import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  const activeClass = ({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"

  return (
    <nav>
      <div className="nav-logo">
        <Link to='/'>
          <img src={Logo} alt="Petlover" />
        </Link>
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            to="/"
            className={e => activeClass(e)}
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should have an activeClassName prop */}
                <NavLink
                  to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className={e => activeClass(e)}
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
