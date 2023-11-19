import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    ticket: "ST123",
    subject: "Hello",
    status: "open",
    
  },
  {
    ticket: "INV002",
    subject: "World",
    status: "open",
    
  },
  
]


function TableTemplate() {
    
        
      
  return (
    <div>
      <Table className="border">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ticket #</TableHead>
          <TableHead>Subject</TableHead>
          
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.ticket}>
            <TableCell className="font-medium">{invoice.ticket}</TableCell>
            <TableCell>{invoice.subject}</TableCell>
            {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
            <TableCell className="text-right">{invoice.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
    </div>
  )
}

export default TableTemplate
