import { MortageData } from "@shared/interface";
import SliderComponent from "./Slider";
import { Utils } from "@shared/utils";

interface Props {
  data: MortageData,
  setData: React.Dispatch<React.SetStateAction<MortageData>>
}

const SliderSelect = ({ data, setData }: Props) => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(value) => {
          setData({
            ...data,
            homeValue: Utils.fixInt(value),
            downPayment: Utils.fixInt(value * 0.3),
            loanAmount: Utils.fixInt(value * 0.7),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />

      <SliderComponent
        onChange={(value) =>
          setData({
            ...data,
            downPayment: Utils.fixInt(value),
            loanAmount: Utils.fixInt(data.homeValue - value),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(value) =>
          setData({
            ...data,
            loanAmount: Utils.fixInt(value),
            downPayment: Utils.fixInt(data.homeValue - value),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />

      <SliderComponent
        onChange={(value) =>
          setData({
            ...data,
            interestRate: Utils.fixInt(value),
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;