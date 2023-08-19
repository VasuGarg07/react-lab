import Result from '@components/mortage/Result';
import SliderSelect from '@components/mortage/SliderSelect';
import TenureSelect from '@components/mortage/TenureSelect';
import { Container, Grid, Typography } from '@mui/material'
import { MortageData } from '@shared/interface';
import '@styles/Mortage.scss'
import { useState } from 'react';

const Mortage = () => {

  const [data, setData] = useState<MortageData>({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 10,
    interestRate: 10,
  });

  return (
    <>
      <div className='navbar padding'>
        <Typography variant="h4" className='app-name'>
          Mortage<span>Calculator</span>
        </Typography>
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Mortage