import "./Dropdown.css";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi"

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveChangeHandler = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={isActiveChangeHandler}>
        <BiDownArrow className="dropdown__icon" />
      </button>

      {isActive ? <ul className="dropdown__menu">
        <li className="dropdown__item">
          <a href="#" className="dropdown__link">Camisetas</a>
        </li>
        <li className="dropdown__item">
          <a href="#" className="dropdown__link">Acessórios</a>
        </li>
        <li className="dropdown__item">
          <a href="#" className="dropdown__link">Cases</a>
        </li>
      </ul> : <div>

      </div>}

    </div>
  )
}

export default Dropdown;
