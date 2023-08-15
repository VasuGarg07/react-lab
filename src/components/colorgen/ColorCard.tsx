import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { Utils } from '../../shared/utils';

interface ColorProps {
  rgb: number[],
  weight: number,
  type: string,
  hexColor: string
}

const SingleColor = ({ rgb, weight, type, hexColor }: ColorProps) => {

  const [open, setOpen] = useState(false);

  const bcgColor = rgb.join(',')
  const hexCode = Utils.rgbToHex(...(rgb as [number, number, number]));

  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText(hexColor ? `#${hexColor}` : hexCode)
  }

  const txtColor = () => {
    switch (type) {
      case 'tint':
        return 'black';
      case 'shade':
        return 'white';
      default:
        return 'white'
    }
  }

  return (
    <>
      <div className='color-container padding' onClick={handleClick}
        style={{ backgroundColor: `rgb(${bcgColor})`, color: txtColor() }}>
        <p className='weight'>{weight}%</p>
        <p className='color-code'>{`#${hexColor}` || hexCode}</p>
      </div>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="info">Copied to Clipboard</Alert>
      </Snackbar>
    </>
  )
}

export default SingleColor