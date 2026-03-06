"use client";

import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: "🌸",
    name: "Facial",
    description:
      "Customized facial treatments to deeply cleanse, hydrate, and rejuvenate your skin for a natural, healthy glow.",
    price: "$100",
  },
  {
    icon: "✨",
    name: "Anti-Aging Treatment",
    description:
      "Advanced anti-aging therapies targeting fine lines, wrinkles, and loss of elasticity for visibly younger-looking skin.",
    price: "$100",
  },
  {
    icon: "💧",
    name: "Acne Treatment",
    description:
      "Targeted treatments to combat acne, reduce scarring, and restore clear, confident skin.",
    price: "$100",
  },
  {
    icon: "🔬",
    name: "Laser Hair Removal",
    description:
      "Permanent hair reduction using the latest laser technology. Safe, effective, and suitable for all skin types.",
    price: "$120",
  },
  {
    icon: "🪷",
    name: "Waxing",
    description:
      "Smooth, long-lasting hair removal for face and body using premium wax products for minimal discomfort.",
    price: "$80",
  },
  {
    icon: "🌊",
    name: "Body Slimming",
    description:
      "Non-invasive body contouring and slimming treatments to help sculpt and tone your silhouette.",
    price: "$70",
  },
  {
    icon: "🤲",
    name: "Massage",
    description:
      "Therapeutic full-body and targeted massage to relieve tension, reduce stress, and restore your body's balance.",
    price: "$150",
  },
  {
    icon: "🖋️",
    name: "Tattoo Removal",
    description:
      "Safe and effective laser tattoo removal with minimal downtime, suitable for all ink colors and skin tones.",
    price: "$180",
  },
];

