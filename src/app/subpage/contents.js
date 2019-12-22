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
        new C("text", "<div class='text-type'> <span>Foodie</span> is an app that allows user to search for nearby restaurants (and other places). Created using google places API, Django Rest Framework and React. Check out <a href='https://github.com/Dolidodzik/foodie' target='_blank'> GitHub project. </a> </div>"),
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
        new C("header", "Typing Speed Test"),
        new C("text", "<div> Application that allows user to test his typing skills, user can change settings to suit his needs. After typing user can look at statistics of his typing. I created it mainly to get familiar with Vue. <a href='https://github.com/Dolidodzik/typingspeedtest' target='_blank'> GitHub project. </a>  </div>"),
      ]
    },
    "typing":{

    },
    "typingg":{

    },
  }
}

export default json
