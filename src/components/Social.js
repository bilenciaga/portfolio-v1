import socialLinks  from "../data/socialLinks";
import './Social.scss'
import React from 'react'

const Social = () => {
  return (
    <div className="social">
      { socialLinks.map((link) => {
        return (
          <ul className="">
            <li>
              <a href={link.url} key={link.id} className='social__icon' >
                {link.icon}
              </a>
            </li>
          </ul>

        )
      })}
    </div>
  )
}

export default Social