import { useState } from "react";
import { PeriodicData } from "@shared/periodic-elements";
import { PeriodicElement } from "@shared/interface";
import "@styles/Periodic.scss";

interface ElementProps {
  num: number,
  showInfo: (num: number) => void
}

const elements = PeriodicData.elements;

const Element = ({ num, showInfo }: ElementProps) => {

  const element = elements[num];

  const openInfo = () => {
    showInfo(num);
  };

  return (
    <div
      title={element.name}
      onClick={openInfo}
      className={`element element-${num} ${element.category}`}
    >
      <div className="number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
    </div>
  );
};

const PeriodicTable = () => {

  const [showInfo, setShowInfo] = useState(false);
  const [element, setElement] = useState<PeriodicElement>(elements[0]);


  const showInfoHandler = (num: number) => {
    setShowInfo(true);
    setElement(elements[num]);
  };

  const closeInfoHandler = () => {
    setShowInfo(false);
  };

  const populateElements = (start: number, end: number) => {
    const items = [];
    for (let i = start; i <= end; i++) {
      items.push(<Element showInfo={showInfoHandler} num={i} />);
    }
    return items;
  };

  const {
    name,
    summary,
    symbol,
    category,
    number,
    source,
    appearance,
    atomic_mass,
    molar_heat,
    density,
    melt,
    boil,
  } = element;

  return (
    <div className="wrapper">
      <div id="table">
        {/* Elements 1-4 */}
        {populateElements(1, 4)}
        {/* Information Table */}
        {showInfo && (
          <>
            <div id="element-box" className={`${category}`}>
              <div className="number">{number}</div>
              <div className="symbol">{symbol}</div>
              <div className="element-name">{name}</div>
            </div>
            <div id="information">
              <div
                onClick={closeInfoHandler}
                className="close-button"
                title="Close Info"
              >
                Close [&times;]
              </div>
              <div>
                <h1 className="big_title">{name}</h1>
                <span className={`cat_name ${category}`}>{category}</span>
                {appearance && (
                  <div className="appearance">
                    <strong>Appearance:</strong> {appearance}
                  </div>
                )}
                <div className="atom_info">
                  <span>Atomic Mass: {atomic_mass} | </span>
                  <span>Density: {density}</span>
                  {molar_heat && <span> | Molar Heat: {molar_heat}</span>}
                  {melt && <span> | Melt: {melt}K</span>}
                  {boil && <span> | Boil: {boil}K</span>}
                </div>
                <div>
                  {summary} ...{" "}
                  <a target="_blank" href={source}>
                    Source
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Populating elements from 5-57 */}
        {populateElements(5, 57)}
        {/* Lanthanoids split 72-89 */}
        {populateElements(72, 89)}
        {/* Actinoids split 104-119*/}
        {populateElements(104, 118)}
        {/* Lanthenoids 58-71*/}
        {populateElements(58, 71)}
        {/* Actinoids 90-103 */}
        {populateElements(90, 103)}
      </div>
    </div>
  );
};

export default PeriodicTable;