const reviews = [
  {
    name: "Tran Linh",
    text: "Had an amazing facial here! The ambiance was so relaxing and the staff was professional. My skin feels incredibly hydrated and glowing now.",
  },
  {
    name: "Nguyen Lam",
    text: "Great service, friendly and professional staff. Clean, relaxing environment. Highly recommend Canadian Wellness & Beauty!",
  },
  {
    name: "Anh Tuan Hoang",
    text: "We visited for Laser Hair Removal and a Facial, and I'm really impressed. The staff were kind, patient, and professional, and they made sure my girlfriend felt comfortable the whole time.",
  },
  {
    name: "Nguyen Ngoc Quynh",
    text: "Great facial massage service. The therapist is professional, attentive, and listens carefully to clients' needs. Excellent quality for the price.",
  },
  {
    name: "Annie Le",
    text: "Highly recommend! Clean and comfortable place for a weekend facial. 🙂",
  },
  {
    name: "Alian Ji",
    text: "Good service and great people and beautiful place.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroStrip />
        <ServicesSection />
        <PromoBanner />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="font-heading text-xl font-semibold tracking-wide text-charcoal md:text-2xl"
        >
          Canadian Wellness &amp; Beauty
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="pulse-cta rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 border-b border-blush/30 bg-white" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-5 pb-6 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted transition-colors hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-block rounded-full bg-gold px-6 py-2.5 text-center text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #D4B8A0 0%, #FAF7F4 60%, #FAF7F4 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blush/20" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10" />

      <div
        className={`relative z-10 mx-auto max-w-3xl px-5 text-center transition-all duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h1 className="font-heading text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
          Your Journey to Radiant Beauty Starts Here
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg md:mt-6">
          Professional skincare, laser treatments &amp; wellness services in the
          heart of Burnaby, BC
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#booking"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Book Your First Visit
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-gold px-8 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Explore Services
          </a>
        </div>
        <div className="mt-6 inline-block rounded-full bg-white/70 px-5 py-2 text-sm font-medium text-charcoal backdrop-blur">
          ✨ 50% OFF Your First Visit
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INTRO STRIP                                                        */
/* ------------------------------------------------------------------ */

function IntroStrip() {
  const items = [
    {
      icon: "🌿",
      title: "Natural & Professional",
      text: "Certified therapists with years of experience",
    },
    {
      icon: "✨",
      title: "Advanced Treatments",
      text: "State-of-the-art laser and skincare technology",
    },
    {
      icon: "💆",
      title: "Relaxing Environment",
      text: "A calm, clean sanctuary just for you",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="stagger-children mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3 md:px-8">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <span className="text-4xl">{item.icon}</span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted">
            Everything you need to look and feel your best
          </p>
        </div>

        <div className="stagger-children mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
              {/* TODO: Update prices as needed */}
              <p className="mt-4 text-sm font-semibold text-gold">
                Starting at {s.price}
              </p>
              <a
                href="#booking"
                className="mt-3 inline-block text-sm font-medium text-gold underline-offset-4 transition-colors hover:underline"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROMO BANNER                                                       */
/* ------------------------------------------------------------------ */

function PromoBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, 1 - rect.top / window.innerHeight)
      );
      setScale(1 + ratio * 0.03);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #C9A882, #D4B8A0)",
        transform: `scale(${scale})`,
      }}
    >
      <div className="animate-on-scroll relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          50% OFF Your First Visit
        </h2>
        <p className="mt-4 text-base text-white/90 sm:text-lg">
          Book today and experience the Canadian Wellness &amp; Beauty
          difference at half the price.
        </p>
        {/* TODO: Add Calendly URL */}
        <a
          href="https://calendly.com/welcome2wellness"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gold shadow-lg transition-transform hover:scale-105"
        >
          Claim Your Discount
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  REVIEWS                                                            */
/* ------------------------------------------------------------------ */

function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-gold">
              5.0 on Google
            </span>
          </div>
        </div>

        {/* Desktop grid / mobile horizontal scroll */}
        <div className="no-scrollbar mt-12 flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] shrink-0 rounded-2xl border border-blush/20 bg-cream p-6 lg:min-w-0"
            >
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                {r.name}
              </p>
              <p className="text-xs text-muted">— via Google Reviews</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="star-gold flex gap-0.5 text-lg" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BOOKING                                                            */
/* ------------------------------------------------------------------ */

function BookingSection() {
  return (
    <section id="booking" className="scroll-mt-20 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Ready to Glow?
          </h2>
          <p className="mt-3 text-muted">
            Book your appointment online in just a few clicks
          </p>
        </div>

        {/* TODO: Add Calendly URL — Calendly inline embed */}
        <div className="animate-on-scroll mt-10 overflow-hidden rounded-2xl bg-white shadow-sm">
          <iframe
            src="https://calendly.com/welcome2wellness"
            title="Book an appointment"
            className="w-full border-0"
            style={{ minHeight: "700px" }}
          />
          {/* Fallback if Calendly doesn't load */}
          <noscript>
            <div className="p-10 text-center">
              <p className="text-muted">
                Unable to load the booking widget. Please visit our booking page
                directly.
              </p>
              <a
                href="https://calendly.com/welcome2wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white"
              >
                Book on Calendly
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="animate-on-scroll mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
        {/* Left — Info */}
        <div>
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Visit Us
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-charcoal">
              Canadian Wellness &amp; Beauty
            </p>
            <p>
              #208 - 7877B Kingsway, Burnaby, BC
              <br />
              <span className="text-xs">(Intercom: Press 28 + Enter)</span>
            </p>
            <p>
              <a
                href="tel:2368802992"
                className="text-gold transition-colors hover:underline"
              >
                236-880-2992
              </a>
            </p>
            {/* TODO: Add business hours */}
            <p>
              <span className="font-medium text-charcoal">Hours:</span>{" "}
              Mon–Sat 10 AM – 7 PM &nbsp;|&nbsp; Sun Closed
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.092 4.092 0 011.523.99 4.092 4.092 0 01.99 1.524c.163.46.349 1.26.403 2.43.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.092 4.092 0 01-.99 1.523 4.092 4.092 0 01-1.524.99c-.46.163-1.26.349-2.43.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.092 4.092 0 01-1.523-.99 4.092 4.092 0 01-.99-1.524c-.163-.46-.349-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.092 4.092 0 01.99-1.523A4.092 4.092 0 015.15 2.207c.46-.163 1.26-.349 2.43-.403C8.845 2.175 9.225 2.163 12 2.163zm0 1.802c-3.153 0-3.506.012-4.744.069-1.14.052-1.76.243-2.17.404a3.634 3.634 0 00-1.35.878 3.634 3.634 0 00-.878 1.35c-.161.41-.352 1.03-.404 2.17-.057 1.238-.069 1.591-.069 4.744s.012 3.506.069 4.744c.052 1.14.243 1.76.404 2.17.192.51.455.98.878 1.35.37.423.84.686 1.35.878.41.161 1.03.352 2.17.404 1.238.057 1.591.069 4.744.069s3.506-.012 4.744-.069c1.14-.052 1.76-.243 2.17-.404a3.634 3.634 0 001.35-.878c.423-.37.686-.84.878-1.35.161-.41.352-1.03.404-2.17.057-1.238.069-1.591.069-4.744s-.012-3.506-.069-4.744c-.052-1.14-.243-1.76-.404-2.17a3.634 3.634 0 00-.878-1.35 3.634 3.634 0 00-1.35-.878c-.41-.161-1.03-.352-2.17-.404-1.238-.057-1.591-.069-4.744-.069zm0 3.07a4.965 4.965 0 110 9.93 4.965 4.965 0 010-9.93zm0 1.802a3.163 3.163 0 100 6.326 3.163 3.163 0 000-6.326zm5.168-2.01a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right — Map */}
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="Canadian Wellness & Beauty location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.3!2d-122.9878!3d49.2244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEzJzI3LjgiTiAxMjLCsDU5JzE2LjAiVw!5e0!3m2!1sen!2sca!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-center text-sm text-white/70">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-heading text-2xl font-semibold text-white">
          Canadian Wellness &amp; Beauty
        </p>
        <p className="mt-2 italic text-white/50">
          Your beauty, our passion.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="#services" className="transition-colors hover:text-gold">
            Services
          </a>
          <a href="#booking" className="transition-colors hover:text-gold">
            Book Now
          </a>
          <a href="#contact" className="transition-colors hover:text-gold">
            Contact
          </a>
        </div>
        <p className="mt-8 text-xs text-white/40">
          © 2025 Canadian Wellness &amp; Beauty. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-white/40">
          #208 - 7877B Kingsway, Burnaby, BC &nbsp;|&nbsp; 236-880-2992
        </p>
      </div>
    </footer>
  );
}
