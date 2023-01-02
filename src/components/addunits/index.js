import { useContext } from "react";
import { sideBarContext } from "../../App";
import useScript from "../../hooks/script";
import "./index.css";
const AddUnits = (props) => {
  const value = useContext(sideBarContext);
  const { handleActiveAddUnit } = value;
  const { each, isActiveUnit } = props;
  const activeUnitColor = isActiveUnit ? "active-unit" : "";
  const selectIt = (id) => {
    handleActiveAddUnit(id);
  };
  return (
    <li
      className={`unit-list ${activeUnitColor}`}
      onClick={() => selectIt(each.id)}
    >
      <a className="nav-link" href={each.url} target="tab_iframe">
        <img src={each.image} className="unit-icon" alt="unit-list" />
        <p>{each.name}</p>
      </a>
    </li>
  );
};

export default AddUnits;
