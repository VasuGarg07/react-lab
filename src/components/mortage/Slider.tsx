
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface Props {
  defaultValue: number,
  max: number,
  min: number,
  unit: string,
  label: string,
  amount: string | number,
  value: number,
  steps: number,
  onChange: (value: number) => void
}


const SliderComponent = ({ defaultValue, min, max, label, unit, onChange, amount, value, steps }: Props) => {

  const handleChange = (_: Event, value: number | number[]) => {
    if (typeof value == 'number') {
      onChange(value)
    }
  }

  return (
    <Stack my={1.2}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;