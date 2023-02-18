

import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, val) => {
  //   if(val.type === 'deposit') {
  //     return acc + val.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce((acc, value) => {
    if (value.type === 'deposit') {
      acc.deposits += value.amount;
      acc.total += value.amount
    }
    if (value.type === 'withdraw') {
      acc.withdraws += value.amount;
      acc.total -= value.amount;
    }

    return acc;

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>

      <div>
        <header>
          <p>Entries</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}          
        </strong>
      </div>


    </Container>
  )
}