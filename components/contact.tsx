"use client";
import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<null | {
    ok: boolean;
    message: string;
  }>(null);

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, message: "Please fill in all fields." });
      return false;
    }
    // basic email check
    if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setStatus({ ok: false, message: "Please enter a valid email address." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: data.message || "Message sent." });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          ok: false,
          message: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({ ok: false, message: "Network error." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            We&apos;d love to hear from you. Reach out for partnerships, support, or
            anything in between.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium">Address</h3>
              <p className="text-sm text-muted-foreground">
                Ameyaa SEO
                <br /> Chennai, TN 600 116
                <br /> India
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">
                contact@ameyaa.com
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 96000 51312</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border p-6">
          <div className="grid gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 text-sm"
                placeholder="Your name"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 rounded-md border px-3 py-2 text-sm"
                placeholder="you@company.com"
                type="email"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 min-h-[120px] rounded-md border px-3 py-2 text-sm"
                placeholder="How can we help?"
                required
              />
            </label>

            {status && (
              <div
                className={`text-sm ${
                  status.ok ? "text-green-600" : "text-destructive"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
