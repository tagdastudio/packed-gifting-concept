export type FaqGroup = {
  title: string;
  items: { q: string; a: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: "Ordering & delivery",
    items: [
      {
        q: "How far in advance should I order?",
        a: "Most boxes are packed in 4–7 days. Corporate and wedding orders need 2–4 weeks, and festive weeks fill earlier. If your date is tight, message us before ordering and we will tell you honestly whether we can make it.",
      },
      {
        q: "Where do you deliver?",
        a: "Local delivery in Mysuru, and courier across India on request. We confirm the delivery window and the courier before we pack. Some fragile and food items travel only by surface courier.",
      },
      {
        q: "Can I collect from the shop?",
        a: "Yes. Choose collection when you message us, and we will keep the box behind the counter with your name on it. Collection is free; local delivery is quoted by address.",
      },
      {
        q: "Can you deliver to several addresses?",
        a: "Yes, for corporate and wedding orders. Send the address list as a spreadsheet with names and phone numbers. We pack each box with its own note card and track every parcel separately.",
      },
      {
        q: "What if something is out of stock?",
        a: "We tell you before you pay and offer a like-for-like swap from the same maker. We do not substitute quietly. If the swap is not right, we will hold the order or refund the item.",
      },
    ],
  },
  {
    title: "Contents & allergens",
    items: [
      {
        q: "Are the boxes vegetarian?",
        a: "Most are. Every box lists its diet tags on the page, and the note card inside repeats the allergen line. If you need a fully vegetarian or eggless order, tell us before we pack.",
      },
      {
        q: "Do you offer nut-free boxes?",
        a: "We offer boxes with no nuts in the contents, but our kitchen handles nuts, milk and wheat. We cannot promise a nut-free environment. If the recipient has a severe allergy, please do not order food from us.",
      },
      {
        q: "How long do the contents keep?",
        a: "Each hamper page gives a shelf life. Chocolate and biscuits are best within 6–8 weeks. Honey, oil and tea keep longer. We pack the newest stock we have and print the packing date on the card.",
      },
      {
        q: "Can I swap an item?",
        a: "Within the same price band, usually yes. Message us with the box name and the item you want to change. For corporate orders, swaps are confirmed in the written quote.",
      },
      {
        q: "Do you include alcohol?",
        a: "No. We do not pack alcohol, and we do not deliver to addresses where alcohol is prohibited. We can build a celebratory box without it.",
      },
    ],
  },
  {
    title: "Corporate & bulk",
    items: [
      {
        q: "What is the minimum corporate order?",
        a: "Twenty-five boxes. Below that, you can order from the site like anyone else. From twenty-five, we quote per unit because the contents, budget and delivery list are worth a conversation.",
      },
      {
        q: "Can you invoice with GST?",
        a: "Yes. We issue a tax invoice in your company's name against the GSTIN you provide. For this concept, the GST details are illustrative; a real client's terms are confirmed in writing.",
      },
      {
        q: "Can we put our logo on the box?",
        a: "We print your message and sign-off on the note card. Printed sleeves and foil-stamped lids are not part of the current service. We would rather say that plainly than promise a finish we cannot deliver.",
      },
      {
        q: "What are the payment terms?",
        a: "Fifty per cent against a proforma invoice, with the balance before dispatch. For large or custom orders, the schedule is written into the quote. We do not ask for payment before the brief is agreed.",
      },
      {
        q: "Can we see a sample first?",
        a: "For orders above 100 boxes, yes. We make one sample box and send it for approval. The sample cost is adjusted against the final invoice.",
      },
    ],
  },
  {
    title: "Weddings & celebrations",
    items: [
      {
        q: "Do you make wedding favours?",
        a: "Yes: welcome boxes, return gifts, bridal-party boxes, trousseau packaging and children's boxes. We work from a palette, a date, a guest count and a budget per box.",
      },
      {
        q: "Can the boxes match our invitation?",
        a: "We can match paper, ribbon, seal and note card to a printed invitation or a palette. We do not reprint the invitation itself. Send us a physical sample or a clear photograph.",
      },
      {
        q: "What is the minimum for wedding orders?",
        a: "Twenty-five boxes per design. Smaller orders are possible for bridal-party boxes; message us with the count and date.",
      },
      {
        q: "How early should we book?",
        a: "Four to six weeks before the date for a comfortable build. Three weeks is possible for a simpler box. During the wedding season, earlier is better.",
      },
      {
        q: "Can you deliver to the venue?",
        a: "Yes. We deliver to the venue or to a hotel, with the boxes labelled by room or family. Someone from the wedding needs to receive them and sign for the count.",
      },
    ],
  },
];
