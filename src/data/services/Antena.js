import custom_antena from '../../assets/services/antenaDesign/custom_antena.jpg'
import rf_test from '../../assets/services/antenaDesign/rf_test.png'
import wireless_range from '../../assets/services/antenaDesign/wireless_range.png'

import {
  Antenna,
  CircuitBoard,
  Waves,
  Filter,
  Microwave,
  Signal,
  LayoutGrid,
  Zap,
  Globe,
  Settings,
} from 'lucide-react';

export const AntenafaqData = [
  {
    id: 1,
    question: "What is the typical leadtime for a RF and antenna tuning?",
    answers: [
      { 
        content: ' Our typical lead time is 10 Working days, it depends on the complexity of the product and failure' ,
        image: false 
      },
    ],
  },
  {
    id: 2,
    question: "How are you assuring the data protection?",
    answers: [
      {
        content:`All projects will initiated with Mutual NDAs and We adhere strictly to the Vougavent Data Protection 
        guidelines which ensures proper handling of customer data and disposal of the data after the completion of project. 
        For details refer Vougavent Data protection Policy Link: Vougavent Data protection policy`,image:false
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
    question: "What inputs are required for RF Simulation?",
    answers: [
      { content: "We required following information, Product overview, Schematics(searchable pdf file), BOM, PCB Layout(*.pcb or *.brd with odb++) and Mechanical design (*.stp).", image: false },
     ]
  },
  {
    id: 5,
    question: "Can you provide consultancy for Radio type approval?",
    answers: [
      { content: "Yes, we offer consultancy service for the radio type approval.", image: false },
    ],
  },
];


export const AntenaServices=[
  {
    title:'Improvement of Wireless range',
    image:wireless_range,
    content:`Antenna Tuning is essential for achieving maximum performance, circuits integration 
    with other electronics can lead to the detuning of the Antenna. It leads to a higher return loss. 
    The RF Circuit needs to get tuned in such a way as to avoid the integration effects. 
    Vougavent has an in-house facility for Tuning and optimizing the RF Matching Circuits.`
  },
  {
    title:'Custom Antenna Design',
    image:custom_antena,
    content:`We can extend our support for developing customized antennas for peak performance using the latest commercial design tools and
    cutting-edge manufacturing techniques to match your product design and form factor. Our Team is well-versed in designing PCB antennas 
    like PIFA, Meander, MIMO, etc.`
  },
  {
    title:'RF Test System (ATEs)',
    image:rf_test,
    content:`The Radio Frequency test system designed and developed by Vougavent helps in the mass production of RF Devices. 
    The specially designed test systems can capture the RF Parameters in the production environment.`
  },
]

export const MainExpertise = [
  { icon: CircuitBoard, title: 'RF Circuit design' },
  { icon: Antenna, title: 'Custom Antenna Design' },
  { icon: Waves, title: 'Impedance Matching Circuits' },
  { icon: Filter, title: 'RF Filters and Attenuators' },
  { icon: LayoutGrid, title: 'RF System Design' }, 
];

export const MeasurementFacilities = [
  { icon: Signal, title: 'Return Loss' },
  { icon: Settings, title: 'Matching circuit tuning' },
  { icon: Zap, title: 'Spurious Emission' },
  { icon: Filter, title: 'Filter performance' },
  { icon: Globe, title: 'Open air Radiation Pattern' },
  { icon: Microwave, title: 'Wireless range testing' },
];

export const CoreServices = [
  {
    icon: Antenna,
    title: 'Antenna Design & Optimization',
    description:
      'We design and optimize antennas for a wide range of wireless communication systems, IoT, Radars, GPS etc. Our team of engineers can design antennas that meet specific performance and size requirements.',
  },
  {
    icon: CircuitBoard,
    title: 'RF Circuit Design',
    description:
      'We design and optimize RF circuits for wireless communication systems, including low noise amplifiers, power amplifiers, and frequency converters. We use advanced simulation tools to optimize the performance of our RF circuit designs.',
  },
  {
    icon: Microwave,
    title: 'Wireless System Design',
    description:
      'We provide full wireless system design services, including the design of RF and antenna systems, as well as other wireless components such as modems and transceivers. We can also provide support for the integration of wireless systems.',
  },
];