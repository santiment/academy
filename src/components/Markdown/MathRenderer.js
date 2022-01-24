import React from "react"
import PropTypes from "prop-types"
import TeX from "@matejmazur/react-katex"
import "katex/dist/katex.min.css"

export const MathRenderer = ({ value }) => <TeX>{value}</TeX>

export const MathBlockRenderer = ({ value }) => <TeX block>{value}</TeX>

MathRenderer.propTypes = {
  value: PropTypes.string.isRequired,
}

MathBlockRenderer.propTypes = {
  value: PropTypes.string.isRequired,
}
