/* C stands for Content */
class C{
  constructor(type, content){
    this.type = type;
    this.content = content;
  }
}

const json = {
  "foodie": {
    "overview":{
      contents: [
        new C("header", "Welcome to foodie overview"),
        new C("text", "Foddie is an app that allows you to search for nearby restaurants (and other places), using google places API, DRF and React"),
      ]
    },
    "backend_overview":{

    },
    "home_component":{

    },
  },
  "typing_speed_test": {
    "overview":{
      contents: [
        new C("header", "Welcome to foodie overview"),
        new C("text", "Foddie is an app that allows you to search for nearby restaurants (and other places), using google places API, DRF and React"),
      ]
    },
    "typing":{

    },
    "typingg":{

    },
  }
}

export default json
