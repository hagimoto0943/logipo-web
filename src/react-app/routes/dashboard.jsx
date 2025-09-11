import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card.jsx";
import { Button } from "@components/ui/button";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ダッシュボード</h1>
        <p className="text-muted-foreground">学習の進捗を確認しましょう</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>今日の学習時間</CardTitle>
            <CardDescription>本日の累計学習時間</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45分</div>
            <p className="text-xs text-muted-foreground">目標: 60分</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>完了した問題数</CardTitle>
            <CardDescription>今週の累計</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23問</div>
            <p className="text-xs text-muted-foreground">先週比: +15%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>正答率</CardTitle>
            <CardDescription>今月の平均正答率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">先月比: +5%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>学習進捗</CardTitle>
            <CardDescription>各分野の習熟度</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>論理的推論</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>数的処理</span>
                <span>72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>図表読解</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>今週のおすすめ</CardTitle>
            <CardDescription>苦手分野の克服に取り組みましょう</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">図表読解 強化コース</h4>
              <p className="text-sm text-muted-foreground mb-3">
                データ分析力を向上させる実践的な問題集
              </p>
              <Button size="sm">今すぐ始める</Button>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">時間制限チャレンジ</h4>
              <p className="text-sm text-muted-foreground mb-3">
                スピードアップのための集中トレーニング
              </p>
              <Button size="sm" variant="outline">詳細を見る</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
