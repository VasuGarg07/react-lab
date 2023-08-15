import { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, MenuItem, TextField } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import { Utils } from '@shared/utils';
import { useBudgetContext } from '@contexts/budget.context';
import { ExpenseType, Transaction } from '@shared/interface';
import '@styles/budget/TxnForm.scss'


const TxnForm = () => {
  const { addTransaction, changeTransaction, open, closeDialog, editTxn } = useBudgetContext();

  const [amount, setAmount] = useState<number>(0);
  const [label, setLabel] = useState<string>('');
  const [type, setType] = useState<ExpenseType | ''>('');
  const [date, setDate] = useState<string>(Utils.formatDate(new Date()));
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (editTxn) {
      setAmount(editTxn.amount);
      setDate(editTxn.date)
      setLabel(editTxn.label);
      setType(editTxn.type)
    }
  }, [editTxn]);

  const handleClose = () => {
    setLabel('');
    setType('')
    setError(false);
    setDate(Utils.formatDate(new Date()))
    closeDialog()
  }

  const handleSelect = (e: any) => {
    setType(e.target.value as ExpenseType)
  }

  const handleDateSelect = (date: Date) => {
    const strDate = Utils.formatDate(date);
    setDate(strDate)
  }

  const handleSubmit = () => {
    if (!amount || !label || type == '') {
      setError(true);
    } else {
      console.log(type)
      const txn: Transaction = { id: editTxn ? editTxn.id : uuidv4(), amount, label, type, date }
      editTxn ? changeTransaction(txn) : addTransaction(txn);
      setAmount(0);
      handleClose();
    }
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{editTxn ? 'Edit' : 'Add'} Transaction</DialogTitle>
      <form className='txn-form flex-centered-container padding'>
        <TextField variant='outlined' size='small' required className='text-field full-width' type="text" value={label} label='Description' onChange={e => setLabel(e.target.value)} />
        <TextField variant='outlined' size='small' required className='text-field half-width' type="number" value={amount > 0 ? amount : ''} label='Amount' onChange={e => setAmount(parseInt(e.target.value))} />
        <TextField select size='small' required className='text-field half-width' label="Category" value={type} onChange={handleSelect}>
          {Object.values(ExpenseType).map((option) => (
            <MenuItem key={option} value={option}> {option} </MenuItem>
          ))}
        </TextField>
        <DatePicker className='date-picker full-width' selected={Utils.parseStringToDate(date)} onChange={(date) => date && handleDateSelect(date)} />
        {error && <span className='text-center error full-width'>Please Fill All Fields</span>}
      </form>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" disableElevation onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

export default TxnForm