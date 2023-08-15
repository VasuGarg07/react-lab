import AddIcon from '@mui/icons-material/Add';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import { Button, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Utils } from '../../shared/utils';
import ImportCsv from './ImportCsv';
import '@styles/budget/Total.scss'
import { Aggregate } from '@shared/interface';
import { useBudgetContext } from '@contexts/budget.context';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const StyledTableCell = Utils.StyledTableCell;

const prepChart = (groupedData: Aggregate[]) => {
  // Prepare data for the chart
  const colors = Utils.generateRandomColor(groupedData.length)
  const chartData = {
    labels: groupedData.map(item => item.type),
    datasets: [
      {
        data: groupedData.map(item => item.amount),
        backgroundColor: colors.map(color => `${color}33`),
        borderColor: colors,
        borderWidth: 1
      },
    ],
  };
  return chartData;
}


const Total = () => {
  const { transactions, openDialog, setEditTxn } = useBudgetContext();

  const [total, setTotal] = useState<number>(0);
  const [table, setTable] = useState<Aggregate[]>([]);
  const [chartData, setChartData] = useState<ChartData>();
  const [showChart, setShowChart] = useState<boolean>(true);

  useEffect(() => {
    setTotal(Utils.calculateTotalAmount(transactions));
    const data = Utils.calculateData(transactions);
    setTable(data);
    setChartData(prepChart(data))
  }, [transactions])

  const handleAdd = () => {
    setEditTxn(null)
    openDialog()
  }

  const switchView = () => {
    setShowChart(showChart => !showChart)
  }

  return (
    <div className='container padding full-width full-height'>
      <div className='flex-centered-container section-header'>
        <h2 className='label-txt' >Total: &#8377;{total}</h2>
        <span className='spacer'></span>
        {transactions && transactions.length > 0 &&
          <>
            <Button variant="contained" disableElevation
              className='submit' startIcon={<AddIcon />}
              size='small' onClick={handleAdd}>Add</Button>
            {showChart ?
              <IconButton size='small' onClick={switchView} color="default">
                <SignalCellularAltRoundedIcon />
              </IconButton> :
              <IconButton size='small' onClick={switchView} color="default">
                <DonutLargeOutlinedIcon />
              </IconButton>
            }
          </>
        }
      </div>
      {
        transactions && transactions.length > 0 && chartData
          ? showChart
            ? <Doughnut className='chart' data={chartData} />
            : <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((row: Aggregate, i: number) => (
                    <TableRow key={row.type} className='table-row'>
                      <StyledTableCell component="th" scope="row" align="center"
                        style={{
                          color: `${chartData.datasets[0].borderColor[i]}`,
                        }}>
                        {row.type}
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{
                        color: `${chartData.datasets[0].borderColor[i]}`,
                      }}>{row.amount}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          : <div className='image-container flex-centered-column'>
            <img src="/images/no-expenses.png" alt="" />
            <Button variant="contained"
              className='submit' startIcon={<AddIcon />}
              size='small' onClick={handleAdd}>
              Add Transactions
            </Button>
            <h4 className='text-center'>OR</h4>
            <ImportCsv />
          </div>
      }
    </div>
  )
}

export default Total