'use client';

import { memo } from 'react';
import { Category } from './types';

const NavItem = ({
    value,
    handlerFilterCategory,
    active,
}: {
    value: Category | 'All';
    handlerFilterCategory: Function;
    active: string;
}) => {
    let className = 'capitalize cursor-pointer';
    if (active === value) className += ' text-blue-500';
    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const Projectsnavbar = (props: {
    handlerFilterCategory: Function;
    active: string;
}) => {
    return (
        <div className="flex list-none space-x-3 py-3 text-lg font-bold">
            <NavItem value="All" {...props} />
            <NavItem value="NextJS" {...props} />
            <NavItem value="AI" {...props} />
        </div>
    );
};

export default memo(Projectsnavbar);
