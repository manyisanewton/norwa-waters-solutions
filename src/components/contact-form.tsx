"use client";

import { useState, type FormEvent } from "react";
import Swal from "sweetalert2";

const WEB3FORMS_ACCESS_KEY = "7658ae31-0a04-4fbf-b3a0-26b3dded800d";

type Field =
  | {
      label: string;
      name: string;
      type?: "email" | "tel" | "text";
      placeholder?: string;
      required?: boolean;
    }
  | {
      label: string;
      name: string;
      type: "select";
      options: string[];
      required?: boolean;
    }
  | {
      label: string;
      name: string;
      type: "textarea";
      placeholder?: string;
      required?: boolean;
      wide?: boolean;
    };

type ContactFormProps = {
  buttonLabel: string;
  fields: Field[];
  formName: string;
  gridClassName?: string;
};

export function ContactForm({
  buttonLabel,
  fields,
  formName,
  gridClassName = "form-grid",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `${formName} - Norwa Waters`);
    formData.append("from_name", "Norwa Waters Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        await Swal.fire({
          title: "Request submitted",
          text: "Thank you. We will reach out soon.",
          icon: "success",
          confirmButtonColor: "#03A9E2",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      await Swal.fire({
        title: "Could not send request",
        text: "Please try again or contact us directly by phone or email.",
        icon: "error",
        confirmButtonColor: "#03A9E2",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="form_type" type="hidden" value={formName} />
      <div className={gridClassName}>
        {fields.map((field) => (
          <div
            className={
              field.type === "textarea" || ("wide" in field && field.wide)
                ? "field field--wide"
                : "field"
            }
            key={field.name}
          >
            <label htmlFor={field.name}>
              {field.label}
              {field.required ? " *" : ""}
            </label>
            {field.type === "select" ? (
              <select id={field.name} name={field.name} required={field.required}>
                <option value="">Select one</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type ?? "text"}
              />
            )}
          </div>
        ))}
      </div>
      <button className="form-submit" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
}
