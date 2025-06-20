// @/components/sections/ai-analyzer-section.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormState } from "react-dom";
import { analyzePortfolioContentAction, type AIAnalyzerState } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Loader2, Sparkles, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  content: z.string().min(50, { message: "Portfolio content must be at least 50 characters to analyze effectively." }),
});

type AIAnalyzerFormData = z.infer<typeof formSchema>;

const initialState: AIAnalyzerState = {
  message: "",
  status: "idle",
};

export function AiAnalyzerSection() {
  const [state, formAction] = useFormState(analyzePortfolioContentAction, initialState);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AIAnalyzerFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  useEffect(() => {
    setIsLoading(state.status === 'loading');
    if (state.status === "success" && state.suggestions) {
      toast({
        title: "Analysis Complete!",
        description: state.message,
        variant: "default",
      });
    } else if (state.status === "error") {
      toast({
        title: "Analysis Error",
        description: state.message,
        variant: "destructive",
      });
       if (state.errors?.content) form.setError("content", { type: "server", message: state.errors.content.join(', ') });
    }
  }, [state, toast, form]);
  
  const onSubmit = async (data: AIAnalyzerFormData) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("content", data.content);
    await formAction(formData); // formAction will update state, which useEffect listens to
    // setIsLoading(false); // setIsLoading handled by useEffect based on state.status
  };


  return (
    <section id="ai-analyzer" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Portfolio <span className="text-gradient">Content Analyzer</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Leverage AI to get insights and suggestions for improving your portfolio content. Paste your text below and let the AI assist you.
        </p>
        <Card className="max-w-3xl mx-auto bg-card border-border shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Sparkles className="mr-2 h-6 w-6 text-primary" />
              AI-Powered Suggestions
            </CardTitle>
            <CardDescription>
              Enter your portfolio description, project details, or any text you'd like to get feedback on.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">Your Portfolio Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste your portfolio content here (e.g., about section, project descriptions)..."
                          {...field}
                          rows={8}
                          className="bg-input text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full glow-primary shadow-lg"
                  disabled={isLoading}
                  aria-label="Analyze content"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  {isLoading ? "Analyzing..." : "Analyze Content"}
                </Button>
              </form>
            </Form>

            {state.status === "success" && state.suggestions && state.suggestions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Suggestions:
                </h3>
                <ul className="space-y-3 list-disc list-inside bg-muted/30 p-4 rounded-md">
                  {state.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
            {state.status === "error" && state.message && (
                 <div className="mt-8 p-4 bg-destructive/10 text-destructive border border-destructive/30 rounded-md flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-3 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold">Analysis Failed</h4>
                        <p className="text-sm">{state.message}</p>
                    </div>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
