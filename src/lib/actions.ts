// @/lib/actions.ts
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just simulate a successful submission.
  console.log("Contact form submitted:", { name, email, message });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error (uncomment to test error handling)
  // if (Math.random() > 0.5) {
  //   return {
  //     message: "An unexpected error occurred. Please try again.",
  //     status: "error",
  //   };
  // }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    status: "success",
  };
}

// Placeholder for AI Analyzer action
const aiAnalyzerSchema = z.object({
  content: z.string().min(50, { message: "Portfolio content must be at least 50 characters." }),
});

export type AIAnalyzerState = {
  suggestions?: string[];
  message: string;
  status: "success" | "error" | "idle" | "loading";
  errors?: {
    content?: string[];
  };
};

export async function analyzePortfolioContentAction(
  prevState: AIAnalyzerState,
  formData: FormData
): Promise<AIAnalyzerState> {
  try {
    const content = formData.get("content");
    const validatedFields = aiAnalyzerSchema.safeParse({ content });

    if (!validatedFields.success) {
      return {
        message: "Validation failed.",
        status: "error",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    // Dynamically import the AI flow
    const { analyzePortfolioContent } = await import("@/ai/flows/portfolioAnalyzer");
    const analysisResults = await analyzePortfolioContent(validatedFields.data.content);

    return {
      suggestions: analysisResults,
      message: "Analysis complete!",
      status: "success",
    };
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return {
      message: "Failed to analyze content. Please try again later.",
      status: "error",
    };
  }
}
