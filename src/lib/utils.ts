import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FOUNDER_NAME = "Nadir Habib";
export const BRAND_NAME = "Digizier";
export const FOUNDER_LOCATION = "Karachi, Pakistan";
export const FOUNDER_TITLE = "CEO & Founder of Digizier";
export const FOUNDER_ROLE = "Digital Marketer & AI Automation Specialist";
export const BRAND_TAGLINE = "Digital Marketer & AI Automation";

export const WHATSAPP_NUMBER = "92322268568";
export const WHATSAPP_DISPLAY = "+92 322 2685688";
export const EMAIL_CONTACT = "info@digizier.com";

export const SOCIAL_LINKS = {
  website: "https://www.digizier.com/",
};

/**
 * Generates direct wa.me link with URL-encoded message
 */
export function getWhatsAppUrl(
  message: string = "👋 *Hello Nadir!* I am contacting you from the Digizier website to discuss a digital marketing or AI automation project."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds beautifully formatted WhatsApp message for Project Inquiry
 */
export function formatContactWhatsAppMessage(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}): string {
  const phoneText = data.phone?.trim() ? data.phone.trim() : "_Not provided_";
  const notesText = data.message?.trim() ? data.message.trim() : "_No details provided_";

  return [
    `👋 *New Project Inquiry | Digizier*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Client Name:* ${data.name.trim()}`,
    `📧 *Email Address:* ${data.email.trim()}`,
    `📱 *WhatsApp / Phone:* ${phoneText}`,
    ``,
    `🎯 *Primary Service Needed:*`,
    `> *${data.service}*`,
    ``,
    `📝 *Project Details & Goals:*`,
    notesText,
    `━━━━━━━━━━━━━━━━━━━━`,
    `⚡ _Sent directly from digizier.com inquiry form_`,
  ].join("\n");
}

/**
 * Builds beautifully formatted WhatsApp message for 30-Min Strategy Call Booking
 */
export function formatBookingWhatsAppMessage(data: {
  name: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
  timezone: string;
  notes?: string;
}): string {
  const notesText = data.notes?.trim() ? data.notes.trim() : "_None provided_";

  return [
    `📅 *Strategy Call Booking Request | Digizier*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Attendee Name:* ${data.name.trim()}`,
    `📧 *Email Address:* ${data.email.trim()}`,
    ``,
    `🎯 *Discussion Topic:*`,
    `> *${data.topic}*`,
    ``,
    `🗓️ *Requested Date:* ${data.date}`,
    `⏰ *Time Slot:* ${data.timeSlot}`,
    `🌍 *Client Timezone:* ${data.timezone}`,
    ``,
    `📝 *Project Notes / Current Numbers:*`,
    notesText,
    `━━━━━━━━━━━━━━━━━━━━`,
    `⚡ _Booked via digizier.com 30-Min Strategy Portal_`,
  ].join("\n");
}
