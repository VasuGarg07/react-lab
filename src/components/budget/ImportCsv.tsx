import Papa from 'papaparse';
import { useRef } from 'react';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useBudgetContext } from '@contexts/budget.context';
import { Transaction } from '@shared/interface';

const ImportCsv = () => {
  const { importTransactions } = useBudgetContext();
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      parseCSV(file);
      event.target.files = null
    }
  };

  const parseCSV = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: result => {
        const data = result.data;
        const transactions: Transaction[] = data.map((item: any) => {
          item.amount = parseInt(item.amount);
          // item.date = Utils.parseStringToDate(item.date)
          return item as Transaction
        })
        importTransactions(transactions)
      },
      error: error => {
        console.error('CSV Parsing Error:', error);
      }
    });
  };

  const handleChooseFileClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".csv"
        ref={inputFileRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button
        variant="outlined"
        className='submit' startIcon={<FileUploadOutlinedIcon />}
        size='small'
        onClick={handleChooseFileClick}>
        Import CSV
      </Button>
    </>
  );

}

export default ImportCsv