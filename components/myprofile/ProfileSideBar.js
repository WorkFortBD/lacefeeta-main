import React from 'react';
import ActiveLink from '../master/activeLink/ActiveLink';
import Translate from '../translation/Translate';

const ProfileSideBar = () => {
    return (
        <div className="sidebar card text-capitalize">
            <ul>
                <li>
                    <ActiveLink href="/profile" activeLink="activeLink"> <Translate>My Profile</Translate> </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/account-setting" activeLink="activeLink"> <Translate>Account Setting</Translate> </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/wishlist" activeLink="activeLink"><Translate>My Wish list</Translate></ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/order" activeLink="activeLink"> <Translate>My Orders</Translate> </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/product-review" activeLink="activeLink"> <Translate>My Reviews</Translate> </ActiveLink>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;