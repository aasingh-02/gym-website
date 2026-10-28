import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Plus, FileText, Calendar, Trash2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  category: "workout" | "goal" | "progress" | "general";
}

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Chest & Triceps Workout",
      content: "Bench Press: 185lbs x 8, 195lbs x 6, 205lbs x 4\nIncline DB Press: 65lbs x 10 x 3\nDips: Bodyweight x 15 x 3\nTricep Pushdowns: 70lbs x 12 x 3",
      date: "2024-01-15",
      category: "workout"
    },
    {
      id: "2",
      title: "Monthly Goals",
      content: "1. Increase bench press to 225lbs\n2. Lose 5lbs of body fat\n3. Improve flexibility - stretch daily\n4. Add cardio 3x per week",
      date: "2024-01-01",
      category: "goal"
    }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    category: "workout" as Note["category"]
  });

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        date: new Date().toISOString().split('T')[0],
        category: newNote.category
      };
      setNotes([note, ...notes]);
      setNewNote({ title: "", content: "", category: "workout" });
      setIsAdding(false);
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const getCategoryColor = (category: Note["category"]) => {
    switch (category) {
      case "workout": return "bg-primary/10 text-primary border-primary/20";
      case "goal": return "bg-accent/10 text-accent border-accent/20";
      case "progress": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "general": return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default: return "bg-secondary/10 text-secondary-foreground border-secondary/20";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Workout Notes
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your workouts, goals, and progress
            </p>
          </div>
          <Button 
            variant="hero" 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Note
          </Button>
        </div>

        {/* Add Note Form */}
        {isAdding && (
          <Card className="mb-8 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">New Note</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Note title..."
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={newNote.category}
                  onChange={(e) => setNewNote({ ...newNote, category: e.target.value as Note["category"] })}
                >
                  <option value="workout">Workout</option>
                  <option value="goal">Goal</option>
                  <option value="progress">Progress</option>
                  <option value="general">General</option>
                </select>
              </div>
              <Textarea
                placeholder="Write your note here..."
                className="min-h-32"
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              />
              <div className="flex gap-2">
                <Button variant="hero" onClick={handleAddNote}>
                  Save Note
                </Button>
                <Button variant="outline" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card key={note.id} className="bg-gradient-card border-border group hover:border-primary/50 transition-smooth">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="flex-1">
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 border ${getCategoryColor(note.category)}`}>
                    {note.category.charAt(0).toUpperCase() + note.category.slice(1)}
                  </div>
                  <CardTitle className="text-lg text-card-foreground leading-tight">
                    {note.title}
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteNote(note.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans mb-3 line-clamp-6">
                  {note.content}
                </pre>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(note.date).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {notes.length === 0 && !isAdding && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No notes yet</h3>
            <p className="text-muted-foreground mb-4">Start tracking your workouts and goals</p>
            <Button variant="hero" onClick={() => setIsAdding(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Note
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NotesPage;