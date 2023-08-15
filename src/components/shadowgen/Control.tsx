import { HexAlphaColorPicker } from "react-colorful";

interface Props {
  label: string,
  type: string,
  onChangeHandler: (e: any) => void,
  value: string | number
}
const Control = ({ label, type, onChangeHandler, value }: Props) => {
  return (
    <div className={`paneChild ${type}`}>
      <div className="label">
        <label htmlFor={label}>{label}</label>
        {label !== "Inset" && <span className="value">{value}</span>}
      </div>

      {type === "color" ? (
        <HexAlphaColorPicker color={value.toString()} onChange={onChangeHandler} />
      ) : (
        <input
          type={type}
          name={label}
          value={value}
          min={label === "Spread" || label === "Blur" ? 0 : -350}
          max={label === "Spread" || label === "Blur" ? 100 : 350}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
};

export default Control;