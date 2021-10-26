import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from '@chakra-ui/react'
import { useTable } from 'react-table'

export default function BaseTable({ columns, data, isRefreshing }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <>
      {isRefreshing ? (
        <Spinner />
      ) : (
        <Table
          {...getTableProps()}
          className="border border-gray-100 shadow-sm"
        >
          <Thead className="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-100">
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </>
  )
}
