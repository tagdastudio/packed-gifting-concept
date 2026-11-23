export type NoteBlock = { type: "p" | "h2" | "quote"; text: string };

export type JournalNote = {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  reading: string;
  image: string;
  imageAlt: string;
  blocks: NoteBlock[];
};

export const notes: JournalNote[] = [
  {
    slug: "a-gift-for-someone-who-has-everything",
    title: "A gift for someone who has everything",
    standfirst:
      "The hardest person to buy for is usually the one who has stopped wanting things. The answer is not a smaller object. It is a different kind of gift.",
    date: "12 November 2026",
    reading: "4 min read",
    image: "/media/editorial/gift-red.jpg",
    imageAlt: "A cream parcel tied with a single red ribbon on a dark wooden table.",
    blocks: [
      {
        type: "p",
        text: "There is a particular kind of person who says, honestly, that they do not need anything. They mean it. They have the good knife, the good pen, the candle they actually burn. Adding another object to their shelf is not generosity; it is admin for them.",
      },
      {
        type: "p",
        text: "The mistake is to hear that and buy something smaller. A tiny object still asks for a place. What changes the equation is moving from the object to the moment: something to eat, something to use up, something to do, or something that arrives at the right time.",
      },
      { type: "h2", text: "Start with the next ordinary Tuesday" },
      {
        type: "p",
        text: "A box of good dates is not a grand gesture, which is exactly why it works. It lands on a Tuesday, it goes on the table, and it is gone by the weekend. The recipient does not have to find room for it. The pleasure is in the using, not the keeping.",
      },
      {
        type: "p",
        text: "The same is true of coffee, good salt, a jar of honey, a candle in a scent they already like. Consumables are not impersonal if they are specific. The question is not “what do they need?” but “what do they reach for without thinking?”",
      },
      { type: "h2", text: "Give the occasion, not the object" },
      {
        type: "p",
        text: "If they have everything, give them an afternoon. A table booked at the place they keep mentioning. A film they would not book themselves. A walk with lunch at the end. The gift is the plan, and the plan is the compliment: I listened, and I made a decision for you.",
      },
      {
        type: "p",
        text: "This takes more nerve than buying a candle. It also takes more attention, which is the actual material. A gift for someone who has everything is mostly a test of whether you have been paying attention.",
      },
      {
        type: "quote",
        text: "The best gift for someone who has everything is usually not a thing. It is a decision made on their behalf, with care.",
      },
      { type: "h2", text: "If it must be an object" },
      {
        type: "p",
        text: "Choose something that replaces rather than adds: a better version of a thing they already use. A sharper pair of scissors. A heavier glass. A linen tea towel that will outlast the printed one. The gift improves a daily action, so it earns its place every time it is used.",
      },
      {
        type: "p",
        text: "And write the note. A specific note turns even a humble box into evidence that someone was thinking about them. That is the part they keep.",
      },
    ],
  },
  {
    slug: "what-to-write-on-the-card",
    title: "What to write on the card",
    standfirst:
      "A gift note is not a receipt with a signature. It is the part of the gift that stays. Here is how to write one without sounding like a greeting card.",
    date: "28 October 2026",
    reading: "3 min read",
    image: "/media/editorial/tying-ribbon.jpg",
    imageAlt: "Two hands tying a black ribbon around a kraft paper gift box.",
    blocks: [
      {
        type: "p",
        text: "The card is the only part of a gift that is not consumed, used or put away. It is also the part most people leave until the last minute, then fill with “Hope you like it!” and a name. That is a missed opportunity, not a crime.",
      },
      { type: "h2", text: "Name the reason" },
      {
        type: "p",
        text: "Start with the occasion, plainly. “For the new flat.” “For the week you handled.” “For your birthday, which I am glad exists.” A specific opening does more work than an adjective. It tells the recipient why this box is in front of them.",
      },
      { type: "h2", text: "Say the true thing" },
      {
        type: "p",
        text: "One sentence of truth is enough. “I noticed you always make the coffee for everyone else.” “You were the only person who asked how it actually went.” “I still use the recipe you sent me.” The sentence should be something you would say out loud, not a compliment you found online.",
      },
      {
        type: "p",
        text: "Avoid the pressure to be profound. “I am glad you are here” is a complete note. So is “This is for the desk, not the cupboard.” Warmth is not the same as length.",
      },
      { type: "h2", text: "Leave a small instruction" },
      {
        type: "p",
        text: "A note can tell the recipient what to do next: “Open the honey first.” “Keep the tin.” “Eat the chocolate this week, not in December.” It is a small act of hosting, and it makes the gift feel considered rather than dispatched.",
      },
      {
        type: "quote",
        text: "Write the sentence you would say at the door, if you were handing it over yourself. Then stop.",
      },
      { type: "h2", text: "Sign it like a person" },
      {
        type: "p",
        text: "Your name, not your job title. If the gift is from a team, name the team and add one human line. If it is from a company to a client, the same rule applies: one specific sentence about the relationship, one plain sign-off. The rest is stationery.",
      },
      {
        type: "p",
        text: "At Packed, we print the note exactly as it is written. We will not add “warm regards” unless you ask. The card is the one part of the box we cannot improve for you.",
      },
    ],
  },
  {
    slug: "the-case-for-the-useful-gift",
    title: "The case for the useful gift",
    standfirst:
      "Decorative gifts photograph well and disappear quietly. The things people actually use are the ones that keep the giver in the room.",
    date: "9 October 2026",
    reading: "4 min read",
    image: "/media/editorial/wrapping-gold.jpg",
    imageAlt: "A kraft paper gift tied with gold ribbon, scissors and a blank card on a warm table.",
    blocks: [
      {
        type: "p",
        text: "There is a shelf in every home for gifts that were too beautiful to throw away and too useless to use. The brass elephant. The tiny bowl. The candle shaped like a flower. They are not bad objects. They are just unemployed.",
      },
      {
        type: "p",
        text: "A useful gift is not boring. It is a bet that the recipient has a life, and that the gift can join it. A good cup gets picked up every morning. A linen napkin goes into the wash. A tin of almonds is opened the day it arrives. Every use is a small return of the gesture.",
      },
      { type: "h2", text: "Useful does not mean practical" },
      {
        type: "p",
        text: "The point is not to give socks and call it thoughtful. It is to give something with a job, made better than the version they would buy themselves. A hand-thrown cup is useful and a small luxury. A cold-pressed oil is useful and tastes like something. The usefulness is the excuse; the quality is the gift.",
      },
      {
        type: "p",
        text: "This is why we like food, table things and desk things. They have a clear place in a day. They do not require a display shelf or a difficult decision about where to put them.",
      },
      { type: "h2", text: "The test of a good box" },
      {
        type: "p",
        text: "When we pack a box, we ask three questions. Will it be used within a week? Would the recipient buy it again? Does it make an ordinary action a little better? If the answer to two of the three is yes, the box is probably right.",
      },
      {
        type: "quote",
        text: "A useful gift is not a smaller gesture. It is a longer one.",
      },
      {
        type: "p",
        text: "The decorative gift has its place: the wedding, the milestone, the thing that is meant to be kept. But for the everyday thank-you, the new home, the first day, the ordinary Tuesday, useful is the more generous choice. It says: I thought about your actual life, not the photograph of it.",
      },
    ],
  },
];

export const getNote = (slug: string) => notes.find((note) => note.slug === slug);
