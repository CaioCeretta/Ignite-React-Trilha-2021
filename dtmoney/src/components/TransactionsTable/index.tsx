import { Container } from './styles';


export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Development</td>
            <td className="deposit">U$ 1000,00</td>
            <td>Website</td>
            <td>2023/10/02</td>
          </tr>
          <tr >
            <td>Rentm</td>
            <td className="withdraw">- U$ 500,00</td>
            <td>Living</td>
            <td>2023/10/02</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}