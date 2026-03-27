export const WHATSAPP_URL =
  "https://wa.me/918310285869?text=Hi%2C%20I%27m%20interested%20in%20personal%20training!";

export const PHONE_NUMBER = "+91 83102 85869";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Sessions Completed" },
  { value: 0, suffix: "", label: "Anywhere in Bangalore" },
  { value: 0, suffix: "", label: "Diet + Training + App" },
] as const;

export const SERVICES = [
  {
    icon: "Dumbbell" as const,
    title: "1-on-1 Personal Training",
    description:
      "I come to you — home, office, apartment gym, or park. Fully customized training sessions tailored to your goals, fitness level, and schedule.",
    tag: "₹1,000/session",
  },
  {
    icon: "UtensilsCrossed" as const,
    title: "Complete Diet Plan",
    description:
      "Online consultation to understand your lifestyle, followed by a fully customized Indian-diet-friendly meal plan. Vegetarian and non-veg options available.",
    tag: "Online Consultation",
  },
  {
    icon: "ClipboardList" as const,
    title: "Custom Workout Plans",
    description:
      "Structured weekly workout programs designed for your goals — fat loss, muscle building, strength, or general fitness. Updated monthly.",
    tag: "Updated Monthly",
  },
  {
    icon: "Smartphone" as const,
    title: "Personal Fitness App",
    description:
      "Track your workouts, log nutrition, monitor progress — all in one app. Like Strong + MyFitnessPal, built for your plan. Included free with any purchase.",
    tag: "Included Free",
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Online Workout Plan",
    price: "₹1,999",
    period: "one-time",
    originalPrice: null,
    popular: false,
    features: [
      "100% online program",
      "Custom workout program",
      "Exercise video guides",
      "Monthly plan updates",
      "Fitness app access",
      "WhatsApp support",
    ],
    cta: "Get Started",
  },
  {
    name: "Transformation Pack",
    price: "₹24,000",
    period: "30 sessions",
    originalPrice: "₹30,000",
    popular: true,
    features: [
      "30 personal training sessions",
      "Complete diet plan",
      "Custom workout program",
      "Fitness app access",
      "WhatsApp support",
      "Home/office/gym — your choice",
    ],
    cta: "Book Free Trial",
  },
  {
    name: "Personal Training",
    price: "₹1,000",
    period: "per session",
    originalPrice: null,
    popular: false,
    features: [
      "1-on-1 in-person session",
      "Home, office, or gym",
      "60-minute session",
      "Form correction & coaching",
      "Flexible scheduling",
    ],
    cta: "Book a Session",
  },
] as const;

export const STEPS = [
  {
    icon: "MessageCircle" as const,
    title: "Message Me",
    description:
      "Tap the button below to reach me on WhatsApp. Tell me about your goals.",
  },
  {
    icon: "UserCheck" as const,
    title: "Free Consultation",
    description:
      "We'll discuss your fitness level, goals, diet preferences, and schedule a free trial session.",
  },
  {
    icon: "Rocket" as const,
    title: "Start Training",
    description:
      "Begin your transformation with personalized training, nutrition, and app tracking.",
  },
] as const;

export const APP_FEATURES = [
  "Log every workout with sets, reps, and weight",
  "Track daily nutrition and calories",
  "Monitor your progress with charts",
  "Access your custom workout plan anytime",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Best decision I made for my fitness. Having a trainer come to my apartment in Whitefield saved me hours every week. Lost 8kg in 3 months!",
    name: "Rahul S.",
    detail: "Software Engineer, Whitefield",
    initials: "RS",
    rating: 5,
  },
  {
    quote:
      "The diet plan actually works with Indian food — finally someone who doesn't just say 'eat chicken and broccoli.' The app makes tracking so easy.",
    name: "Priya M.",
    detail: "Marketing Manager, Koramangala",
    initials: "PM",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about personal training but the free trial convinced me. The convenience of training at home plus the app is unbeatable value.",
    name: "Arjun K.",
    detail: "Startup Founder, Indiranagar",
    initials: "AK",
    rating: 5,
  },
] as const;

export const SOCIAL_PROOF = [
  "Google",
  "Flipkart",
  "Infosys",
  "Amazon",
  "Swiggy",
  "Razorpay",
  "Wipro",
  "Microsoft",
] as const;

export const TRANSFORMATIONS = [
  {
    name: "Vikram R.",
    location: "Whitefield",
    beforeWeight: "92 kg",
    afterWeight: "78 kg",
    duration: "16 weeks",
    initials: "VR",
    metric: "-14 kg",
  },
  {
    name: "Sneha D.",
    location: "HSR Layout",
    beforeWeight: "74 kg",
    afterWeight: "62 kg",
    duration: "12 weeks",
    initials: "SD",
    metric: "-12 kg",
  },
  {
    name: "Karthik M.",
    location: "Koramangala",
    beforeWeight: "85 kg",
    afterWeight: "73 kg",
    duration: "14 weeks",
    initials: "KM",
    metric: "-12 kg",
  },
  {
    name: "Ananya P.",
    location: "Indiranagar",
    beforeWeight: "68 kg",
    afterWeight: "58 kg",
    duration: "10 weeks",
    initials: "AP",
    metric: "-10 kg",
  },
] as const;

