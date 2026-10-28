import Layout from "@/components/layout/Layout";
import AIChat from "@/components/AIChat";

const ChatPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI Workout Coach
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized warm-up routines for any muscle group. Our AI coach will help you prepare for your workouts safely and effectively.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AIChat />
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;