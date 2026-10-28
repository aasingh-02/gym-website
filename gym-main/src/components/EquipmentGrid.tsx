import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

interface Equipment {
  id: string;
  name: string;
  category: string;
  targetMuscles: string[];
  imageUrl?: string;
  exerciseCount: number;
}

const EquipmentGrid = () => {
  const equipment: Equipment[] = [
    { id: "dumbbells", name: "Dumbbells", category: "Free Weights", targetMuscles: ["Full Body"], imageUrl: "/dumbell.png", exerciseCount: 6 },
    { id: "barbells", name: "Barbells", category: "Free Weights", targetMuscles: ["Full Body"], imageUrl: "/barbell.png", exerciseCount: 5 },
    { id: "weight-plates", name: "Weight Plates", category: "Free Weights", targetMuscles: ["Full Body"], imageUrl: "/weightPlate.png", exerciseCount: 0 },
    { id: "kettlebells", name: "Kettlebells", category: "Free Weights", targetMuscles: ["Full Body", "Core"], imageUrl: "/kettlebell.png", exerciseCount: 5 },
    { id: "leg-press", name: "Leg Press Machine", category: "Machines", targetMuscles: ["Legs", "Glutes"], imageUrl: "/legPress.png", exerciseCount: 1 },
    { id: "chest-press", name: "Chest Press Machine", category: "Machines", targetMuscles: ["Chest", "Triceps"], imageUrl: "/chestPress.png", exerciseCount: 1 },
    { id: "lat-pulldown", name: "Lat Pulldown Machine", category: "Machines", targetMuscles: ["Back", "Biceps"], imageUrl: "/latPulldown.png", exerciseCount: 2 },
    { id: "cable-machine", name: "Cable Machine", category: "Machines", targetMuscles: ["Full Body"], imageUrl: "/cable.png", exerciseCount: 5 },
    { id: "smith-machine", name: "Smith Machine", category: "Machines", targetMuscles: ["Full Body"], imageUrl: "/smithMachine.png", exerciseCount: 4 },
    { id: "bench", name: "Bench (Flat/Incline/Decline)", category: "Benches & Racks", targetMuscles: ["Chest", "Core", "Legs"], imageUrl: "/bench.png", exerciseCount: 4 },
    { id: "power-rack", name: "Power Rack", category: "Benches & Racks", targetMuscles: ["Full Body"], imageUrl: "/powerRack.png", exerciseCount: 5 },
    { id: "squat-rack", name: "Squat Rack", category: "Benches & Racks", targetMuscles: ["Legs", "Core"], imageUrl: "/squatRack.png", exerciseCount: 3 },
    { id: "treadmill", name: "Treadmill", category: "Cardio", targetMuscles: ["Legs", "Cardio"], imageUrl: "/treadmill.png", exerciseCount: 4 },
    { id: "stationary-bike", name: "Stationary Bike", category: "Cardio", targetMuscles: ["Legs", "Cardio"], imageUrl: "/bike.png", exerciseCount: 3 },
    { id: "elliptical", name: "Elliptical Trainer", category: "Cardio", targetMuscles: ["Full Body", "Cardio"], imageUrl: "/ellip.png", exerciseCount: 2 },
    { id: "rowing-machine", name: "Rowing Machine", category: "Cardio", targetMuscles: ["Full Body", "Cardio"], imageUrl: "/rowing.png", exerciseCount: 2 },
    { id: "stair-climber", name: "Stair Climber", category: "Cardio", targetMuscles: ["Legs", "Cardio"], imageUrl: "/stair.png", exerciseCount: 1 },
    { id: "pull-up-bar", name: "Pull-Up Bar", category: "Functional", targetMuscles: ["Back", "Arms", "Core"], imageUrl: "/pullUp.png", exerciseCount: 3 },
    { id: "dip-station", name: "Dip Station", category: "Functional", targetMuscles: ["Triceps", "Chest", "Core"], imageUrl: "/dip.png", exerciseCount: 3 },
    { id: "battle-ropes", name: "Battle Ropes", category: "Functional", targetMuscles: ["Full Body", "Cardio"], imageUrl: "/battle.png", exerciseCount: 3 },
    { id: "medicine-balls", name: "Medicine Balls", category: "Functional", targetMuscles: ["Core", "Full Body"], imageUrl: "/medicine.png", exerciseCount: 4 },
    { id: "resistance-bands", name: "Resistance Bands", category: "Functional", targetMuscles: ["Full Body"], imageUrl: "/resistance.png", exerciseCount: 4 },
    { id: "trx", name: "TRX Suspension Trainer", category: "Functional", targetMuscles: ["Full Body", "Core"], imageUrl: "/trx.png", exerciseCount: 4 },
    { id: "foam-roller", name: "Foam Roller", category: "Recovery", targetMuscles: ["Recovery"], imageUrl: "/foam.png", exerciseCount: 4 },
    { id: "yoga-mat", name: "Yoga Mat", category: "Flexibility", targetMuscles: ["Flexibility", "Core"], imageUrl: "/yogaMat.png", exerciseCount: 4 },
    { id: "stretch-bands", name: "Stretch Bands", category: "Flexibility", targetMuscles: ["Flexibility"], imageUrl: "/stretch.png", exerciseCount: 4 }
  ];

  const categories = [...new Set(equipment.map(item => item.category))];

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center">
            <div className="w-1 h-6 bg-primary mr-3"></div>
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment
              .filter(item => item.category === category)
              .map(item => (
                <Link key={item.id} to={`/equipment/${item.id}`}>
                  <Card className="bg-gradient-card border-border hover:border-primary/50 transition-smooth group cursor-pointer h-full">
                    <CardContent className="p-0">
                      {/* Image or placeholder */}
                      <div className="aspect-video bg-muted rounded-t-lg border-b border-border group-hover:bg-muted/80 transition-smooth overflow-hidden">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-center space-y-2">
                            <div className="bg-primary/20 p-3 rounded-full mx-auto w-fit">
                              <Play className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">
                              Equipment Photo
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-3">
                        <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-smooth">
                          {item.name}
                        </h3>

                        <div className="flex flex-wrap gap-1">
                          {item.targetMuscles.map(muscle => (
                            <Badge
                              key={muscle}
                              variant="secondary"
                              className="text-xs bg-secondary/50"
                            >
                              {muscle}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-muted-foreground">
                          {item.exerciseCount} {item.exerciseCount === 1 ? "Exercise" : "Exercises"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentGrid;
