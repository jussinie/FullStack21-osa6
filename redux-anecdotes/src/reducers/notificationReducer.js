const initialNotification = 'START'

export const notificationText = notification => {
  return {
    type: 'SHOW_NOTIFICATION',
    notification,
  }
}

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer