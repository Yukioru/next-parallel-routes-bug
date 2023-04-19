import Link from 'next/link';

function RootLayout({ children, extension }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex' }}>
        <aside>
          <div style={{ border: '1px solid red', height: 400, minWidth: 100 }}>
            <h3>Sidebar</h3>
            <div style={{ border: '1px solid blue' }}>{extension}</div>
          </div>
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
