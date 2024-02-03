"use client";

import React, { useState } from "react";
import { CustomerColumn } from "./colums";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash, View, ViewIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ViewHorizontalIcon } from "@radix-ui/react-icons";
// import { AlertModal } from "@/components/modals/alert-modal";

interface CellActionProps {
    data: CustomerColumn;

}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Customer Id Copied to clipboard.")
    };


    const router = useRouter();
    const params = useParams();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="h-8 w-8 p-0">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/customers/${data.id}`)}>
                        <ViewIcon className="mr-2 h-4 w-4" />
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Id
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}