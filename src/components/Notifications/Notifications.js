import React, { Component } from 'react'
import Notification from '@santiment-network/ui/Notification'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Notifications.module.scss'

export const NotificationsContext = React.createContext({
  notifications: [],
  add: () => {},
  remove: () => {},
})

const notifyDuration = 300

let lastId = 0

class Notifications extends Component {
  state = {
    notifications: [],
    add: this.add,
    remove: this.remove,
  }

  add = ({ dismissAfter = 4000, ...notification }) => {
    notification.id = lastId
    lastId += 1
    this.setState(({ notifications }) => {
      setTimeout(() => {
        this.remove(notification)
      }, dismissAfter)
      return { notifications: [...notifications, notification] }
    })
  }

  remove = notification => {
    this.setState(({ notifications }) => ({
      notifications: notifications.filter(not => not !== notification),
    }))
  }

  render() {
    const { notifications } = this.state
    const { children } = this.props

    const context = {
      notifications,
      add: this.add,
      remove: this.remove,
    }

    return (
      <>
        <TransitionGroup className={styles.notifications}>
          {notifications.map((notification, i) => (
            <CSSTransition
              key={notification.id}
              timeout={notifyDuration}
              classNames={styles}
            >
              <Notification
                {...notification}
                className={styles.notification}
                onClose={() => this.remove(notification)}
                style={{
                  '--y-offset': `calc(-${i}00% - ${i}0px - 25px)`,
                }}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <NotificationsContext.Provider value={context}>
          {children}
        </NotificationsContext.Provider>
      </>
    )
  }
}

export default Notifications
