import FaqImage from '../../../assets/products/IoTsolutions/iot-solution-table.webp'

export const IoTgatewayfaq = [
    {
        id: 1,
        question: "What is the Range you can provide for the IoT Nodes?",
        answers: [
            { content: FaqImage, image: true },
            { content: "Geographical location (Better when no obstacles like buildings, Hills etc).", image: false },
            { content: "Ambient disturbances in operating frequencies.", image: false },
            { content: "Surface which the tag is installed (performance degrades typically if device is installed inside metal).", image: false },
        ],
    },
    {
        id: 2,
        question: "How Vougavent can support for attain the best possible Range for the LoRa or Other IoT Nodes?",
        answers: [
            { content: "Vougavent assures the use possible measures to ensure a good RF Performance.", image: false },
            { content: "Good RF Design.", image: false },
            { content: "Good RF Design.", image: false },
            { content: "Validating the Antenna tuning.", image: false },
            { content: "Use of high performance chipset.", image: false },
        ],
    },
    {
        id: 3,
        question: "What is the typical battery life if we use a AA battery?",
        answers: [
            {
                content: `The typical life of a battery is 3 – 5 years, How ever the battery life is depending on data size and frequency of operation.
                We design the our LoRa nodes to consume power only while sensing and transmission after 
                transmitting the data the device will shift to the sleep mode.`, image: false
            },
        ],
    },
];

export const IoTSpecData = [
  {
    domain: "Cloud Interface",
    specs: ["Wi-Fi", "4G"],
  },
  {
    domain: "Sensor/Node Interface",
    specs: ["LoRa", "Zigbee", "Bluetooth Low Energy", "Sub 1 GHz"],
  },
  {
    domain: "Typical Operating Distance",
    specs: ["20 m to 1 km"],
  },
  {
    domain: "Power Supply",
    specs: ["90V to 270 VAC", "DC Powered (Customizable)"],
  },
  {
    domain: "Operating Frequency",
    specs: ["865–867 MHz (India)", "915 MHz"],
  },
];