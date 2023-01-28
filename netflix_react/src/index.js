import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
  <>
    <div className="cards">
      <div className="card">
        <img src="" alt="mypic" className="card_img" />
        <div className="card_info">
          <span className="card_category"></span>
          <h3 className="card_title"></h3>
          <a href="" target="_blank">
            <button> Watch now </button>

          </a>

        </div>

      </div>
    </div>
  </>
  , document.getElementById("root")
)