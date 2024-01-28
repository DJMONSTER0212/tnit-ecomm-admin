"use client";

import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {toast} from "react-hot-toast"

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

const formSchema = z.object({
    name: z.string().min(1),   // min length of 1 for the name of our store
    description : z.string().min(1)
})


export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading,setLoading] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),   /// for out form to get validated by zod
        defaultValues: {
            name: "",
            description :""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post("/api/store",values)
            // console.log(response.data);

            toast.success("Store Created Successfully")
            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            toast.error("SomeThing Went Wrong.")
        }finally{
            setLoading(false);
        }
    }

    return (
        <Modal
            title="Create Store"
            description="Add a new Store to manage your Products"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form  {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input          placeholder="E-commerce"
                                            {...field}
                                            disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>
                                            Description
                                        </FormLabel>
                                        <FormControl>
                                            <Input          placeholder="Description"
                                            {...field}
                                            disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button variant={"outline"}
                                    disabled={loading}
                                onClick={storeModal.onClose}>
                                    Cancel
                                </Button>
                                <Button disabled={loading} type="submit" >
                                    Continue
                                </Button>
                            </div>


                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};