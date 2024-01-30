export default function AuthLayout({
    children
}:{children :React.ReactNode}){
    return (
        <div className="flex my-20 items-center justify-center h-full ">
            {children}
        </div>
    )
}