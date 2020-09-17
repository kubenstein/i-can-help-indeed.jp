import bgOutside from "@/assets/images/story/bgOutside.jpg";
import bgEntrance from "@/assets/images/story/bgEntrance.jpg";
import bgLounge from "@/assets/images/story/bgLounge.jpg";
import bgMeetingRooms from "@/assets/images/story/bgMeetingRooms.jpg";
import bgKitchen from "@/assets/images/story/bgKitchen.jpg";
import keziahNeutral from "@/assets/images/story/keziahNeutral.png";
import keziahPointing from "@/assets/images/story/keziahPointing.png";
import keziahPanic from "@/assets/images/story/keziahPanic.png";
import keziahLetsDoThis from "@/assets/images/story/keziahLetsDoThis.png";

const screenInfos = {
  0: {
    backgroundImage: bgOutside,
    dialog: {
      name: "Jakub",
      text:
        "Ok! here we are! Tokyo Indeed office! I’m going to nail this interview! Skills, mentality, experience, personality, I’m just perfect fit for this UX Frontend role...",
    },
    next: 1,
  },
  1: {
    backgroundImage: bgEntrance,
    dialog: {
      name: "Jakub",
      text:
        "If you believe, no, if you are sure you can help them, it’s your mission to close that deal! Let’s do this!",
    },
    next: 2,
  },
  2: {
    backgroundImage: bgLounge,
    dialog: {
      name: "Jakub",
      text: "Keziah and Ivan should be here in a moment...",
    },
    next: 3,
  },
  3: {
    backgroundImage: bgLounge,
    leftCharacter: keziahNeutral,
    dialog: {
      name: "Keziah",
      text: "Oh Jakub! Hello! Happy to see you again! Thank you for coming to our office. ",
    },
    next: 4,
  },
  4: {
    backgroundImage: bgLounge,
    leftCharacter: keziahPointing,
    dialog: {
      name: "Keziah",
      text:
        "We still have a few minutes till the meeting, how about showing you our office?\n(I couldn't find anime character sprite set that looks like you Ivan, terribly sorry for limiting your presence it the story...)",
    },
    next: 5,
  },
  5: {
    backgroundImage: bgMeetingRooms,
    rightCharacter: keziahNeutral,
    dialog: {
      name: "Jakub",
      text:
        "Sure! I saw pictures on the Internet, I read alot about work culture in Indeed. It has to be really nice to work in such a company.",
    },
    next: 6,
  },
  6: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahPointing,
    dialog: {
      name: "Keziah",
      text: "Our lounge and meeting rooms are over there. And here is our kitchen.",
    },
    next: 7,
  },
  7: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahPanic,
    dialog: {
      name: "Keziah",
      text: "Would you like something for drin... OH NOOOOO!",
    },
    next: 8,
  },
  8: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahPanic,
    dialog: {
      name: "Jakub",
      text: "Keziah what happened! DAIJOBUDESUKA?!!!",
    },
    next: 9,
  },
  9: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahPanic,
    dialog: {
      name: "Keziah",
      text: "OH NOOO! Pipes are broken!",
    },
    next: 10,
  },
  10: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahLetsDoThis,
    dialog: {
      name: "Keziah",
      text: "Maybe you can help us?",
    },
    next: 11,
  },
  11: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahLetsDoThis,
    dialog: {
      name: "Jakub",
      text: "I’m an engineer! *a tiny smirk appears on Jakub’s face*\n\n“I CAN HELP INDEED!”",
    },
    endRoute: "/game",
  },
};

export const imageUrls = [
  ...new Set([
    ...Object.keys(screenInfos).map((key) => screenInfos[key].backgroundImage),
    ...Object.keys(screenInfos).map((key) => screenInfos[key].leftCharacter),
    ...Object.keys(screenInfos).map((key) => screenInfos[key].rightCharacter),
  ]),
].filter((v) => v);

export default screenInfos;
