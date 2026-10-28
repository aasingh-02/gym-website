import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DailyQuote from "@/components/DailyQuote";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Utensils, Bot } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              FORGE YOUR
              <span className="block text-transparent bg-gradient-hero bg-clip-text">
                STRENGTH
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your ultimate gym companion. Track workouts, learn exercises, monitor nutrition, and build the body you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/profile">
               <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
                Start Your Journey
              </Button>
              </Link>
              <Link to="/equipment">
               <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View Equipment
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Quote Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <DailyQuote />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Fitness Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track your progress and stay motivated
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Notes Card */}
            <Link to="/notes">
              <Card className="bg-gradient-card border-border hover:border-primary/50 transition-smooth group cursor-pointer h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-primary/20 p-4 rounded-full mx-auto w-fit group-hover:bg-primary/30 transition-smooth">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                    Workout Notes
                  </h3>
                  <p className="text-muted-foreground">
                    Track your workouts, set goals, and monitor your progress with our intuitive note-taking system.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Start Writing
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Nutrition Card */}
            <Link to="/nutrition">
              <Card className="bg-gradient-card border-border hover:border-primary/50 transition-smooth group cursor-pointer h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-accent/20 p-4 rounded-full mx-auto w-fit group-hover:bg-accent/30 transition-smooth">
                    <Utensils className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-accent transition-smooth">
                    Nutrition Tracker
                  </h3>
                  <p className="text-muted-foreground">
                    Log your meals, track calories, and monitor your nutrition to fuel your fitness journey.
                  </p>
                  <Button variant="accent" className="mt-4">
                    Track Meals
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="bg-primary/10 p-6 rounded-full mx-auto w-fit">
              <Bot className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AI Workout Assistant
            </h2>
            <p className="text-lg text-muted-foreground">
              Get personalized warm-up exercises for any muscle group. Our AI coach is here to help you prepare for your workouts safely and effectively.
            </p>
            <Link to="/chat">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
                Chat with AI Coach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about every piece of equipment in your gym with detailed exercise guides and video demonstrations.
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/equipment">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View All Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;