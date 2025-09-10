import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button.jsx";

export default function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/app" className="text-xl font-bold text-primary">
              Logipop
            </Link>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/app" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/app' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              トレーニング
            </Link>
            <Link 
              to="/app/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/app/dashboard' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              ダッシュボード
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              設定
            </Button>
            <Button variant="ghost" size="sm">
              ログアウト
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
