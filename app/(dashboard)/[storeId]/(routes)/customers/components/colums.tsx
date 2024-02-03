"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type CustomerColumn = {
    id : string,
    contact : string,
    firstName : string,
    email : string,
    createdAt : string
}

export const columns : ColumnDef<CustomerColumn>[] =[

    {
        accessorKey : "firstName",
        header :"Name"
    },
    {
        accessorKey :"contact",
        header :"Contact"
    },
    {
        accessorKey :"email",
        header :"Mail"
    },
    {
        id : "actions",
        cell :({row}) => <CellAction data={row.original} />
    }

]