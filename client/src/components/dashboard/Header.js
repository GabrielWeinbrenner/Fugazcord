import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaSignOutAlt, FaUserFriends } from 'react-icons/fa';

import ArrowTooltip from './ArrowTooltip';
import List from './List';
import { toggleMemberList } from '../../reducers/memberListReducer';
import { logout } from '../../reducers/sessionReducer';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--background-tertiary);
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--header-primary);
`;

const IconButton = ({ children, href, ...rest }) => {
  const tag = href ? 'a' : 'button';
  const type = tag === 'button' ? 'button' : undefined;

  return (
    <button as={tag} type={type} href={href} size="22px" w="24px" {...rest}>
      {children}
    </button>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const isMemberListOpen = useSelector((state) => state.memberList.isOpen);
  const channels = useSelector((state) => state.channels);
  const activeChannelName =
    !channels.loading && channels.byId[channels.active]?.name;

  return (
    <Wrapper id="header" className="disable-select">
      <List horizontal gap="10px">
        <List horizontal gap="6px" style={{ alignItems: 'center' }}>
          <Title>{!channels.loading && activeChannelName}</Title>
        </List>
      </List>
      <List horizontal gap="16px">
        <ArrowTooltip title={`${isMemberListOpen ? 'Hide' : 'Show'} Member list`}>
          <IconButton onClick={() => dispatch(toggleMemberList())} isActive={isMemberListOpen}>
            <FaUserFriends />
          </IconButton>
        </ArrowTooltip>
        <ArrowTooltip title="Logout">
          <IconButton onClick={() => dispatch(logout())}>
            <FaSignOutAlt />
          </IconButton>
        </ArrowTooltip>
      </List>
    </Wrapper>
  );
};

export default Header;
