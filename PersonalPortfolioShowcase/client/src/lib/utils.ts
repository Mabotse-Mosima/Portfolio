import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function downloadResume(): Promise<void> {
  try {
    const response = await fetch('/api/download/resume');
    const data = await response.json();
    
    // In a real application, this would download the actual file
    window.open(data.downloadUrl, '_blank');
  } catch (error) {
    console.error('Failed to download resume:', error);
    throw new Error('Failed to download resume');
  }
}

export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
