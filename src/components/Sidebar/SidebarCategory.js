import React, {useState} from "react"
import cx from "classnames"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import { isLocalStorage } from "../../utils/localStorage"
import { titleToSlug } from "../../utils/docs"
import styles from "./Sidebar.module.scss"

const setCategoryState = ({ title, isOpen }) => {
  if (isLocalStorage()) {
    isOpen ? localStorage.setItem(`category_${title}`, '+') : localStorage.removeItem(`category_${title}`)
  }
}

const getCategoryState = ({ title, isActive }) => {
  if (isLocalStorage()) {
    let state = localStorage.getItem(`category_${title}`)
    setCategoryState({ title, isOpen: !!state })
    return !!state
  } else return false
}

const isCategoryActive = (active = [], category) =>
  active[0] === titleToSlug(category)
const isArticleActive = (active = [], category, article) =>
  isCategoryActive(active, category) && active[1] === titleToSlug(article)

const SidebarCategory = ({ className, active, title, articles }) => {
  const isActive = isCategoryActive(active, title)
  const [isOpen, setIsOpen] = useState(isActive)
  setCategoryState({ title, isOpen: isActive })
  return (
    <li className={cx(styles.category__wrapper, isOpen && styles.category__opened)}>
      <div className={cx(styles.category,isActive && styles.category__active)}>
        <Link
          to={`/${titleToSlug(title)}/`}
          className={cx(styles.category__title)}
        >
          {title}
        </Link>
        <Icon
          type='arrow-right'
          className={styles.arrow}
          onClick={() => {
            setCategoryState({ title, isOpen: !isOpen })
            setIsOpen(!isOpen)
          }}
        />
      </div>
        <ul className={styles.articles}>
          {(articles || []).map(article => (
            <li>
              <Link
                to={`/${titleToSlug(title)}/${titleToSlug(article)}/`}
                className={cx(
                  styles.article,
                  isArticleActive(active, title, article) &&
                    styles.article__active
                )}
              >
                {article}
              </Link>
            </li>
          ))}
        </ul>
    </li>
  )
}

export default SidebarCategory
