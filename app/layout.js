import Link from 'next/link';
import Sidebar from '../components/Sidebar';

function RootLayout({ children, extension }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex' }}>
        <aside>
          <Sidebar extension={extension} />
        </aside>
        <div>
          <div>
            <b>Soft navigation</b>
            <Link href="/">To "/"</Link>{' '}
            <Link href="/overview">To "/overview"</Link>{' '}
            <Link href="/demo">To "/demo"</Link>
          </div>
          <div>
            <b>Hard navigation</b>
            <a href="/">To "/"</a> <a href="/overview">To "/overview"</a> <a href="/demo">To "/demo"</a>
          </div>
          <hr />
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
