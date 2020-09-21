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
        "Ok! here we are! Tokyo Indeed office! Skills, mentality, experience, personality, I’m just perfect, natural fit for this UX Frontend role! Let's do this!",
      btn: "Next ->",
    },
    next: 1,
  },
  1: {
    backgroundImage: bgEntrance,
    dialog: {
      name: "Jakub",
      text:
        "At Virtusize I deal with and handle nearly exactly same set of challenges they face, let's help them. Let's bring them value even before the interview starts!",
      btn: "Next ->",
    },
    next: 2,
  },
  2: {
    backgroundImage: bgLounge,
    dialog: {
      name: "Jakub",
      text: "Keziah and Ivan should be here in a moment...",
      btn: "Next ->",
    },
    next: 3,
  },
  3: {
    backgroundImage: bgLounge,
    leftCharacter: keziahNeutral,
    dialog: {
      name: "Keziah",
      text: "Oh Jakub! Hello! Happy to see you again! Thank you for coming to our office. ",
      btn: "Next ->",
    },
    next: 4,
  },
  4: {
    backgroundImage: bgLounge,
    leftCharacter: keziahPointing,
    dialog: {
      name: "Keziah",
      text:
        "We still have a few minutes till the meeting, how about showing you our office?\n\n(Ivan, I'm terribly sorry for limiting your presence it the story, I just couldn't find anime character sprites that look like you... More of you in the story after wining the game!)",
      btn: "Next ->",
    },
    next: 5,
  },
  5: {
    backgroundImage: bgMeetingRooms,
    rightCharacter: keziahNeutral,
    dialog: {
      name: "Jakub",
      text:
        "Sure! Would love to! I studied a bit Indeed and it is such a good place to work for. Talented people, challenging tasks, lots of good energy!",
      btn: "Next ->",
    },
    next: 6,
  },
  6: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahPointing,
    dialog: {
      name: "Keziah",
      text:
        "That is true, it's really good place to work. We always look for talented and skilled engineers to join our team, that's why I'm very excited for our today's meeting. Over there are lounge and meeting rooms, and here is our kitchen.",
      btn: "Next ->",
    },
    next: 7,
  },
  7: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahPanic,
    dialog: {
      name: "Keziah",
      text: "Would you like something to drin... OH NOOOOO!",
      btn: "Next ->",
    },
    next: 8,
  },
  8: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahPanic,
    dialog: {
      name: "Jakub",
      text: "Keziah what happened! DAIJOBUDESUKA?!!!",
      btn: "Next ->",
    },
    next: 9,
  },
  9: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahPanic,
    dialog: {
      name: "Keziah",
      text: "OH NOOO! Pipes are broken!",
      btn: "Next ->",
    },
    next: 10,
  },
  10: {
    backgroundImage: bgKitchen,
    rightCharacter: keziahLetsDoThis,
    dialog: {
      name: "Keziah",
      text: "We have to fix it! Maybe you can help us?",
      btn: "Next ->",
    },
    next: 11,
  },
  11: {
    backgroundImage: bgKitchen,
    leftCharacter: keziahLetsDoThis,
    dialog: {
      name: "Jakub",
      text: "I’m an engineer! *a tiny smirk appears on Jakub’s face*\n\n“I CAN HELP INDEED!”",
      btn: "Help Keziah and Ivan ->",
    },
    exit: "/game",
  },
};

export default screenInfos;
