import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Target, Info } from "lucide-react";

const EquipmentDetailPage = () => {
  const { equipmentId } = useParams();

  // Equipment data with exercises
  const equipmentData: { [key: string]: any } = {
    "dumbbells": {
      name: "Dumbbells",
      category: "Free Weights",
      description: "Versatile weights perfect for isolation and compound movements. Dumbbells allow for unilateral training, helping to correct muscle imbalances and improve stabilization.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Dumbbell Bench Press",
          videoUrl:"https://www.youtube.com/embed/tf--Qe3yEfs",
          targetMuscles: ["Chest", "Triceps", "Shoulders"],
          description: "Lie on a bench, press dumbbells up from chest level. Allows for greater range of motion than barbell bench press.",
          instructions: "1. Lie flat on bench\n2. Hold dumbbells at chest level\n3. Press straight up\n4. Lower with control"
        },
        {
          name: "Dumbbell Shoulder Press",
          videoUrl:"https://www.youtube.com/embed/TcVgUCm-pyM",
          targetMuscles: ["Shoulders", "Triceps"],
          description: "Seated or standing overhead press targeting deltoids. Great for building shoulder strength and stability.",
          instructions: "1. Start with dumbbells at shoulder height\n2. Press overhead\n3. Lower with control\n4. Keep core engaged"
        },
        {
          name: "Dumbbell Lunges",
          videoUrl:"https://www.youtube.com/embed/XvD0fvjWs-4",
          targetMuscles: ["Quads", "Glutes", "Hamstrings"],
          description: "Step forward into lunge position while holding dumbbells. Excellent for unilateral leg development.",
          instructions: "1. Hold dumbbells at sides\n2. Step forward into lunge\n3. Lower back knee toward ground\n4. Push back to starting position"
        },
        {
          name: "Dumbbell Rows",
          videoUrl:"https://www.youtube.com/embed/qN54-QNO1eQ",
          targetMuscles: ["Back", "Biceps"],
          description: "Pull dumbbells toward your torso to target the latissimus dorsi and rhomboids.",
          instructions: "1. Hinge at hips\n2. Pull dumbbells to sides\n3. Squeeze shoulder blades\n4. Lower with control"
        },
        {
          name: "Dumbbell Curls",
          videoUrl:"https://www.youtube.com/embed/XhIsIcjIbCw",
          targetMuscles: ["Biceps"],
          description: "Classic bicep exercise. Curl the weights while keeping elbows stationary.",
          instructions: "1. Hold dumbbells at sides\n2. Curl weights up\n3. Squeeze biceps at top\n4. Lower slowly"
        },
        {
          name: "Dumbbell Tricep Kickbacks",
          videoUrl:"https://www.youtube.com/embed/MlI2HzCzjv8",
          targetMuscles: ["Triceps"],
          description: "Extend dumbbells behind you to target the triceps. Focus on form over weight.",
          instructions: "1. Hinge forward at hips\n2. Keep upper arms parallel to floor\n3. Extend forearms back\n4. Squeeze triceps"
        }
      ]
    },
    "barbells": {
      name: "Barbells",
      category: "Free Weights",
      description: "Essential for compound movements and heavy lifting. Barbells allow you to load more weight than dumbbells and are perfect for building overall strength.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Barbell Squats",
          videoUrl:"https://www.youtube.com/embed/PaODzgexAfk",
          targetMuscles: ["Quads", "Glutes", "Core"],
          description: "The king of leg exercises. Place barbell on your upper back and squat down.",
          instructions: "1. Position bar on upper back\n2. Feet shoulder-width apart\n3. Squat down keeping chest up\n4. Drive through heels to stand"
        },
        {
          name: "Barbell Deadlifts",
          videoUrl:"https://www.youtube.com/embed/iQhsv8-pYUo",
          targetMuscles: ["Hamstrings", "Glutes", "Back"],
          description: "Hip hinge movement that targets the entire posterior chain.",
          instructions: "1. Bar over mid-foot\n2. Grip wider than legs\n3. Lift by extending hips and knees\n4. Keep bar close to body"
        },
        {
          name: "Barbell Bench Press",
          videoUrl:"https://www.youtube.com/embed/i06buX4DNHQ",
          targetMuscles: ["Chest", "Triceps", "Shoulders"],
          description: "Classic upper body strength builder. Press the bar from chest to full extension.",
          instructions: "1. Lie on bench, grip bar\n2. Lower to chest\n3. Press up to full extension\n4. Keep feet on ground"
        },
        {
          name: "Barbell Overhead Press",
          videoUrl:"https://www.youtube.com/embed/0YYeELi896g",
          targetMuscles: ["Shoulders", "Triceps", "Core"],
          description: "Standing overhead press that builds shoulder strength and stability.",
          instructions: "1. Start at shoulder height\n2. Press overhead\n3. Keep core tight\n4. Lower with control"
        },
        {
          name: "Barbell Bent-over Row",
          videoUrl:"https://www.youtube.com/embed/oNanBZu0lMk",
          targetMuscles: ["Back", "Biceps"],
          description: "Pull the bar to your torso while bent over. Great for back thickness.",
          instructions: "1. Hinge at hips\n2. Pull bar to lower chest\n3. Squeeze shoulder blades\n4. Lower with control"
        }
      ]
    },
    "kettlebells": {
      name: "Kettlebells",
      category: "Free Weights",
      description: "Ball-shaped weights with handles for dynamic movements. Perfect for explosive power, cardio, and functional strength training.",
      targetMuscles: ["Full Body", "Core"],
      exercises: [
        {
          name: "Kettlebell Swings",
          videoUrl:"https://www.youtube.com/embed/n1df4ASFeZU",
          targetMuscles: ["Full Body", "Cardio"],
          description: "Hip hinge movement that develops explosive power and cardiovascular endurance.",
          instructions: "1. Feet shoulder-width apart\n2. Swing kettlebell between legs\n3. Drive hips forward powerfully\n4. Let momentum carry KB to chest level"
        },
        {
          name: "Goblet Squats",
          videoUrl:"https://www.youtube.com/embed/TN7mk5BdoGI",
          targetMuscles: ["Legs", "Core"],
          description: "Hold kettlebell at chest and squat. Great for learning proper squat form.",
          instructions: "1. Hold KB at chest level\n2. Feet slightly wider than shoulders\n3. Squat down keeping chest up\n4. Drive through heels to stand"
        },
        {
          name: "Kettlebell Clean & Press",
          videoUrl:"https://www.youtube.com/embed/xW3FwDQ59ms",
          targetMuscles: ["Full Body"],
          description: "Clean the kettlebell to rack position, then press overhead. Full-body power movement.",
          instructions: "1. Start with KB between feet\n2. Clean to rack position\n3. Press overhead\n4. Lower with control"
        },
        {
          name: "Turkish Get-Up",
          videoUrl:"https://www.youtube.com/embed/TcxzzyBziYA",
          targetMuscles: ["Core", "Shoulders"],
          description: "Complex movement from lying to standing while holding kettlebell overhead.",
          instructions: "1. Start lying with KB overhead\n2. Roll to elbow, then hand\n3. Bridge up to kneeling\n4. Stand up, reverse to return"
        },
        {
          name: "Kettlebell Snatch",
          videoUrl:"https://www.youtube.com/embed/6yDss7Fe8c4",
          targetMuscles: ["Explosive Power"],
          description: "Single movement from floor to overhead. Develops explosive power and coordination.",
          instructions: "1. Start with KB between feet\n2. Hike back like swing\n3. Punch hand through at top\n4. Lock out overhead"
        }
      ]
    },
    "treadmill": {
      name: "Treadmill",
      category: "Cardio",
      description: "Indoor running machine perfect for cardiovascular training regardless of weather. Adjustable speed and incline for varied workouts.",
      targetMuscles: ["Legs", "Cardiovascular System"],
      exercises: [
        {
          name: "Steady-state Jogging",
          videoUrl:"https://www.youtube.com/embed/TiZh8Es1_aw",
          targetMuscles: ["Legs", "Cardio"],
          description: "Maintain a consistent moderate pace for extended periods.",
          instructions: "1. Start with 5-min warmup walk\n2. Increase to comfortable jog pace\n3. Maintain for 20-45 minutes\n4. Cool down with 5-min walk"
        },
        {
          name: "Incline Walking",
          videoUrl:"https://www.youtube.com/embed/tBZVYkK8SDw",
          targetMuscles: ["Glutes", "Calves", "Cardio"],
          description: "Walking at an incline to target glutes and increase intensity.",
          instructions: "1. Set incline to 5-15%\n2. Walk at brisk pace\n3. Maintain for 20-30 minutes\n4. Focus on posture"
        },
        {
          name: "HIIT Sprints",
          videoUrl:"https://www.youtube.com/embed/W110XPDTo4Q",
          targetMuscles: ["Full Body", "Cardio"],
          description: "High-intensity intervals followed by recovery periods.",
          instructions: "1. Warm up 5 minutes\n2. Sprint 30 seconds\n3. Recovery walk 90 seconds\n4. Repeat 8-12 times"
        },
        {
          name: "Side Shuffles",
          videoUrl:"https://www.youtube.com/embed/uHGuoB-vcTs",
          targetMuscles: ["Legs", "Core", "Cardio"],
          description: "Lateral movement on treadmill for improved agility.",
          instructions: "1. Hold handrails for safety\n2. Turn sideways to belt\n3. Shuffle step sideways\n4. Switch directions halfway"
        }
      ]
    },
    "leg-press": {
      name: "Leg Press Machine",
      category: "Machines",
      description: "Seated leg exercise machine that allows heavy loading with back support. Great for building leg strength safely.",
      targetMuscles: ["Legs", "Glutes"],
      exercises: [
        {
          name: "Leg Press",
          videoUrl:"https://www.youtube.com/embed/1tmd1sRjOiU",
          targetMuscles: ["Quads", "Glutes", "Hamstrings"],
          description: "Push weight with legs while seated. Allows for heavy loading with safety.",
          instructions: "1. Sit with back against pad\n2. Place feet on platform\n3. Lower weight by bending knees\n4. Press through heels to extend"
        }
      ]
    },
    "chest-press": {
      name: "Chest Press Machine",
      category: "Machines",
      description: "Seated chest exercise machine that provides stability and safety for chest training.",
      targetMuscles: ["Chest", "Triceps"],
      exercises: [
        {
          name: "Seated Chest Press",
          videoUrl:"https://www.youtube.com/embed/i3e4CG5tnfs",
          targetMuscles: ["Chest", "Triceps"],
          description: "Press handles forward from seated position. Safe alternative to bench press.",
          instructions: "1. Adjust seat height\n2. Grip handles at chest level\n3. Press forward smoothly\n4. Return with control"
        }
      ]
    },
    "lat-pulldown": {
      name: "Lat Pulldown Machine",
      category: "Machines",
      description: "Seated pulling exercise machine that targets the back muscles. Great for building pulling strength.",
      targetMuscles: ["Back", "Biceps"],
      exercises: [
        {
          name: "Lat Pulldown (Wide-Grip)",
          videoUrl:"https://www.youtube.com/embed/HWGntttgJQw",
          targetMuscles: ["Lats", "Upper Back"],
          description: "Pull bar down to chest with wide grip. Targets the latissimus dorsi.",
          instructions: "1. Sit with thighs under pads\n2. Grip bar wider than shoulders\n3. Pull to upper chest\n4. Control the return"
        },
        {
          name: "Close-Grip Pulldown",
          videoUrl:"https://www.youtube.com/embed/riVps5MpUdE",
          targetMuscles: ["Mid-Back", "Biceps"],
          description: "Narrow grip variation that targets middle back and biceps more.",
          instructions: "1. Use narrow grip attachment\n2. Pull to upper chest\n3. Squeeze shoulder blades\n4. Control the negative"
        }
      ]
    },
    "cable-machine": {
      name: "Cable Machine",
      category: "Machines",
      description: "Versatile pulley system for resistance training. Adjustable height and attachments for countless exercises.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Cable Chest Fly",
          videoUrl:"https://www.youtube.com/embed/M97ra0UR-40",
          targetMuscles: ["Chest"],
          description: "Bring cables together in front of chest. Great isolation exercise for chest.",
          instructions: "1. Set cables at chest height\n2. Step forward, slight lean\n3. Bring handles together\n4. Control the return"
        },
        {
          name: "Cable Bicep Curl",
          videoUrl:"https://www.youtube.com/embed/wGj6RQtlJy4",
          targetMuscles: ["Biceps"],
          description: "Curl cable attachment toward shoulders. Constant tension throughout movement.",
          instructions: "1. Set cable low\n2. Curl handle to shoulder\n3. Squeeze at top\n4. Lower slowly"
        },
        {
          name: "Cable Tricep Pushdown",
          videoUrl:"https://www.youtube.com/embed/DofcfjlgOTs",
          targetMuscles: ["Triceps"],
          description: "Push cable attachment down to extend arms. Excellent tricep isolation.",
          instructions: "1. Set cable high\n2. Keep elbows at sides\n3. Push down to full extension\n4. Control the return"
        },
        {
          name: "Cable Woodchopper",
          videoUrl:"https://www.youtube.com/embed/OcmCcvmOlQ0",
          targetMuscles: ["Core"],
          description: "Rotational movement that targets core and obliques.",
          instructions: "1. Set cable at shoulder height\n2. Rotate body pulling across\n3. Control the movement\n4. Switch sides"
        },
        {
          name: "Cable Lateral Raise",
          videoUrl:"https://www.youtube.com/embed/xrBcuPNTxLg",
          targetMuscles: ["Shoulders"],
          description: "Raise cable to side to target shoulder deltoids.",
          instructions: "1. Set cable low\n2. Raise arm to side\n3. Lead with pinky finger\n4. Lower with control"
        }
      ]
    },
    "smith-machine": {
      name: "Smith Machine",
      category: "Machines",
      description: "Guided barbell system with safety catches. Perfect for training alone safely.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Smith Machine Squats",
          videoUrl:"https://www.youtube.com/embed/iKCJCydYYrE",
          targetMuscles: ["Legs"],
          description: "Squat with guided barbell for added safety and stability.",
          instructions: "1. Position under bar\n2. Unhook safety catches\n3. Squat down with control\n4. Drive up through heels"
        },
        {
          name: "Smith Bench Press",
          videoUrl:"https://www.youtube.com/embed/gQ3afio08V8",
          targetMuscles: ["Chest"],
          description: "Bench press with guided bar path for safety.",
          instructions: "1. Lie on bench under bar\n2. Unhook and lower to chest\n3. Press up smoothly\n4. Re-hook at top"
        },
        {
          name: "Smith Shoulder Press",
          videoUrl:"https://www.youtube.com/embed/AgPsHjJL1-A",
          targetMuscles: ["Shoulders"],
          description: "Overhead press with guided barbell for stability.",
          instructions: "1. Set bar at shoulder height\n2. Press overhead\n3. Keep core engaged\n4. Lower with control"
        },
        {
          name: "Smith Calf Raises",
          videoUrl:"https://www.youtube.com/embed/wlqTemUXPXY",
          targetMuscles: ["Calves"],
          description: "Rise up on toes with barbell for calf development.",
          instructions: "1. Position bar on shoulders\n2. Rise up on toes\n3. Hold peak contraction\n4. Lower slowly"
        }
      ]
    },
    "stationary-bike": {
      name: "Stationary Bike",
      category: "Cardio",
      description: "Low-impact cardiovascular exercise bike. Great for leg strength and cardio endurance.",
      targetMuscles: ["Legs", "Cardio"],
      exercises: [
        {
          name: "Steady Ride",
          videoUrl:"https://www.youtube.com/embed/YWb0IxZ_Q6M",
          targetMuscles: ["Legs", "Cardio"],
          description: "Maintain consistent pace for endurance training.",
          instructions: "1. Adjust seat height\n2. Start with easy pace\n3. Maintain for 20-60 minutes\n4. Cool down gradually"
        },
        {
          name: "Sprint Intervals",
          videoUrl:"https://www.youtube.com/embed/_b5nJSAW8Os",
          targetMuscles: ["Legs", "Cardio"],
          description: "High-intensity intervals on bike for improved power and fitness.",
          instructions: "1. Warm up 5 minutes\n2. Sprint 30 seconds hard\n3. Easy pace 90 seconds\n4. Repeat 8-15 times"
        },
        {
          name: "Tabata",
          videoUrl:"https://www.youtube.com/embed/R2HNZtGLigk",
          targetMuscles: ["Legs", "Cardio"],
          description: "20 seconds on, 10 seconds off protocol for maximum intensity.",
          instructions: "1. Warm up thoroughly\n2. 20 seconds all-out\n3. 10 seconds rest\n4. Repeat 8 rounds"
        }
      ]
    },
    "elliptical": {
      name: "Elliptical Trainer",
      category: "Cardio",
      description: "Low-impact full-body cardio machine. Combines upper and lower body movement.",
      targetMuscles: ["Full Body", "Cardio"],
      exercises: [
        {
          name: "Low-Impact Full-Body Cardio",
          videoUrl:"https://www.youtube.com/embed/fh16ENgLHVc",
          targetMuscles: ["Full Body", "Cardio"],
          description: "Smooth elliptical motion engaging arms and legs together.",
          instructions: "1. Step onto pedals\n2. Grip moving handles\n3. Maintain smooth rhythm\n4. Adjust resistance as needed"
        },
        {
          name: "Reverse Pedaling",
          videoUrl:"https://www.youtube.com/embed/xVpLaPZ4VPg",
          targetMuscles: ["Hamstrings", "Glutes"],
          description: "Pedal backwards to target posterior chain muscles more.",
          instructions: "1. Reverse pedaling direction\n2. Focus on pushing back\n3. Engage glutes and hamstrings\n4. Maintain good posture"
        }
      ]
    },
    "rowing-machine": {
      name: "Rowing Machine",
      category: "Cardio",
      description: "Full-body cardio machine that simulates rowing motion. Excellent for building power and endurance.",
      targetMuscles: ["Full Body", "Cardio"],
      exercises: [
        {
          name: "Full-Stroke Rows",
          videoUrl:"https://www.youtube.com/embed/VHCIUztLJWs",
          targetMuscles: ["Full Body"],
          description: "Complete rowing stroke: leg push, hip hinge, arm pull sequence.",
          instructions: "1. Start with knees bent\n2. Push with legs first\n3. Lean back and pull arms\n4. Reverse the sequence"
        },
        {
          name: "Intervals or Distance Challenges",
          videoUrl:"https://www.youtube.com/embed/gKx9icKNjso",
          targetMuscles: ["Full Body", "Cardio"],
          description: "Timed intervals or distance goals for varied training stimulus.",
          instructions: "1. Set time or distance goal\n2. Maintain consistent stroke rate\n3. Focus on technique\n4. Rest between intervals"
        }
      ]
    },
    "stair-climber": {
      name: "Stair Climber",
      category: "Cardio",
      description: "Vertical climbing motion that targets legs and glutes while providing intense cardio workout.",
      targetMuscles: ["Legs", "Cardio"],
      exercises: [
        {
          name: "Steady Climb",
          videoUrl:"https://www.youtube.com/embed/6mYp_BNYD5Y",
          targetMuscles: ["Legs", "Glutes"],
          description: "Consistent stepping motion for endurance and leg strength.",
          instructions: "1. Step on pedals\n2. Maintain upright posture\n3. Let machine set rhythm\n4. Don't lean on rails"
        },
      ]
    },
    "pull-up-bar": {
      name: "Pull-Up Bar",
      category: "Functional",
      description: "Simple bar for bodyweight pulling exercises. Essential for back and arm development.",
      targetMuscles: ["Back", "Arms", "Core"],
      exercises: [
        {
          name: "Pull-Ups / Chin-Ups",
          videoUrl:"https://www.youtube.com/embed/f4x3-BGRLFQ",
          targetMuscles: ["Back", "Biceps"],
          description: "Hang from bar and pull body up. Fundamental upper body exercise.",
          instructions: "1. Hang with arms extended\n2. Pull up until chin over bar\n3. Lower with control\n4. Full range of motion"
        },
        {
          name: "Hanging Leg Raises",
          videoUrl:"https://www.youtube.com/embed/pRvuMJ9Ag7I",
          targetMuscles: ["Core", "Hip Flexors"],
          description: "Hang from bar and raise legs up. Excellent core strengthener.",
          instructions: "1. Hang from bar\n2. Raise knees to chest\n3. Lower with control\n4. Avoid swinging"
        },
        {
          name: "Toes-to-Bar",
          videoUrl:"https://www.youtube.com/embed/DSB1Icrnm0c",
          targetMuscles: ["Core", "Shoulders"],
          description: "Advanced hanging exercise bringing toes to bar. Full core engagement.",
          instructions: "1. Hang from bar\n2. Swing legs up to bar\n3. Touch toes to bar\n4. Control the descent"
        }
      ]
    },
    "dip-station": {
      name: "Dip Station",
      category: "Functional",
      description: "Parallel bars for bodyweight pushing exercises. Great for triceps and chest development.",
      targetMuscles: ["Triceps", "Chest", "Core"],
      exercises: [
        {
          name: "Triceps Dips",
          videoUrl:"https://www.youtube.com/embed/Gz8NkGoNPkc",
          targetMuscles: ["Triceps", "Chest"],
          description: "Lower and raise body between parallel bars. Excellent tricep builder.",
          instructions: "1. Support body on bars\n2. Lower by bending arms\n3. Push back to start\n4. Keep body upright for triceps"
        },
        {
          name: "Assisted Dips",
          videoUrl:"https://www.youtube.com/embed/uWFHl18qZx8",
          targetMuscles: ["Triceps", "Chest"],
          description: "Use resistance band for assistance while learning the movement.",
          instructions: "1. Loop band around bars\n2. Kneel or step in band\n3. Perform dip motion\n4. Band assists upward movement"
        },
        {
          name: "L-sit Holds",
          videoUrl:"https://www.youtube.com/embed/Jb5_jIiEl8E",
          targetMuscles: ["Core", "Shoulders"],
          description: "Hold body with legs extended forward. Advanced core exercise.",
          instructions: "1. Support body on bars\n2. Raise legs parallel to ground\n3. Hold position\n4. Keep shoulders engaged"
        }
      ]
    },
    "battle-ropes": {
      name: "Battle Ropes",
      category: "Functional",
      description: "Heavy ropes for high-intensity training. Excellent for cardio, strength, and power development.",
      targetMuscles: ["Full Body", "Cardio"],
      exercises: [
        {
          name: "Double-Arm Waves",
          videoUrl:"https://www.youtube.com/embed/ZY3sFGHzGgg",
          targetMuscles: ["Arms", "Core", "Cardio"],
          description: "Move both arms up and down together creating waves in the rope.",
          instructions: "1. Hold rope ends\n2. Move arms up and down together\n3. Create continuous waves\n4. Maintain athletic stance"
        },
        {
          name: "Alternating Waves",
          videoUrl:"https://www.youtube.com/embed/5TvLW4SSlLA",
          targetMuscles: ["Arms", "Core", "Cardio"],
          description: "Move arms alternately for continuous wave pattern.",
          instructions: "1. Hold rope ends\n2. Move arms alternately\n3. Keep core engaged\n4. Maintain rhythm"
        },

        {
          name: "Battle Rope Jumping Jacks",
          videoUrl:"https://www.youtube.com/embed/E1FMkuh4WQI",
          targetMuscles: ["Full Body", "Cardio"],
          description: "Combine jumping jacks with rope waves for full-body conditioning.",
          instructions: "1. Hold ropes at sides\n2. Jump feet apart, raise ropes\n3. Jump feet together, lower ropes\n4. Continuous motion"
        }
      ]
    },
    "medicine-balls": {
      name: "Medicine Balls",
      category: "Functional",
      description: "Weighted balls for explosive and functional training. Great for power development and core strength.",
      targetMuscles: ["Core", "Full Body"],
      exercises: [
        {
          name: "Wall Balls",
          videoUrl:"https://www.youtube.com/embed/WGM7FjbDJUA",
          targetMuscles: ["Legs", "Core", "Shoulders"],
          description: "Squat and throw ball up to wall target. Full-body explosive movement.",
          instructions: "1. Hold ball at chest\n2. Squat down\n3. Explode up throwing ball\n4. Catch and repeat"
        },
        {
          name: "Russian Twists",
          videoUrl:"https://www.youtube.com/embed/51Dw8c3wcPs",
          targetMuscles: ["Core", "Obliques"],
          description: "Rotate side to side while holding medicine ball. Core strengthener.",
          instructions: "1. Sit with knees bent\n2. Hold ball with both hands\n3. Rotate side to side\n4. Keep core engaged"
        },
        {
          name: "Medicine Ball Slams",
          videoUrl:"https://www.youtube.com/embed/wi-KOaSQbU0",
          targetMuscles: ["Core", "Shoulders"],
          description: "Lift ball overhead and slam down forcefully. Power and core exercise.",
          instructions: "1. Hold ball overhead\n2. Slam down with force\n3. Use core and shoulders\n4. Pick up and repeat"
        },
        {
          name: "Chest Pass Throws",
          videoUrl:"https://www.youtube.com/embed/IeOeonCFarM",
          targetMuscles: ["Chest", "Core"],
          description: "Throw ball from chest to wall or partner. Power development.",
          instructions: "1. Hold ball at chest\n2. Step forward and throw\n3. Use chest and core\n4. Catch and repeat"
        }
      ]
    },
    "resistance-bands": {
      name: "Resistance Bands",
      category: "Functional",
      description: "Elastic bands providing variable resistance. Portable and versatile for strength training anywhere.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Banded Glute Bridges",
          videoUrl:"https://www.youtube.com/embed/3zxDZE2z3rE",
          targetMuscles: ["Glutes", "Hamstrings"],
          description: "Hip bridge with band around knees for glute activation.",
          instructions: "1. Lie on back, band around knees\n2. Bridge hips up\n3. Push knees out against band\n4. Lower with control"
        },
        {
          name: "Banded Rows",
          videoUrl:"https://www.youtube.com/embed/W5CGo5vzbXI",
          targetMuscles: ["Back", "Rear Delts"],
          description: "Pull band apart in rowing motion. Great for posture.",
          instructions: "1. Hold band at chest level\n2. Pull apart squeezing shoulder blades\n3. Control the return\n4. Keep elbows back"
        },
        {
          name: "Banded Squats",
          videoUrl:"https://www.youtube.com/embed/S5cTdwO1Trk",
          targetMuscles: ["Legs", "Glutes"],
          description: "Squat with band around knees for extra glute activation.",
          instructions: "1. Band around knees\n2. Squat down\n3. Push knees out against band\n4. Drive up through heels"
        },
        {
          name: "Band-Assisted Pull-Ups",
          videoUrl:"https://www.youtube.com/embed/32WqAGWkMVM",
          targetMuscles: ["Back", "Biceps"],
          description: "Use band for assistance in pull-up movement.",
          instructions: "1. Loop band over pull-up bar\n2. Step or kneel in band\n3. Perform pull-up motion\n4. Band assists upward movement"
        }
      ]
    },
    "trx": {
      name: "TRX Suspension Trainer",
      category: "Functional",
      description: "Suspension training system using body weight and gravity. Builds functional strength and stability.",
      targetMuscles: ["Full Body", "Core"],
      exercises: [
        {
          name: "TRX Rows",
          videoUrl:"https://www.youtube.com/embed/n-hu-oVS32E",
          targetMuscles: ["Back", "Biceps"],
          description: "Lean back and pull body up using TRX straps. Adjustable difficulty.",
          instructions: "1. Hold handles, lean back\n2. Pull body up\n3. Keep body straight\n4. Control the descent"
        },
        {
          name: "TRX Chest Press",
          videoUrl:"https://www.youtube.com/embed/LpAqu5EFZh4",
          targetMuscles: ["Chest", "Triceps"],
          description: "Lean forward and push body away from anchor point.",
          instructions: "1. Face away from anchor\n2. Lean forward holding handles\n3. Push body back to start\n4. Keep core engaged"
        },
        {
          name: "TRX Single-Leg Squats",
          videoUrl:"https://www.youtube.com/embed/cvOAQdwGutw",
          targetMuscles: ["Legs", "Core"],
          description: "Single-leg squat with TRX for balance assistance.",
          instructions: "1. Hold handles for balance\n2. Lift one foot off ground\n3. Squat on standing leg\n4. Use TRX for stability"
        },
        {
          name: "TRX Planks / Pike",
          videoUrl:"https://www.youtube.com/embed/GOkCHEChi2s",
          targetMuscles: ["Core", "Shoulders"],
          description: "Feet in straps, plank or pike position. Advanced core exercise.",
          instructions: "1. Feet in foot cradles\n2. Hold plank position\n3. Can add pike movement\n4. Keep core tight throughout"
        }
      ]
    },
    "foam-roller": {
      name: "Foam Roller",
      category: "Recovery",
      description: "Cylindrical foam tool for self-myofascial release. Helps with muscle recovery and flexibility.",
      targetMuscles: ["Recovery"],
      exercises: [
        {
          name: "Quads Roll",
          videoUrl:"https://www.youtube.com/embed/DjmPlggFONw",
          targetMuscles: ["Quadriceps"],
          description: "Roll front of thighs to release tension in quadriceps muscles.",
          instructions: "1. Lie face down on roller\n2. Support weight on forearms\n3. Roll from hip to knee\n4. Pause on tender spots"
        },
        {
          name: "IT Band Roll",
          videoUrl:"https://www.youtube.com/embed/dCSN5TdsmxU",
          targetMuscles: ["IT Band", "Hip"],
          description: "Roll outer thigh to release IT band tension.",
          instructions: "1. Lie on side on roller\n2. Support with bottom arm\n3. Roll from hip to knee\n4. Go slowly, can be tender"
        },
        {
          name: "Upper Back Roll",
          videoUrl:"https://www.youtube.com/embed/uWIJ3TJJwbQ",
          targetMuscles: ["Upper Back"],
          description: "Roll upper back and shoulder blade area for posture improvement.",
          instructions: "1. Lie on back with roller\n2. Cross arms over chest\n3. Roll from mid to upper back\n4. Support head with hands"
        },
        {
          name: "Calves Roll",
          videoUrl:"https://www.youtube.com/embed/zn1tcngoD8U",
          targetMuscles: ["Calves"],
          description: "Roll back of lower legs to release calf muscle tension.",
          instructions: "1. Sit with legs extended\n2. Place roller under calves\n3. Lift hips and roll\n4. Can cross one leg over other"
        }
      ]
    },
    "yoga-mat": {
      name: "Yoga Mat",
      category: "Flexibility",
      description: "Non-slip mat providing cushioning and grip for floor exercises, yoga, and stretching routines.",
      targetMuscles: ["Flexibility", "Core"],
      exercises: [
        {
          name: "Sun Salutations",
          videoUrl:"https://www.youtube.com/embed/8XLBpKnWYww",
          targetMuscles: ["Full Body", "Flexibility"],
          description: "Flowing sequence of yoga poses that stretch and strengthen the entire body.",
          instructions: "1. Start in mountain pose\n2. Reach arms up\n3. Forward fold\n4. Flow through sequence"
        },
        {
          name: "Downward Dog to Cobra",
          videoUrl:"https://www.youtube.com/embed/59FdvioeptY",
          targetMuscles: ["Back", "Shoulders"],
          description: "Flow between downward dog and cobra poses for spine mobility.",
          instructions: "1. Start in downward dog\n2. Lower to plank\n3. Lower to cobra\n4. Push back to downward dog"
        },
        {
          name: "Pigeon Pose",
          videoUrl:"https://www.youtube.com/embed/-gl5sFq-6mg",
          targetMuscles: ["Hips", "Glutes"],
          description: "Hip opener that targets deep hip flexors and glutes.",
          instructions: "1. From downward dog\n2. Bring knee forward\n3. Extend back leg\n4. Hold and breathe deeply"
        },
        {
          name: "Child's Pose",
          videoUrl:"https://www.youtube.com/embed/FMDEYnDdvPg",
          targetMuscles: ["Back", "Hips"],
          description: "Restorative pose that gently stretches back and hips.",
          instructions: "1. Kneel on mat\n2. Sit back on heels\n3. Fold forward, arms extended\n4. Relax and breathe"
        }
      ]
    },
    "stretch-bands": {
      name: "Stretch Bands",
      category: "Flexibility",
      description: "Elastic bands designed for stretching and mobility work. Help improve flexibility and range of motion.",
      targetMuscles: ["Flexibility"],
      exercises: [
        {
          name: "Hamstring Stretch",
          videoUrl:"https://www.youtube.com/embed/g6PV2KlOlDg",
          targetMuscles: ["Hamstrings"],
          description: "Use band to assist in hamstring stretching while lying down.",
          instructions: "1. Lie on back\n2. Loop band around foot\n3. Straighten leg upward\n4. Hold stretch gently"
        },
        {
          name: "Quad Pulls",
          videoUrl:"https://www.youtube.com/embed/OIMUU2Q-upU",
          targetMuscles: ["Quadriceps"],
          description: "Use band to pull foot toward glutes for quad stretch.",
          instructions: "1. Stand on one leg\n2. Loop band around back foot\n3. Pull heel toward glutes\n4. Hold stretch"
        },
        {
          name: "Shoulder Mobility Loops",
          videoUrl:"https://www.youtube.com/embed/MDHUJR86A8I",
          targetMuscles: ["Shoulders"],
          description: "Move arms through range of motion with band resistance.",
          instructions: "1. Hold band with both hands\n2. Pull apart to stretch\n3. Move arms overhead\n4. Work through full range"
        },
        {
          name: "Chest Openers",
          videoUrl:"https://www.youtube.com/embed/Cka38QWoVeY",
          targetMuscles: ["Chest", "Shoulders"],
          description: "Open chest and shoulders using band for assisted stretching.",
          instructions: "1. Hold band behind back\n2. Pull arms apart\n3. Lift chest up\n4. Feel stretch across chest"
        }
      ]
    },
    "weight-plates": {
      name: "Weight Plates",
      category: "Free Weights",
      description: "Add weight to barbells or plate-loaded machines. Essential for progressive overload training.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Plate Loaded Exercises",
          targetMuscles: ["Full Body"],
          description: "Use with barbells and machines to add resistance for strength training.",
          instructions: "1. Load plates evenly on both sides\n2. Secure with collars\n3. Start with lighter weight\n4. Progress gradually"
        }
      ]
    },
    "bench": {
      name: "Bench (Flat/Incline/Decline)",
      category: "Benches & Racks",
      description: "Adjustable bench for various pressing and core exercises. Essential for chest and core training.",
      targetMuscles: ["Chest", "Core", "Legs"],
      exercises: [
        {
          name: "Incline Dumbbell Press",
          videoUrl:"https://www.youtube.com/embed/O1ht_4IZtLs",
          targetMuscles: ["Upper Chest"],
          description: "Press dumbbells on incline bench to target upper chest.",
          instructions: "1. Set bench to 30-45 degrees\n2. Press dumbbells up and slightly back\n3. Lower with control\n4. Focus on upper chest squeeze"
        },
        {
          name: "Decline Sit-ups",
          videoUrl:"https://www.youtube.com/embed/xfNAzPwNRqw",
          targetMuscles: ["Core"],
          description: "Perform sit-ups on decline bench for added resistance.",
          instructions: "1. Secure feet at top\n2. Lie back on decline\n3. Sit up using core\n4. Lower with control"
        },
        {
          name: "Bench Dips",
          videoUrl:"https://www.youtube.com/embed/4ua3MzaU0QU",
          targetMuscles: ["Triceps"],
          description: "Use bench edge for tricep dips.",
          instructions: "1. Place hands on bench edge\n2. Lower body by bending arms\n3. Push back up\n4. Keep body close to bench"
        },
        {
          name: "Step-Ups",
          videoUrl:"https://www.youtube.com/embed/hmyKV9tUkHc",
          targetMuscles: ["Legs"],
          description: "Step up onto bench with dumbbells for leg strength.",
          instructions: "1. Hold dumbbells at sides\n2. Step up onto bench\n3. Step down with control\n4. Alternate legs"
        }
      ]
    },
    "power-rack": {
      name: "Power Rack",
      category: "Benches & Racks",
      description: "Versatile rack system for safe heavy lifting. Perfect for squats, bench press, and pull-ups.",
      targetMuscles: ["Full Body"],
      exercises: [
        {
          name: "Barbell Back Squat",
          videoUrl:"https://www.youtube.com/embed/emqiMx_5zdE",
          targetMuscles: ["Legs", "Core"],
          description: "Classic squat with barbell on back. Set safety bars for protection.",
          instructions: "1. Set bar at shoulder height\n2. Position bar on upper back\n3. Squat down to parallel\n4. Drive up through heels"
        },
        {
          name: "Barbell Front Squat",
          videoUrl:"https://www.youtube.com/embed/rKjh8K-ZxLc",
          targetMuscles: ["Quads", "Core"],
          description: "Squat with bar in front position. More quad-focused.",
          instructions: "1. Rest bar on front delts\n2. Keep elbows up\n3. Squat down\n4. Drive up maintaining posture"
        },
        {
          name: "Barbell Overhead Press",
          videoUrl:"https://www.youtube.com/embed/zoN5EH50Dro",
          targetMuscles: ["Shoulders", "Core"],
          description: "Standing press from rack position.",
          instructions: "1. Start at shoulder height\n2. Press overhead\n3. Keep core tight\n4. Lower with control"
        },
        {
          name: "Pull-Ups",
          videoUrl:"https://www.youtube.com/embed/KismDjoT11Y",
          targetMuscles: ["Back", "Arms"],
          description: "Use pull-up bar on rack for back development.",
          instructions: "1. Hang from bar\n2. Pull up until chin over bar\n3. Lower with control\n4. Full range of motion"
        },
        {
          name: "Rack Pulls",
          videoUrl:"https://www.youtube.com/embed/bw9GdVFBvcQ",
          targetMuscles: ["Back", "Traps"],
          description: "Partial deadlift from rack position.",
          instructions: "1. Set bar at knee height\n2. Deadlift from this position\n3. Focus on lockout\n4. Lower with control"
        }
      ]
    },
    "squat-rack": {
      name: "Squat Rack",
      category: "Benches & Racks",
      description: "Dedicated squat station for safe leg training. Essential for building lower body strength.",
      targetMuscles: ["Legs", "Core"],
      exercises: [
        {
          name: "Barbell Back Squat",
          videoUrl:"https://www.youtube.com/embed/emqiMx_5zdE",
          targetMuscles: ["Legs", "Core"],
          description: "Classic squat movement with barbell support.",
          instructions: "1. Set bar at shoulder height\n2. Position bar on upper back\n3. Squat down to parallel\n4. Drive up through heels"
        },
        {
          name: "Barbell Front Squat",
          videoUrl:"https://www.youtube.com/embed/rKjh8K-ZxLc",
          targetMuscles: ["Quads", "Core"],
          description: "Front-loaded squat variation.",
          instructions: "1. Rest bar on front delts\n2. Keep elbows up\n3. Squat down\n4. Drive up maintaining posture"
        }
      ]
    }
  };

  const equipment = equipmentData[equipmentId || ""] || {
    name: "Equipment Not Found",
    category: "",
    description: "This equipment information is not available.",
    targetMuscles: [],
    exercises: []
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/equipment">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Equipment
          </Button>
        </Link>

        {/* Equipment Header */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            

            {/* Equipment Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {equipment.category}
                </Badge>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {equipment.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {equipment.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Target Muscles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {equipment.targetMuscles.map((muscle: string) => (
                    <Badge key={muscle} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {muscle}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-primary" />
                  How to Use
                </h3>
                <p className="text-muted-foreground">
                  Proper form and safety are essential when using {equipment.name.toLowerCase()}. Always warm up before use and start with lighter weights to master the movement patterns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exercises Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <div className="w-1 h-8 bg-primary mr-3"></div>
            Exercises with {equipment.name}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {equipment.exercises.map((exercise: any, index: number) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">
                    {exercise.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1">
                    {exercise.targetMuscles.map((muscle: string) => (
                      <Badge key={muscle} variant="secondary" className="text-xs">
                        {muscle}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {exercise.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Instructions:</h4>
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
                      {exercise.instructions}
                    </pre>
                  </div>

                  {/* Video placeholder for each exercise */}
                  {exercise.videoUrl ? (
  <div className="aspect-video">
    <iframe
      src={exercise.videoUrl}
      title={exercise.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg border border-border"
    />
  </div>
) : (
  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
    <div className="text-center space-y-1">
      <div className="bg-primary/20 p-2 rounded-full mx-auto w-fit">
        <Play className="h-4 w-4 text-primary" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        Exercise Demo Video
      </p>
    </div>
  </div>
)}

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EquipmentDetailPage;