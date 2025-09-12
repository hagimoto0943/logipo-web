import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'logical',
      title: '論理的推論',
      description: '論理的な思考パターンを身につける',
      problems: 45,
      difficulty: 'beginner'
    },
    {
      id: 'numerical',
      title: '数的処理',
      description: '数値を使った論理的な処理能力を向上させる',
      problems: 32,
      difficulty: 'intermediate'
    },
    {
      id: 'reading',
      title: '図表読解',
      description: 'データを正確に読み取り分析する能力を鍛える',
      problems: 28,
      difficulty: 'advanced'
    },
    {
      id: 'pattern',
      title: 'パターン認識',
      description: '規則性を見つけて論理的に推論する',
      problems: 38,
      difficulty: 'intermediate'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'advanced': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  const getDifficultyText = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return '初級';
      case 'intermediate': return '中級';
      case 'advanced': return '上級';
      default: return '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">トレーニング</h1>
        <p className="text-muted-foreground">論理的思考力を向上させるトレーニングを始めましょう</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {categories.map((category) => (
          <Card key={category.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <span className={`text-sm font-medium ${getDifficultyColor(category.difficulty)}`}>
                  {getDifficultyText(category.difficulty)}
                </span>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {category.problems}問の問題
                </span>
                <Button 
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  開始
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>今日のおすすめ</CardTitle>
          <CardDescription>あなたの学習進捗に基づいたおすすめコンテンツ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
              <div>
                <h4 className="font-semibold">論理的推論 - 基礎問題セット</h4>
                <p className="text-sm text-muted-foreground">推定完了時間: 15分</p>
              </div>
              <Button variant="outline" size="sm">挑戦する</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-semibold">復習モード - 間違えた問題</h4>
                <p className="text-sm text-muted-foreground">5問の復習問題</p>
              </div>
              <Button variant="outline" size="sm">復習する</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{selectedCategory.title}を開始</CardTitle>
              <CardDescription>準備はよろしいですか？</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  この分野には{selectedCategory.problems}問の問題があります
                </p>
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1" 
                    onClick={() => {
                      setSelectedCategory(null);
                    }}
                  >
                    今すぐ開始
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCategory(null)}
                  >
                    キャンセル
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