export const CREDENTIALS = [
  { value: "ACE", label: "Certified Personal Trainer", icon: "Award" as const },
  { value: "5+", label: "Years of Experience", icon: "Calendar" as const },
  { value: "200+", label: "Clients Transformed", icon: "Users" as const },
  { value: "ISSN", label: "Sports Nutrition Certified", icon: "GraduationCap" as const },
] as const;

export const COMPARISON = [
  {
    feature: "Personalized program",
    gym: false,
    pt: true,
  },
  {
    feature: "Comes to your location",
    gym: false,
    pt: true,
  },
  {
    feature: "Form correction & safety",
    gym: false,
    pt: true,
  },
  {
    feature: "Custom diet plan",
    gym: false,
    pt: true,
  },
  {
    feature: "Fitness tracking app",
    gym: false,
    pt: true,
  },
  {
    feature: "Accountability & motivation",
    gym: false,
    pt: true,
  },
  {
    feature: "Flexible schedule",
    gym: true,
    pt: true,
  },
  {
    feature: "Monthly cost",
    gym: "₹2-5K",
    pt: "₹8-24K",
  },
] as const;

export const INSTAGRAM_POSTS = [
  { caption: "Morning HIIT session at Cubbon Park", tag: "Outdoor Training", color: "from-zinc-800 to-zinc-900" },
  { caption: "Client meal prep — South Indian style", tag: "Nutrition", color: "from-zinc-800 to-zinc-900" },
  { caption: "Progressive overload — squat PR day", tag: "Strength", color: "from-zinc-800 to-zinc-900" },
  { caption: "Recovery day stretching routine", tag: "Recovery", color: "from-zinc-800 to-zinc-900" },
  { caption: "Home gym setup that actually works", tag: "Home Training", color: "from-zinc-800 to-zinc-900" },
  { caption: "Quick 20-min ab workout breakdown", tag: "Core", color: "from-zinc-800 to-zinc-900" },
] as const;

export const BLOG_POSTS = [
  {
    title: "5 High-Protein Indian Breakfast Ideas for Muscle Building",
    excerpt: "Forget oats and eggs every day. Here are 5 desi breakfast options packed with 30g+ protein that actually taste good.",
    tag: "Nutrition",
    readTime: "4 min read",
  },
  {
    title: "Why You Don't Need a Gym to Get Fit in Bangalore",
    excerpt: "From apartment gyms to parks — how to build an effective workout routine without a commercial gym membership.",
    tag: "Training",
    readTime: "5 min read",
  },
  {
    title: "The Beginner's Guide to Strength Training After 30",
    excerpt: "Starting strength training later in life? Here's everything you need to know about building muscle safely.",
    tag: "Beginners",
    readTime: "6 min read",
  },
] as const;

export const BANGALORE_AREAS = [
  { name: "Koramangala", x: 52, y: 58 },
  { name: "Indiranagar", x: 58, y: 42 },
  { name: "Whitefield", x: 78, y: 38 },
  { name: "HSR Layout", x: 55, y: 68 },
  { name: "Jayanagar", x: 42, y: 62 },
  { name: "Marathahalli", x: 68, y: 42 },
  { name: "Electronic City", x: 50, y: 82 },
  { name: "Bannerghatta", x: 45, y: 78 },
  { name: "Hebbal", x: 48, y: 22 },
  { name: "Yelahanka", x: 45, y: 12 },
] as const;

export const FAQS = [
  {
    question: "Where in Bangalore do you train?",
    answer:
      "I travel anywhere in Bangalore — your home, apartment gym, office gym, nearby park, or any commercial gym you have access to. No location is too far.",
  },
  {
    question: "What does a typical session look like?",
    answer:
      "Each session is 60 minutes. We start with a dynamic warm-up, move into the main workout (strength training, HIIT, or a mix based on your goals), and finish with cool-down and stretching. Every session is planned in advance based on your program.",
  },
  {
    question: "I'm a complete beginner. Is that okay?",
    answer:
      "Absolutely. I work with all fitness levels from complete beginners to experienced lifters. Your program is built specifically for where you are right now and progresses at your pace.",
  },
  {
    question: "How does the nutrition plan work?",
    answer:
      "We start with an online consultation where I understand your lifestyle, food preferences, allergies, budget, and goals. Then I create a fully customized meal plan using Indian foods you actually enjoy eating. No generic cookie-cutter diets.",
  },
  {
    question: "What is the fitness app?",
    answer:
      "It's a personal app where you can log your workouts (sets, reps, weights), track your daily nutrition, and see your progress over time. Think of it like Strong + MyFitnessPal combined, customized for your plan. It's included free with any purchase.",
  },
  {
    question: "Can I try a session before committing?",
    answer:
      "Yes! I offer a free trial session so you can experience the training firsthand. No commitment, no pressure. Just message me on WhatsApp to book one.",
  },
] as const;
