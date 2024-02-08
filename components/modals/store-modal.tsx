"use client";

import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-hot-toast"

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios";
import ImageUpload from "../ui/image-upload";


const formSchema = z.object({
    name: z.string().min(1),   // min length of 1 for the name of our store
    description: z.string().min(1),
    gstin: z.string(),
    pan: z.string(),
    addressLine1: z.string().min(1),
    addressLine2: z.string().min(1),
    contactno: z.string().min(10),
    state: z.string().min(1),
    pincode: z.string().min(1),
    city: z.string().min(1),
    logoUrl: z.string(),
})


export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),   /// for out form to get validated by zod
        defaultValues: {
            name: "",
            description: "",
            gstin: "",
            pan: "",
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            state: "",
            city: "",
            contactno: "",
            logoUrl: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post("/api/store", values)
            // console.log(response.data);

            toast.success("Store Created Successfully")
            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            toast.error("SomeThing Went Wrong.")
        } finally {
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
                            <Tabs defaultValue="account" className="w-[400px]">
                                <TabsContent className="h-[100vh]" value="logo">
                                    <>

                                    </>
                                </TabsContent>
                                <TabsContent value="account">
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="E-commerce"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Description
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Description"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                </TabsContent>
                                <TabsContent value="address">
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="addressLine1"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Address line1
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="address"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="addressLine2"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Address line2
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="address"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        city
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="city"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pincode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Pin Code
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="pincode"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="state"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Pin Code
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="state"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="contactno"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Contact
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="contact"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                </TabsContent>
                                <TabsContent value="password">
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="gstin"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        GST No
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="GST No."
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pan"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Pan Card No.
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="PAN No"
                                                            {...field}
                                                            disabled={loading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
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
                                                Create
                                            </Button>
                                        </div>
                                    </>
                                </TabsContent>
                                <TabsList className="justify-center items-center w-full bg-inherit mt-2">
                                    <TabsTrigger value="logo" >Logo</TabsTrigger>
                                    <TabsTrigger value="account" >Basic</TabsTrigger>
                                    <TabsTrigger value="address" >Address</TabsTrigger>
                                    <TabsTrigger value="password">Verification</TabsTrigger>
                                </TabsList>
                            </Tabs>


                            <FormField
                                control={form.control}
                                name="logoUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Logo
                                        </FormLabel>
                                        <FormControl>
                                            <div className="h-10 w-10">
                                                <ImageUpload value={field.value ? [field.value] : []}
                                                    disabled={loading} onChange={(url) => field.onChange(url)}
                                                    onRemove={() => field.onChange("")}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};