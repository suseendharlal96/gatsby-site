import React from "react"

const Title = ({ title, id }) => {
  return (
    <div className="section-title">
      <h2 id={id}>{title || "Techs"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
