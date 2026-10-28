import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! I'm your AI workout coach. I can help you with warm-up exercises for any muscle group. What muscle group would you like to warm up today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const warmUpSuggestions = {
    chest: [
      "Arm circles (10 forward, 10 backward)",
      "Chest stretches (30 seconds each arm)",
      "Light push-ups (10-15 reps)",
      "Shoulder dislocations with resistance band"
    ],
    back: [
      "Cat-cow stretches (10 reps)",
      "Arm swings (10 each direction)",
      "Lat stretches (30 seconds each side)",
      "Band pull-aparts (15 reps)"
    ],
    legs: [
      "Leg swings (10 each direction per leg)",
      "Bodyweight squats (15 reps)",
      "Walking lunges (10 per leg)",
      "Ankle circles (10 each direction)"
    ],
    shoulders: [
      "Arm circles (10 forward, 10 backward)",
      "Shoulder shrugs (15 reps)",
      "Cross-body arm stretches (30 seconds each)",
      "Wall slides (15 reps)"
    ],
    core: [
      "Torso twists (10 each side)",
      "Cat-cow stretches (10 reps)",
      "Standing side bends (10 each side)",
      "Dead bugs (10 per side)"
    ],
    arms: [
      "Arm circles (10 forward, 10 backward)",
      "Tricep stretches (30 seconds each arm)",
      "Wrist circles (10 each direction)",
      "Light arm swings"
    ]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for muscle groups
    for (const [muscle, exercises] of Object.entries(warmUpSuggestions)) {
      if (message.includes(muscle)) {
        return `Great choice! Here's a warm-up routine for your ${muscle}:\n\n${exercises.map((ex, i) => `${i + 1}. ${ex}`).join('\n')}\n\nPerform these exercises in order before your main workout. This should take about 5-7 minutes. Stay hydrated and listen to your body!`;
      }
    }

    // General responses
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! Ready to warm up? Tell me which muscle group you're planning to work today - chest, back, legs, shoulders, core, or arms?";
    }

    if (message.includes("help")) {
      return "I can provide warm-up routines for these muscle groups:\n• Chest\n• Back\n• Legs\n• Shoulders\n• Core\n• Arms\n\nJust tell me which one you want to focus on!";
    }

    if (message.includes("thank")) {
      return "You're welcome! Have an amazing workout and remember - proper warm-up prevents injuries. Feel free to ask about any other muscle groups!";
    }

    // Default response
    return "I can help you with warm-up exercises for chest, back, legs, shoulders, core, or arms. Which muscle group would you like to warm up?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: "bot",
      content: generateResponse(input.trim()),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card className="bg-gradient-card border-border h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI Workout Coach
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`p-2 rounded-full ${message.type === "user" ? "bg-primary" : "bg-accent"}`}>
                  {message.type === "user" ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4 text-accent-foreground" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <pre className="whitespace-pre-wrap text-sm font-sans">
                    {message.content}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about warm-up exercises..."
            className="flex-1"
          />
          <Button onClick={handleSend} variant="hero" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChat;