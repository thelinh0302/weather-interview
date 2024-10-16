// Table.tsx
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface TableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
}

const TableCustom = <TData extends object>({
  columns,
  data,
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full text-[#333] rounded-[15px] shadow-sm p-[24px]">
      <h2>Table</h2>
      <table className="bg-white w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="pt-[10px] border-b-[1px]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="uppercase text-[#A0AEC0] text-[10px] p-[10px] text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`${
                index !== table.getRowModel().rows.length - 1
                  ? "border-b-[1px]"
                  : ""
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-[10px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
