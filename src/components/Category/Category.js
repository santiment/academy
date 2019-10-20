import React from "react"
import Block from '../Block/Block'
import styles from "./Category.module.scss"

const Category = ({ title, description, blocks }) => (
	<section className={styles.wrapper}>
  	<div>
  		<h4 className={styles.title}>{title}</h4>
  		<p className={styles.description}>
  			{description}
  		</p>
  	</div>
  	<div className={styles.blocks}>
  		{blocks.map(block => <Block key={block.title + title} {...block} category={title} />)}
  	</div>
  </section>
)

export default Category
