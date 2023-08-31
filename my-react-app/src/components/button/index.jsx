const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const {child, className} = props
  return <button className={className}>{child}</button>
}

export default Button