import Layout from '@/components/layout';
import '../styles/globals.css'

export const metadata = {
  title: 'Burger shot',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
