export default (
  state = {
    name: process.env.REACT_APP_BOT_PROFILE_NAME,
    initials: process.env.REACT_APP_BOT_PROFILE_INITIALS
  },
  action
) => state;
