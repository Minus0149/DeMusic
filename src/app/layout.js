import './globals.css'

export const metadata = {
  title: 'Home',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 p-0">
      <body className="bg-black h-screen w-screen">{children}</body>
    </html>
  )
}
