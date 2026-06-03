"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap, registerGSAP } from "@/lib/gsap/config";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/security/contactSchema";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { honeypot: "" },
  });

  useGSAP(
    () => {
      registerGSAP();
      const fields = formRef.current?.querySelectorAll("[data-field]");
      if (!fields?.length) return;
      gsap.from(fields, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: formRef },
  );

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) throw new Error(json.error ?? "Failed to send");
      setStatus("success");
      setMessage(json.message ?? "Message sent successfully!");
      reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl rounded-2xl border border-border-light bg-white p-8 shadow-card"
      noValidate
    >
      <div data-field className="mb-6">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className={cn(
            "w-full rounded-md border bg-gray-50 px-4 py-3 text-text-dark transition-colors",
            errors.name ? "border-red-500" : "border-border-light focus:border-accent",
          )}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div data-field className="mb-6">
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "w-full rounded-md border bg-gray-50 px-4 py-3 text-text-dark",
            errors.email ? "border-red-500" : "border-border-light focus:border-accent",
          )}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div data-field className="mb-6">
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full rounded-md border border-border-light bg-gray-50 px-4 py-3 text-text-dark focus:border-accent"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div data-field className="mb-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full resize-none rounded-md border border-border-light bg-gray-50 px-4 py-3 text-text-dark focus:border-accent"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from users */}
      <input
        type="text"
        {...register("honeypot")}
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-accent py-3 font-medium text-white hover:bg-accent-hover disabled:opacity-50"
        whileTap={{ scale: 0.98 }}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <p className="mt-4 text-center text-green-400" role="status">
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-red-400" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
