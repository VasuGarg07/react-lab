// import { TextField } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { Utils } from '../../shared/utils';
import DownloadBtn from './DownloadBtn';
import { Transaction } from '@shared/interface';
import { useBudgetContext } from '@contexts/budget.context';
import '@styles/budget/Transactions.scss';
// import { useState } from 'react';

const StyledTableCell = Utils.StyledTableCell;
const StyledTableRow = Utils.StyledTableRow;

const Transactions = () => {
  const { transactions, deleteTransaction, openDialog, setEditTxn } = useBudgetContext();
  // const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (txn: Transaction) => {
    setEditTxn(txn);
    openDialog();
  }

  return (
    <div className='txn-container padding full-width'>
      <div className='flex-centered-container section-header'>
        <h2>Transactions</h2>
        <span className='spacer'></span>
        {transactions && transactions.length > 0 && <DownloadBtn transactions={transactions} />}
      </div>

      {transactions && transactions.length ?
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Note</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((txn: Transaction) => (
                <StyledTableRow key={txn.id} className='table-row'>
                  <StyledTableCell component="th" scope="row" align="center">
                    {txn.date}
                  </StyledTableCell>
                  <StyledTableCell align="center">{txn.amount}</StyledTableCell>
                  <StyledTableCell align="center">{txn.type}</StyledTableCell>
                  <StyledTableCell align="center">{txn.label}</StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton size='small' onClick={() => handleEdit(txn)} color="inherit">
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton size='small' onClick={() => deleteTransaction(txn)} color="error">
                      <DeleteOutlineIcon />
                    </IconButton></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        : <div className='image-container flex-centered-column'>
          <img src="/images/no-transactions.png" alt="" />
          <h4 className='text-center'>No Transactions Recorded Yet</h4>
        </div>
      }

    </div>
  )
}

export default Transactions