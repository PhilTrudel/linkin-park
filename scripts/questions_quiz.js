
 var quiz = [
    {
        q: "Quel est le dernier album de Linkin Park?",
        o1: "Hybrid Theory",
        o2: "One More Light",
        o3: "Living Things",
        o4: "A Thousand Suns",
        r: 2
    },
    {
        q: "Quel était le nom du band qui deviendra ensuite Linkin Park ?",
        o1: "Xero",
        o2: "Skillet",
        o3: "Fort Minor",
        o4: "OutKast",
        r: 1
    },
    {
        q: "Quel était le premier chanteur principal du band?",
        o1: "Mike Shinoda",
        o2: "Chester Bennington",
        o3: "Mark Wakefield",
        o4: "Kurt Cobain",
        r: 3
    },
    {
        q: "Linkin Park a fait la musique de fond et la bande originale d'un film entier?",
        o1: "Vrai",
        o2: "faux",
        r: 1
    }
];

class Quiz {
    constructor() {
      this.createBlock();
    }
    
    createBlock() {
      this.el = document.createElement(quiz);
    }
}
