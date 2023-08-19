import { TableCell, TableRow, styled, tableCellClasses } from "@mui/material";
import { CHART_COLORS } from "./data";
import { Aggregate, ExpenseType, Transaction } from "./interface";

export namespace Utils {
  // COLOR GEN
  export function componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  export function rgbToHex(r: number, g: number, b: number): string {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  // Budget Buddy
  export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  export const parseStringToDate = (dateString: string): Date | null => {
    const parts = dateString.split('-');

    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are zero-based
      const year = parseInt(parts[2], 10);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }
    return null; // Invalid format
  }

  export const generateRandomColor = (count: number): string[] => {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      colors.push(CHART_COLORS[i % CHART_COLORS.length]);
    }
    return colors;
  }

  export const calculateTotalAmount = (data: Transaction[]): number => {
    return data.reduce((total: number, item: Transaction) => total + item.amount, 0);
  }

  export const calculateData = (transactions: Transaction[]): Aggregate[] => {
    // Group and aggregate data by type
    const groupedData: Aggregate[] = transactions.reduce((result: { type: ExpenseType; amount: number; }[], item: Transaction) => {
      const existingItem = result.find(group => group.type === item.type);
      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        result.push({ type: item.type, amount: item.amount });
      }
      return result;
    }, []);

    return groupedData
  }


  export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // Mortage Calc 
  export const fixInt = (num: number): number => {
    return parseFloat(num.toFixed(0))
  }
}