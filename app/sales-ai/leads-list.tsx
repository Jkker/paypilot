import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SearchIcon, FilterIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

// Mock data for leads
const mockLeads = [
  { id: 'LD001', name: "John Doe", company: "Tech Corp", email: "john@techcorp.com", phone: "+1 (555) 123-4567", status: "New", interest: "Payment Processing" },
  { id: 'LD002', name: "Jane Smith", company: "E-commerce Inc", email: "jane@ecommerce.com", phone: "+1 (555) 987-6543", status: "Contacted", interest: "Fraud Prevention" },
  { id: 'LD003', name: "Bob Johnson", company: "Retail Solutions", email: "bob@retailsol.com", phone: "+1 (555) 246-8135", status: "Qualified", interest: "Multi-Currency Support" },
  { id: 'LD004', name: "Alice Brown", company: "Global Traders", email: "alice@globaltraders.com", phone: "+1 (555) 369-2580", status: "Proposal", interest: "Payment Processing" },
  { id: 'LD005', name: "Charlie Wilson", company: "Local Shop", email: "charlie@localshop.com", phone: "+1 (555) 147-2589", status: "New", interest: "POS Integration" },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const leadsPerPage = 4

  const filteredLeads = mockLeads.filter(lead => 
    (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter.length === 0 || statusFilter.includes(lead.status))
  )

  const indexOfLastLead = currentPage * leadsPerPage
  const indexOfFirstLead = indexOfLastLead - leadsPerPage
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Leads List</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search leads..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter by Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["New", "Contacted", "Qualified", "Proposal"].map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={statusFilter.includes(status)}
                onCheckedChange={(checked) => {
                  setStatusFilter(prev =>
                    checked
                      ? [...prev, status]
                      : prev.filter(item => item !== status)
                  )
                }}
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Interest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <Link href={`/leads/${lead.id}`} className="text-primary hover:underline">
                  {lead.id}
                </Link>
              </TableCell>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>{lead.interest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstLead + 1} to {Math.min(indexOfLastLead, filteredLeads.length)} of {filteredLeads.length} leads
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastLead >= filteredLeads.length}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}