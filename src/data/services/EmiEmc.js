export const EmiEmcfaqData = [
  {
    id: 1,
    question: "What is the normal timeline for completing the EMC analysis ?",
    answers: [
      {
        content: 'Our typical lead time is 10 Working days, it depends on the complexity of the product and failure',
        image: false
      },
    ],
  },
  {
    id: 2,
    question: "How are you assuring the data protection?",
    answers: [
      {
        content: `All projects will initiated with Mutual NDAs and We adhere strictly to the Vougavent Data Protection 
        guidelines which ensures proper handling of customer data and disposal of the data after the completion of project. 
        For details refer Vougavent Data protection Policy Link: Vougavent Data protection policy`, image: false
      }
    ],
  },
  {
    id: 3,
    question: "What facility you have inhouse?",
    answers: [
      { content: "Spectrum analyser, Network Analyzer, High frequency Oscilloscope, Shielded Chamber.", image: false },
    ],
  },
  {
    id: 4,
    question: "What inputs are required for Emc simulation?",
    answers: [
      { content: " We required following information, Product overview, Schematics(searchable pdf file), BOM, PCB Layout(*.pcb or *.brd with odb++) and Mechanical design (*.stp).", image: false },
    ]
  }
];

export const EmiSpecData = [
  {
    domain: "Defense",
    specs: ["MIL-STD 461 E,F,G"]
  },
  {
    domain: "Aeronautical",
    specs: ["DO-160"],
  },
  {
    domain: "Automotive",
    specs: ["CISPR-25", "ECE-R10", "AIS-004"],
  },
  {
    domain: "Industrial, Scientific and Medical",
    specs: ["CISPR-22", "CISPR-11", "CISPR-32"],
  },
  {
    domain: "CE and FCC",
    specs: ["FCC 47 CFR Part 15"],
  },
  {
    domain: "IEC and EN Standards",
    specs: ["EN 55011","IEC 61000-6-4","IEC 61000-6-4"],
  },
];