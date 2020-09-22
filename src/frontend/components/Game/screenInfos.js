import keziahSystemIsOld from "@/assets/images/story/keziahSystemIsOld.png";
import keziahLetsDoThis from "@/assets/images/story/keziahLetsDoThis.png";
import keziahNeutral from "@/assets/images/story/keziahNeutral.png";
import statuses from "@/lib/gameEngine/statuses";

const screenInfos = {
  [statuses.idle]: {
    rightCharacter: keziahSystemIsOld,
    dialog: {
      name: "Keziah",
      text:
        "The system looks a bit old... hmm... Anyways we have to restore the pipe by connecting starting and ending valves using those pipe elements. I will help you, good team work right! Let's do this!\nAre you ready?",
      btn: "Let's do this! ->",
    },
    exit: statuses.building,
  },
  [statuses.won]: {
    rightCharacter: keziahLetsDoThis,
    dialog: {
      name: "Keziah",
      text:
        "SUBARASHI! Thank you so much for helping us! Let’s count this as your Indeed assignment, you did great Jakub!\n\nIvan what do you think?",
      btn: "Next ->",
    },
    next: "ivanHires",
  },
  ivanHires: {
    rightCharacter: keziahLetsDoThis,
    dialog: {
      name: "Ivan",
      text: "Great job Jakub! I'm impressed! Jakub, you are hired!",
      btn: "Next ->",
    },
    next: "thankyou",
  },

  thankyou: {
    rightCharacter: keziahLetsDoThis,
    dialog: {
      name: "Jakub",
      text: "Thank you so much Ivan! Thank you so much Keziah!",
      btn: "Was fun! Let's do this again! ->",
    },
    next: statuses.idle,
  },

  [statuses.failed]: {
    rightCharacter: keziahNeutral,
    dialog: {
      name: "Keziah",
      text: "Hmmm... let’s try again, this time we will succeed for sure! GANBARIMASHOU!",
      btn: "Let's try again! ->",
    },
    exit: statuses.building,
  },
};

export default screenInfos;
