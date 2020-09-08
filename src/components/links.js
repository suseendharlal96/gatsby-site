import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
]

class MyLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }
  componentDidMount() {
    if (
      window.location.pathname === this.props.to ||
      window.location.pathname.includes(this.props.to + "/")
    ) {
      this.setState({
        isActive: true,
      })
    }
  }
  render() {
    return (
      <ul
        className={`page-links ${
          this.props.styleClass ? this.props.styleClass : ""
        }`}
      >
        {data.map(link => {
          return (
            <li className={this.state.isActive ? "active" : ""} key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default MyLink
