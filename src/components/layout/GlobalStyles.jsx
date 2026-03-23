/**
 * Injects global CSS (keyframes, card/input utility classes, scrollbar).
 * Rendered once at the root of the app.
 */
export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500;600;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      .card {
        background:   var(--bg-secondary);
        border:       1px solid var(--border);
        border-radius: 16px;
        padding:       20px;
        box-shadow:    var(--shadow);
        transition:    box-shadow 0.2s, transform 0.2s;
      }

      .hover-lift:hover {
        transform:  translateY(-2px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      }

      .input {
        background:   var(--bg-tertiary);
        border:       1px solid var(--border);
        border-radius: 10px;
        padding:       9px 13px;
        font-size:     13px;
        color:         var(--text-primary);
        width:         100%;
        font-family:   inherit;
        outline:       none;
        transition:    border-color 0.15s;
      }
      .input:focus { border-color: #10b981; }

      @keyframes spin  { to { transform: rotate(360deg); } }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

      .page-enter { animation: fadeIn 0.25s ease both; }

      ::-webkit-scrollbar       { width: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }
    `}</style>
  )
}
