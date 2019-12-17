import React from "react"
import { InputWithIcon as Input } from "@santiment-network/ui/Input"
import styles from "./Search.module.scss"

const SearchInput = ({ value }) => (
  <Input
    id='search'
    placeholder='Search docs, articles, video tutorials...'
    icon='search'
    defaultValue={value}
    iconPosition='left'
    iconClassName={styles.icon}
    inputClassName={styles.input}
  />
)

export default SearchInput
