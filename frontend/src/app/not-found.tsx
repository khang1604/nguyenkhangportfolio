import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-sans"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="space-y-4 max-w-md">
        <span className="text-xs font-mono font-semibold px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
          HTTP 404
        </span>
        <h1 className="text-4xl font-bold font-mono tracking-tight">
          Trang không tồn tại
        </h1>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
