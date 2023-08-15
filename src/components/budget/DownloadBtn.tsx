import { saveAs } from 'file-saver';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button } from '@mui/material';
import { Transaction } from '@shared/interface';

interface Props {
  transactions: Transaction[]
}

const DownloadBtn = ({ transactions }: Props) => {

  const convertToCSV = (data: Transaction[]): string => {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(obj => Object.values(obj).join(',') + '\n');
    return header + rows.join('');
  };

  const saveCSVToFile = () => {
    const csvContent = convertToCSV(transactions);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `BudgetBuddy_Transactions_${new Date().toLocaleDateString()}.csv`);
  };


  return (
    <Button variant="contained" color='info' startIcon={<FileDownloadOutlinedIcon />}
      onClick={saveCSVToFile}>
      Download as CSV
    </Button>
  )
}

export default DownloadBtn