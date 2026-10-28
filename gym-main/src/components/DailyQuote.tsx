import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const DailyQuote = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });

  const fitnessQuotes = [
    {
      text: "The body achieves what the mind believes.",
      author: "Napoleon Hill"
    },
    {
      text: "Success isn't given. It's earned in the gym.",
      author: "Anonymous"
    },
    {
      text: "Your only limit is your mind.",
      author: "Anonymous"
    },
    {
      text: "Champions train, losers complain.",
      author: "Anonymous"
    },
    {
      text: "Pain is weakness leaving the body.",
      author: "U.S. Marines"
    },
    {
      text: "The hardest lift is lifting yourself off the couch.",
      author: "Anonymous"
    },
    {
      text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
      author: "Rikki Rogers"
    },
    {
      text: "Don't wish for it, work for it.",
      author: "Anonymous"
    },
    {
      text: "The clock is ticking. Are you becoming the person you want to be?",
      author: "Greg Plitt"
    },
    {
      text: "If you want something you've never had, you must be willing to do something you've never done.",
      author: "Thomas Jefferson"
    }
  ];

  useEffect(() => {
    // Get today's date and use it to select a quote
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const quoteIndex = dayOfYear % fitnessQuotes.length;
    setQuote(fitnessQuotes[quoteIndex]);
  }, []);

  return (
    <Card className="bg-gradient-card border-border p-6 shadow-elevated">
      <div className="flex items-start space-x-4">
        <div className="bg-primary/20 p-3 rounded-full">
          <Quote className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <blockquote className="text-lg font-medium text-foreground mb-2 italic">
            "{quote.text}"
          </blockquote>
          <cite className="text-sm text-muted-foreground font-medium">
            — {quote.author}
          </cite>
        </div>
      </div>
    </Card>
  );
};

export default DailyQuote;