import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Add timestamp
      const message = await storage.createContactMessage({
        ...contactData,
        createdAt: new Date().toISOString(),
      });
      
      return res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        message: "Failed to send message",
        error: (error as Error).message
      });
    }
  });

  // Download resume endpoint
  app.get("/api/download/resume", (_req, res) => {
    // This would normally serve a real file, but for demo purposes we'll just return a success message
    res.json({ 
      message: "Resume download endpoint. In a real app, this would serve the resume file.",
      downloadUrl: "/john-doe-resume.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
