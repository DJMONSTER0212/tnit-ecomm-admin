"use client";
import React from 'react'
import { useState } from 'react'
import * as z from "zod"
import { set, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ImageUpload from "@/components/ui/image-upload";
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    imageUrl: z.string()
})

type imageFromValues = z.infer<typeof formSchema>

interface settingsFormProps {
    initialData: "" | null
}


const page: React.FC<settingsFormProps> = ({
    initialData
}) => {
    const [loading , setLoading] = useState(false)

    const form = useForm<imageFromValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            imageUrl: ""
        }
    })

    const onSubmit = async (data: imageFromValues) => {
        try {
            setLoading(true);
            // if(initialData){
                console.log(data)
            //     await axios.patch(`/api/${params.storeId}/billboards/${params.billboardId}`, data);
            // }else{
            //     await axios.post(`/api/${params.storeId}/billboards`, data);
            // }
            // router.refresh();
            // router.push(`/${params.storeId}/billboards`)
            toast.success("Hl")
        } catch (error) {
            toast.error("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Background Image</FormLabel>
                                <FormControl>
                                    <ImageUpload value={field.value ? [field.value] : []}
                                        disabled={loading} onChange={(url) => field.onChange(url)}
                                        onRemove={() => field.onChange("")}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={loading} className="ml-auto" type="submit">hello</Button>
                </form>
            </Form>
        </div>
    )
}

export default page
