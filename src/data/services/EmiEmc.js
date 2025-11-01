import {
  Zap, Shield, Beaker, CheckCircle, Wrench, FileText,
} from 'lucide-react';

export const serviceItems = [
  {
    title: "EMI/EMC Precompliance",
    description:
      "We provide EMI and EMC testing services to ensure that electronic devices and systems meet compliance requirements.",
    icon: CheckCircle,
  },
  {
    title: "EMI/EMC Design Review",
    description:
      "We provide design review services to ensure that electronic devices and systems are designed for EMI and EMC compliance. Our team of experts can review your design and provide recommendations for improving EMI and EMC performance.",
    icon: Shield,
  },
  {
    title: "EMI/EMC Troubleshooting",
    description: `We provide troubleshooting services to identify and resolve EMI and EMC issues in electronic devices and systems.
      Our team of experts can perform a variety of tests and measurements to identify the source of the problem and provide solutions 
      to resolve the issue.`,
    icon: Wrench,
  },
  {
    title: "EMI/EMC Compliance Documentation",
    description: `We provide compliance documentation services to help you document your EMI and EMC compliance efforts. Our team of experts can assist in preparing compliance documentation,
      including test reports, design reviews, and other necessary documentation to demonstrate compliance with EMI and EMC regulations and standards.`,
    icon: FileText,
  },
];


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
    specs: ["EN 55011", "IEC 61000-6-4", "IEC 61000-6-4"],
  },
];

export const expertiseItems = [
  { title: 'In house lab for failure analysis', icon: Beaker },
  { title: 'Solved 100 + EMC failures', icon: Zap },
  { title: 'Multi domain expertise', icon: Shield },
];

export const sections = [
    {
      title: "Design",
      items: [
        "EMC Concept development",
        "Filter design",
        "Floor and Stack up planning",
        "EMC Design guidelines",
        "Design Review",
        "EMC Control Planning",
        "Risk assessment",
      ],
    },
    {
      title: "Pre compliance",
      items: [
        "Quick analysis",
        "Test plan preparation",
        "EMC Measurement",
        "Change management",
        "Test peripheral development",
      ],
    },
    {
      title: "EMI-EMC Failure Analysis",
      items: [
        "Root cause identification",
        "Near field scanning",
        "Counter measure development",
      ],
    },
    {
      title: "Simulation",
      items: [
        "Simulation based EMC performance prediction",
        "Failure analysis",
      ],
    },
  ];

  
