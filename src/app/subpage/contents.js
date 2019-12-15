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
        new C("javascript", "let somevariable = 1;"),
      ]
    },
    "backend_overview":{
      contents: [
        new C("header", "backend_overview"),
        new C("text", "awgfagfw hehe"),
        new C("css", "body { background-color: red }"),
      ]
    },
    "home_component":{

    },
  },
  "typing_speed_test": {
    "overview":{
      contents: [
        new C("header", "typing speed test some header"),
        new C("text", "typing speed test some text"),
      ]
    },
    "typing":{

    },
    "typingg":{

    },
  }
}

export default json
