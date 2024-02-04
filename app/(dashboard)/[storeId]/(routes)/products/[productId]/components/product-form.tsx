import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import ImageUpload from '@/components/ui/image-upload'
import { zodResolver } from '@hookform/resolvers/zod';
import { Product } from '@prisma/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"


const formSchema = z.object({
    name: z.string().min(1),
    images: z.object({ url: z.string() }).array(),
    price: z.coerce.number().min(1),
    categoryId: z.string().min(1),
    colorId: z.string().min(1),
    sizeId: z.string().min(1),
    isFeatured: z.boolean().default(false).optional(),
    isArchived: z.boolean().default(false).optional(),

});
type ProductFormValues = z.infer<typeof formSchema>;


interface ProductFormProps {
    initialData: Product | null
    // categories : Category[];
    // colors : Color[];
    // sizes : Size[];
}




const productForm: React.FC<ProductFormProps> = ({
    initialData
}) => {

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? {
            ...initialData,
            price: parseFloat(String(initialData)),
        } : {
            name: "",
            images: [],
            price: 0,
            categoryId: "",
            colorId: "",
            sizeId: "",
            isFeatured: false,
            isArchived: false,
        }

    });


    return (
        <div>
            <Form {...form}>
                <form >
                    <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Images</FormLabel>
                                <FormControl>
                                    <ImageUpload value={field.value.map((image) => image.url)}
                                        onChange={(url) => field.onChange([...field.value, { url }])}
                                        onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
            {/* <ImageUpload value={field.value.map((image) => image.url)}
                disabled={loading} onChange={(url) => field.onChange([...field.value, { url }])}
                onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
            /> */}

        </div>
    )
}

export default productForm
