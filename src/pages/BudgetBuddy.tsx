import Total from '@components/budget/Total';
import Transactions from '@components/budget/Transactions';
import TxnForm from '@components/budget/TxnForm';
import { Typography } from '@mui/material';
import '@styles/BudgetBuddy.scss';

const BudgetBuddy = () => {
  return (
    <>
      <div className='navbar padding'>
        <Typography variant="h4" className='app-name'>
          Budget<span>Buddy</span>
        </Typography>
      </div>
      <main className="budget-container padding display-flex">
        <section className="section-sm">
          <Total />
        </section>
        <section className="section-md">
          <Transactions />
        </section>
      </main>
      <TxnForm />
    </>
  )
}

export default BudgetBuddy