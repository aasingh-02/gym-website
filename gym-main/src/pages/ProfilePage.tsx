import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Ruler, Weight, Target, Activity } from "lucide-react";

interface UserProfile {
  name: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  activityLevel: string;
  goal: string;
  bmr: number;
  tdee: number;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Your Name",
    age: 25,
    height: 175,
    weight: 70,
    activityLevel: "moderately_active",
    goal: "maintain",
    bmr: 0,
    tdee: 0
  });

  const [isEditing, setIsEditing] = useState(false);

  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = (weight: number, height: number, age: number, gender: string = "male") => {
    if (gender === "male") {
      return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
  };

  // Calculate TDEE based on activity level
  const calculateTDEE = (bmr: number, activityLevel: string) => {
    const multipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extremely_active: 1.9
    };
    return bmr * (multipliers[activityLevel as keyof typeof multipliers] || 1.55);
  };

  // Update calculations when profile changes
  const updateCalculations = (newProfile: UserProfile) => {
    const bmr = calculateBMR(newProfile.weight, newProfile.height, newProfile.age);
    const tdee = calculateTDEE(bmr, newProfile.activityLevel);
    return { ...newProfile, bmr, tdee };
  };

  const handleSave = () => {
    const updatedProfile = updateCalculations(profile);
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  const getGoalCalories = () => {
    switch (profile.goal) {
      case "lose": return Math.round(profile.tdee - 500); // 500 cal deficit
      case "gain": return Math.round(profile.tdee + 500); // 500 cal surplus
      default: return Math.round(profile.tdee); // maintenance
    }
  };

  const activityLevels = [
    { value: "sedentary", label: "Sedentary (little/no exercise)" },
    { value: "lightly_active", label: "Lightly Active (light exercise 1-3 days/week)" },
    { value: "moderately_active", label: "Moderately Active (moderate exercise 3-5 days/week)" },
    { value: "very_active", label: "Very Active (hard exercise 6-7 days/week)" },
    { value: "extremely_active", label: "Extremely Active (very hard exercise, physical job)" }
  ];

  const goals = [
    { value: "lose", label: "Lose Weight" },
    { value: "maintain", label: "Maintain Weight" },
    { value: "gain", label: "Gain Weight" }
  ];

  // Initialize calculations on first load
  useState(() => {
    setProfile(prev => updateCalculations(prev));
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your stats and calorie requirements
            </p>
          </div>
          <Button 
            variant={isEditing ? "outline" : "hero"}
            onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Name</label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Age</label>
                    <Input
                      type="number"
                      value={profile.age}
                      onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Height (cm)</label>
                    <Input
                      type="number"
                      value={profile.height}
                      onChange={(e) => setProfile({ ...profile, height: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Weight (kg)</label>
                    <Input
                      type="number"
                      value={profile.weight}
                      onChange={(e) => setProfile({ ...profile, weight: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Activity Level</label>
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={profile.activityLevel}
                      onChange={(e) => setProfile({ ...profile, activityLevel: e.target.value })}
                    >
                      {activityLevels.map(level => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">Goal</label>
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={profile.goal}
                      onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
                    >
                      {goals.map(goal => (
                        <option key={goal.value} value={goal.value}>{goal.label}</option>
                      ))}
                    </select>
                  </div>
                  <Button variant="hero" onClick={handleSave} className="w-full">
                    Save Changes
                  </Button>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium text-card-foreground">{profile.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Age</span>
                    <span className="font-medium text-card-foreground">{profile.age} years</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Height
                    </span>
                    <span className="font-medium text-card-foreground">{profile.height} cm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Weight className="h-4 w-4" />
                      Weight
                    </span>
                    <span className="font-medium text-card-foreground">{profile.weight} kg</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      Activity Level
                    </span>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {activityLevels.find(l => l.value === profile.activityLevel)?.label.split(" ")[0]}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Goal
                    </span>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      {goals.find(g => g.value === profile.goal)?.label}
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Calorie Requirements */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                <Target className="h-5 w-5" />
                Calorie Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {getGoalCalories()}
                  </div>
                  <div className="text-sm text-muted-foreground">Daily Calories for Goal</div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">BMR (Base Metabolic Rate)</span>
                    <span className="font-medium text-foreground">{Math.round(profile.bmr)} cal</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">TDEE (Total Daily Energy)</span>
                    <span className="font-medium text-foreground">{Math.round(profile.tdee)} cal</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Macro Recommendations</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-accent/10 rounded">
                      <div className="text-lg font-bold text-accent">
                        {Math.round(getGoalCalories() * 0.3 / 4)}g
                      </div>
                      <div className="text-xs text-muted-foreground">Protein</div>
                    </div>
                    <div className="p-2 bg-green-500/10 rounded">
                      <div className="text-lg font-bold text-green-500">
                        {Math.round(getGoalCalories() * 0.4 / 4)}g
                      </div>
                      <div className="text-xs text-muted-foreground">Carbs</div>
                    </div>
                    <div className="p-2 bg-blue-500/10 rounded">
                      <div className="text-lg font-bold text-blue-500">
                        {Math.round(getGoalCalories() * 0.3 / 9)}g
                      </div>
                      <div className="text-xs text-muted-foreground">Fat</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;