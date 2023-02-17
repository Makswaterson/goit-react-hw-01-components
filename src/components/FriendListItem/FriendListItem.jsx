import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendSpan,
} from '../FriendListItem/FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendSpan isOnline={isOnline}></FriendSpan>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
