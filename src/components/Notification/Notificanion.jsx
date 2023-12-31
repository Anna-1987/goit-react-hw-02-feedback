import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return message && <p className={css.msg}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};