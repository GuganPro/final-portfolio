// @/components/contact-form.tsx
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof formSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: "default",
      });
      form.reset(); // Reset form fields on successful submission
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      // Populate field errors from server action state
      if (state.errors) {
        if (state.errors.name) form.setError("name", { type: "server", message: state.errors.name.join(', ') });
        if (state.errors.email) form.setError("email", { type: "server", message: state.errors.email.join(', ') });
        if (state.errors.message) form.setError("message", { type: "server", message: state.errors.message.join(', ') });
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your Name" 
                  {...field} 
                  className="bg-input text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  {...field} 
                  className="bg-input text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message..." 
                  {...field} 
                  rows={5}
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
          disabled={form.formState.isSubmitting || state.status === 'success'}
          aria-label="Send message"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
