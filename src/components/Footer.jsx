export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} Sumanth — Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React.js
          </a>{' '}
          &amp; pure CSS animations.
        </span>

        <button className="to-top" onClick={toTop}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  )
}
