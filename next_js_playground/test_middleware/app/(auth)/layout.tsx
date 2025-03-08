export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>header</div>
            <div>
                {children}
            </div>
            <div>footer</div>
        </>
    );
}
