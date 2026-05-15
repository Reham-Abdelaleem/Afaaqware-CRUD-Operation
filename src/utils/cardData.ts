export interface CardDataItem {
  id: number;
  titleKey: string;
  textKey: string;
}

export const cardData: CardDataItem[] = [
  {
    id: 1,
    titleKey: "cards.card1.title",
    textKey: "cards.card1.text",
  },
  {
    id: 2,
    titleKey: "cards.card2.title",
    textKey: "cards.card2.text",
  },
  {
    id: 3,
    titleKey: "cards.card3.title",
    textKey: "cards.card3.text",
  },
  {
    id: 4,
    titleKey: "cards.card4.title",
    textKey: "cards.card4.text",
  },
];

export interface LastCardDataItem {
  id: number;
  titleKey: string;
  textKey: string;
  btnKey: string;
}

export const lastCardData: LastCardDataItem[] = [
  {
    id: 1,
    titleKey: "lastCard.cards.card1.title",
    textKey: "lastCard.cards.card1.text",
    btnKey: "lastCard.cards.card1.btn",
  },
  {
    id: 2,
    titleKey: "lastCard.cards.card2.title",
    textKey: "lastCard.cards.card2.text",
    btnKey: "lastCard.cards.card2.btn",
  },
  {
    id: 3,
    titleKey: "lastCard.cards.card3.title",
    textKey: "lastCard.cards.card3.text",
    btnKey: "lastCard.cards.card3.btn",
  },
  {
    id: 4,
    titleKey: "lastCard.cards.card4.title",
    textKey: "lastCard.cards.card4.text",
    btnKey: "lastCard.cards.card4.btn",
  },
];