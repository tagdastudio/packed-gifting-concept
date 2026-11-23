export const corporate = {
  minUnits: 25,
  services: [
    {
      title: "Welcome kits",
      body: "A first day that feels considered: desk things, coffee, a notebook and a printed welcome note.",
    },
    {
      title: "Client & leadership",
      body: "Quiet, useful gifts for the people whose opinion of your judgement is worth something.",
    },
    {
      title: "Festive hampers",
      body: "Diwali and year-end boxes at scale, with one note card per recipient and tracked delivery.",
    },
    {
      title: "Events & conferences",
      body: "Speaker gifts, delegate boxes and room drops, labelled by name and delivered to the venue.",
    },
    {
      title: "Employee milestones",
      body: "Anniversaries, promotions and thank-yous, packed the same way as the leadership boxes.",
    },
  ],
  process: [
    { title: "The brief", body: "Quantity, budget per box, occasion, date and where it needs to go." },
    { title: "The shortlist", body: "Two or three boxes with a per-unit price and the full contents, in writing." },
    { title: "The sample", body: "For larger orders, one physical box for approval before production." },
    { title: "The pack", body: "We make, check and label every box. Your note is printed exactly as written." },
    { title: "The delivery", body: "One office, several offices or individual homes, with every parcel tracked." },
  ],
  terms: [
    "Corporate orders start at 25 boxes.",
    "GST invoice in your company's name, against your GSTIN.",
    "50% against a proforma invoice; the balance before dispatch.",
    "Printed note cards are included. Logo sleeves and foil lids are not part of the current service.",
    "Dispatch in 1–3 working days after approval; delivery in 3–7 days across India.",
    "Address lists must be accurate. Re-delivery caused by a wrong address may be charged.",
  ],
  faqs: [
    {
      q: "Can you handle a multi-city delivery?",
      a: "Yes. Send one row per recipient with name, phone, address and pin code. Each box is packed with its own note and tracked separately.",
    },
    {
      q: "Can we approve the contents before production?",
      a: "Yes. You receive a written contents list and, above 100 boxes, a physical sample. Nothing is produced until you approve both.",
    },
    {
      q: "What if a product is unavailable?",
      a: "We tell you before production and propose a like-for-like swap from the same price band. We do not substitute quietly.",
    },
    {
      q: "Do you offer branded merchandise?",
      a: "No. We are a gifting house, not a merchandise supplier. We can include a client-supplied item in the box if it fits the packing plan.",
    },
  ],
} as const;
