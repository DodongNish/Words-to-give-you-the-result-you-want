new Vue({
  el: "#app",
  data() {
    return {
      message: "",
      strArray: [],
      numbArray: [],
      alphabets: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      output: [],
      isDisabled: false,
      regEx: /^[a-zA-Z]*$/,
      dieAt: 0,
    };
  },
  watch: {
    message() {
      if (this.regEx.test(this.message)) {
        console.log("Valid Input");
        this.isDisabled = false;
      } else {
        console.log("Invalid");
        this.isDisabled = true;
      }
    },
  },
  methods: {
    toArray() {
      this.strArray = this.message.toLowerCase().split("");
    },
    checkNumb(char) {
      return this.alphabets.indexOf(char) + 1;
    },
    strArrayToNumbArray() {
      this.toArray();
      let numbSum = 0;
      let entry = {};
      let numbDisplay = "";
      let strDisplay = "";
      strDisplay = strDisplay.concat("", " = (");
      numbDisplay = numbDisplay.concat("", " = (");
      entry.word = this.message;
      for (let i = 0; i < this.strArray.length; i++) {
        let numb = this.checkNumb(this.strArray[i]);
        this.numbArray.push(numb);
        numbDisplay = numbDisplay.concat("", numb.toString());
        strDisplay = strDisplay.concat("", this.strArray[i].toString());
        numbSum += numb;
        if (i < this.strArray.length - 1) {
          numbDisplay = numbDisplay.concat("", "+");
          strDisplay = strDisplay.concat("", "+");
        } else {
          numbDisplay = numbDisplay.concat("", ") = ");
          strDisplay = strDisplay.concat("", ")");
        }
      }
      numbDisplay = numbDisplay.concat("", numbSum.toString());
      entry.numbs = numbDisplay;
      entry.strs = strDisplay;
      entry.percent = numbSum;
      // entry.message = `"${this.message}" will give you ${numbSum}% of the result you want.`;

      this.output.unshift(entry);
      this.message = "";
      this.strArray = [];
    },
  },
});
