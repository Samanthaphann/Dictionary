const dictionary = {
      "yes": {
        name: "yes",
        partofspeech: "noun",
        definition1: "Used to give an affirmative response.",
        definition2: "Used as a response to someone addressing one or otherwise trying to attract one's attention"
      },
      "panacea": {
        name: "panacea",
        partofspeech: "noun",
        definition1: "An answer or solution for all problems or difficulties",
        definition2: ""
      },
      "concatenation": {
        name: "concatenation",
        partofspeech: "noun",
        definition1: "A series of interconnected or interdependent things or events.",
        definition2: ""
      },
      "saw": {
        name: "saw",
        partofspeech: "verb",
        definition1: "Cut (something) using a saw.",
        definition2: "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
      },
      "found": {
        name: "found",
        partofspeech: "adjective",
        definition1: "Having been discovered by chance or unexpectedly.",
        definition2: "(of a ship) Equipped; Supplied"
      },
      "crane": {
        name: "crane",
        partofspeech: "noun",
        definition1: "Stretch out one's body or neck in order to see something",
        definition2: "Move (a heavy object) with a crane."
      },
      "minute": {
        name: "minute:",
        partofspeech: "noun",
        definition1: "A period of time equal to sixty seconds or a sixtieth of an hour.",
        definition2: "A sixtieth of a degree of angular measurement (symbol: ʹ)"
      },
      "grotesque": {
        name: "grotesque:",
        partofspeech: "adjective",
        definition1: "Comically or repulsively ugly or distorted.",
        definition2: ""
      },
      "label": {
        name: "label",
        partofspeech: "noun",
        definition1: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.",
        definition2: ""
      },
      "debacle": {
        name: "debacle",
        partofspeech: "noun",
        definition1: "A sudden and ignominious failure; a fiasco.",
        definition2: ""
      }
}
    //makes array of words
    const obj_list = [
  dictionary["yes"],
  dictionary["panacea"],
  dictionary["concatenation"],
  dictionary["saw"],
  dictionary["found"],
  dictionary["crane"],
  dictionary["minute"],
  dictionary["grotesque"],
  dictionary["label"],
  dictionary["debacle"],
];
console.log(obj_list[0])
    //declare items 
    const input = document.getElementById("input");
    const searchButton = document.getElementById("search");
    const def1 = document.getElementById("def1");
    const def2 = document.getElementById("def2");
    const word = document.getElementById("name");
    const pos = document.getElementById("part");
    const fail = document.getElementById("fail");
    const container2 = document.querySelector(".container2");

    let display = false
    
    // Assume dictionary is defined elsewhere
    
    function search() {
      const searchTerm = input.value.toLowerCase();
      //checks if word is in object
      const wordInfo = dictionary.hasOwnProperty(searchTerm);

    console.log(wordInfo)
      if (!wordInfo) {
        word.innerText = "Word not found";
        pos.innerText = "";
        def1.innerText = "";
        def2.innerText = "";
        return;
      }

      //checks if the word is in the array
      for(var i = 0; i < obj_list.length; i++ ){
        //makes it so it's not case sensitive
        console.log(obj_list[i])
        if(obj_list[i].name === searchTerm.toLowerCase()){
            word.innerText = "Name: " + obj_list[i].name;
            part.innerText = "Part: " + obj_list[i].partofspeech
            def1.innerText = " " + obj_list[i].definition1;
            def2.innerText = " " + obj_list[i].definition2
            // makes it so you can see the result if the word is in the array
            display = true;
            //returns it to array
            return;
        }
      }
    // //tells user when the word isn't in the dictionary
    // word.innerText  +=  " Word is not in dictionary";
    // part.innerText  +=  " Word is not in dictionary";
    // def1.innerText  +=  " Word is not in dictionary";
    // def2.innerText  +=  " Word is not in dictionary";
    }
    searchButton.addEventListener("click", search);
    