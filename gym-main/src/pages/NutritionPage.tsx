import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Utensils, Trash2, Calculator } from "lucide-react";

interface FoodEntry {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date: string;
}

const NutritionPage = () => {
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>([
    {
      id: "1",
      name: "Chicken Breast",
      quantity: 200,
      unit: "g",
      calories: 330,
      protein: 62,
      carbs: 0,
      fat: 7,
      date: new Date().toISOString().split('T')[0]
    },
    {
      id: "2",
      name: "Brown Rice",
      quantity: 100,
      unit: "g",
      calories: 350,
      protein: 7,
      carbs: 72,
      fat: 3,
      date: new Date().toISOString().split('T')[0]
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newFood, setNewFood] = useState({
    name: "",
    quantity: "",
    unit: "g",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });

  const handleAddFood = () => {
    if (newFood.name.trim() && newFood.quantity && newFood.calories) {
      const food: FoodEntry = {
        id: Date.now().toString(),
        name: newFood.name,
        quantity: parseFloat(newFood.quantity),
        unit: newFood.unit,
        calories: parseFloat(newFood.calories),
        protein: parseFloat(newFood.protein) || 0,
        carbs: parseFloat(newFood.carbs) || 0,
        fat: parseFloat(newFood.fat) || 0,
        date: new Date().toISOString().split('T')[0]
      };
      setFoodEntries([...foodEntries, food]);
      setNewFood({ name: "", quantity: "", unit: "g", calories: "", protein: "", carbs: "", fat: "" });
      setIsAdding(false);
    }
  };

  const handleDeleteFood = (id: string) => {
    setFoodEntries(foodEntries.filter(food => food.id !== id));
  };

  const todayEntries = foodEntries.filter(entry => entry.date === new Date().toISOString().split('T')[0]);
  
  const todayTotals = todayEntries.reduce((totals, entry) => ({
    calories: totals.calories + entry.calories,
    protein: totals.protein + entry.protein,
    carbs: totals.carbs + entry.carbs,
    fat: totals.fat + entry.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Nutrition Tracker
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your meals and monitor your daily nutrition
            </p>
          </div>
          <Button 
            variant="hero" 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Food
          </Button>
        </div>

        {/* Daily Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {Math.round(todayTotals.calories)}
              </div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {Math.round(todayTotals.protein)}g
              </div>
              <div className="text-sm text-muted-foreground">Protein</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">
                {Math.round(todayTotals.carbs)}g
              </div>
              <div className="text-sm text-muted-foreground">Carbs</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">
                {Math.round(todayTotals.fat)}g
              </div>
              <div className="text-sm text-muted-foreground">Fat</div>
            </CardContent>
          </Card>
        </div>

        {/* Add Food Form */}
        {isAdding && (
          <Card className="mb-8 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Add Food Entry
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Food name..."
                  value={newFood.name}
                  onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                />
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Quantity"
                    value={newFood.quantity}
                    onChange={(e) => setNewFood({ ...newFood, quantity: e.target.value })}
                  />
                  <select 
                    className="flex h-10 w-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={newFood.unit}
                    onChange={(e) => setNewFood({ ...newFood, unit: e.target.value })}
                  >
                    <option value="g">g</option>
                    <option value="oz">oz</option>
                    <option value="cup">cup</option>
                    <option value="piece">piece</option>
                  </select>
                </div>
                <Input
                  type="number"
                  placeholder="Calories"
                  value={newFood.calories}
                  onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="number"
                  placeholder="Protein (g)"
                  value={newFood.protein}
                  onChange={(e) => setNewFood({ ...newFood, protein: e.target.value })}
                />
                <Input
                  type="number"
                  placeholder="Carbs (g)"
                  value={newFood.carbs}
                  onChange={(e) => setNewFood({ ...newFood, carbs: e.target.value })}
                />
                <Input
                  type="number"
                  placeholder="Fat (g)"
                  value={newFood.fat}
                  onChange={(e) => setNewFood({ ...newFood, fat: e.target.value })}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="hero" onClick={handleAddFood}>
                  Add Food
                </Button>
                <Button variant="outline" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Today's Food Entries */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center">
            <div className="w-1 h-6 bg-primary mr-3"></div>
            Today's Meals
          </h2>
          
          {todayEntries.length === 0 ? (
            <div className="text-center py-16">
              <Utensils className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No meals logged today</h3>
              <p className="text-muted-foreground mb-4">Start tracking your nutrition</p>
              <Button variant="hero" onClick={() => setIsAdding(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Meal
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {todayEntries.map((food) => (
                <Card key={food.id} className="bg-gradient-card border-border group hover:border-primary/50 transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-card-foreground text-lg mb-1">
                          {food.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {food.quantity} {food.unit}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {food.calories} cal
                          </Badge>
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            {food.protein}g protein
                          </Badge>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                            {food.carbs}g carbs
                          </Badge>
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                            {food.fat}g fat
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteFood(food.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NutritionPage;