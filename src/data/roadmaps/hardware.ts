import { Domain } from "../types";

export const hardwareDomain: Domain = {
  id: "hardware", slug: "hardware-embedded", name: "Hardware & Embedded Systems",
  description: "Design electronics, program microcontrollers, and build low-level systems.",
  icon: "Cpu", color: "#eab308",
  subPaths: [
    {
      id: "embedded-systems", slug: "embedded-systems", name: "Embedded Systems",
      description: "Write firmware that talks directly to hardware.",
      difficulty: "Advanced", estimatedTime: "6-10 months", icon: "Cpu",
      tags: ["C Programming", "Microcontrollers", "RTOS"],
      resources: [
        { title: "Embedded Systems Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=mSVeY6oRn8k", type: "video" },
        { title: "FreeRTOS Official Documentation", url: "https://www.freertos.org/Documentation/RTOS_book.html", type: "docs" },
        { title: "Controllers Tech – STM32 Channel", url: "https://www.youtube.com/@controllerstech", type: "course" },
        { title: "Arduino Official Documentation", url: "https://docs.arduino.cc/learn/", type: "docs" },
        { title: "Embedded Systems Tamil Tutorial", url: "https://www.youtube.com/results?search_query=embedded+systems+tamil+tutorial+arduino+STM32", type: "video" },
      ],
      phases: [
        {
          id: "emb-p1", title: "Foundations", description: "C programming and basic microcontrollers",
          topics: [
            {
              id: "emb-p1-t1", name: "What is an Embedded System", description: "Microcontroller vs microprocessor", timeEstimate: "1 week", difficulty: "Beginner", details: "What is an embedded system – microcontroller vs microprocessor",
              resources: [
                { title: "Embedded Systems Full Course", url: "https://www.youtube.com/watch?v=mSVeY6oRn8k", type: "video" }
              ]
            },
            {
              id: "emb-p1-t2", name: "Binary & Bitwise Operations", description: "Hex, bit manipulation", timeEstimate: "1 week", difficulty: "Beginner", details: "Binary, Hex, and Bitwise operations",
              resources: [
                { title: "Embedded Systems Tamil", url: "https://www.youtube.com/results?search_query=embedded+systems+tamil+tutorial+beginners", type: "video" }
              ]
            },
            {
              id: "emb-p1-t3", name: "C for Embedded", description: "Pointers, volatile keyword", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "C for embedded – pointers, structs, bit manipulation, volatile keyword",
              resources: [
                { title: "Arduino Official Tutorials", url: "https://docs.arduino.cc/learn/", type: "docs" }
              ]
            },
            {
              id: "emb-p1-t4", name: "Memory Types", description: "Flash, SRAM, EEPROM", timeEstimate: "1 week", difficulty: "Intermediate", details: "Memory types – Flash, SRAM, EEPROM",
              resources: [
                { title: "Neso Academy – Digital Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm", type: "course" }
              ]
            },
            {
              id: "emb-p1-t5", name: "GPIO", description: "Reading inputs, driving outputs", timeEstimate: "1 week", difficulty: "Beginner", details: "GPIO – reading inputs, driving outputs",
              resources: [
                { title: "GPIO Basics Search", url: "https://www.youtube.com/results?search_query=GPIO+reading+inputs+driving+outputs", type: "video" }
              ]
            },
            {
              id: "emb-p1-t6", name: "Arduino Basics", description: "Setup, loop, I/O", timeEstimate: "1 week", difficulty: "Beginner", details: "Arduino basics – setup, loop, digital/analog I/O",
              resources: [
                { title: "Arduino Basics Search", url: "https://www.youtube.com/results?search_query=Arduino+basics+setup+loop", type: "video" }
              ]
            },
            {
              id: "emb-p1-t7", name: "Timers & Interrupts", description: "External and timer interrupts", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Timers and delays. Interrupts – external and timer interrupts",
              resources: [
                { title: "Timers and Interrupts Search", url: "https://www.youtube.com/results?search_query=Timers+and+interrupts+embedded+systems", type: "video" }
              ]
            },
            {
              id: "emb-p1-t8", name: "UART Communication", description: "Serial communication basics", timeEstimate: "1 week", difficulty: "Intermediate", details: "UART – serial communication basics",
              resources: [
                { title: "UART Communication Search", url: "https://www.youtube.com/results?search_query=UART+serial+communication+basics", type: "video" }
              ]
            }
          ]
        },
        {
          id: "emb-p2", title: "Microcontrollers & Peripherals", description: "STM32, ESP32, and bare-metal programming",
          topics: [
            {
              id: "emb-p2-t1", name: "STM32 / ESP32 Intro", description: "Moving beyond Arduino", timeEstimate: "1 week", difficulty: "Intermediate", details: "STM32 / ESP32 – moving beyond Arduino",
              resources: [
                { title: "STM32 Full Course", url: "https://www.youtube.com/@controllerstech", type: "video" }
              ]
            },
            {
              id: "emb-p2-t2", name: "Bare-Metal Registers", description: "HAL and registers", timeEstimate: "2 weeks", difficulty: "Advanced", details: "HAL and bare-metal register programming",
              resources: [
                { title: "ESP32 Tamil Tutorial", url: "https://www.youtube.com/results?search_query=ESP32+tutorial+tamil+embedded", type: "video" }
              ]
            },
            {
              id: "emb-p2-t3", name: "I2C Protocol", description: "Addressing, transactions", timeEstimate: "1 week", difficulty: "Intermediate", details: "I2C protocol – addressing, read/write transactions",
              resources: [
                { title: "STM32 Bare Metal", url: "https://www.youtube.com/@LowLevelLearning", type: "video" }
              ]
            },
            {
              id: "emb-p2-t4", name: "SPI Protocol", description: "Master/slave, clock polarity", timeEstimate: "1 week", difficulty: "Intermediate", details: "SPI protocol – master/slave, clock polarity",
              resources: [
                { title: "Embedded.fm", url: "https://embedded.fm/", type: "docs" }
              ]
            },
            {
              id: "emb-p2-t5", name: "ADC and DAC", description: "Sensors and signals", timeEstimate: "1 week", difficulty: "Intermediate", details: "ADC and DAC – reading sensors, generating signals",
              resources: [
                { title: "ADC and DAC Search", url: "https://www.youtube.com/results?search_query=ADC+DAC+embedded+systems", type: "video" }
              ]
            },
            {
              id: "emb-p2-t6", name: "PWM", description: "Motor control, LED dimming", timeEstimate: "1 week", difficulty: "Intermediate", details: "PWM – motor control, LED dimming",
              resources: [
                { title: "PWM Basics Search", url: "https://www.youtube.com/results?search_query=PWM+motor+control+LED", type: "video" }
              ]
            },
            {
              id: "emb-p2-t7", name: "Timers & Low Power", description: "Watchdog, sleep states", timeEstimate: "1 week", difficulty: "Advanced", details: "Watchdog timers. Low power modes and sleep states",
              resources: [
                { title: "Watchdog Timers Search", url: "https://www.youtube.com/results?search_query=Watchdog+timers+low+power+embedded", type: "video" }
              ]
            },
            {
              id: "emb-p2-t8", name: "Bootloaders & Debugging", description: "JTAG and SWD", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Bootloader concepts. Debugging with JTAG and SWD",
              resources: [
                { title: "JTAG Debugging Search", url: "https://www.youtube.com/results?search_query=Debugging+JTAG+SWD+embedded", type: "video" }
              ]
            }
          ]
        },
        {
          id: "emb-p3", title: "RTOS & Advanced", description: "Real-time systems, Embedded Linux, and DMA",
          topics: [
            {
              id: "emb-p3-t1", name: "RTOS Concepts", description: "Tasks, scheduler", timeEstimate: "1 week", difficulty: "Advanced", details: "RTOS concepts – tasks, scheduler, preemption",
              resources: [
                { title: "FreeRTOS Full Tutorial", url: "https://www.youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz", type: "video" }
              ]
            },
            {
              id: "emb-p3-t2", name: "FreeRTOS Integration", description: "Queues, semaphores", timeEstimate: "2 weeks", difficulty: "Advanced", details: "FreeRTOS – task creation, queues, semaphores, mutexes",
              resources: [
                { title: "RTOS Tamil", url: "https://www.youtube.com/results?search_query=FreeRTOS+RTOS+tutorial+tamil", type: "video" }
              ]
            },
            {
              id: "emb-p3-t3", name: "Embedded Memory", description: "Heap vs stack", timeEstimate: "1 week", difficulty: "Advanced", details: "Memory management in embedded – heap vs stack",
              resources: [
                { title: "FreeRTOS Official Docs", url: "https://www.freertos.org/Documentation/RTOS_book.html", type: "docs" }
              ]
            },
            {
              id: "emb-p3-t4", name: "DMA", description: "Direct Memory Access", timeEstimate: "1 week", difficulty: "Advanced", details: "DMA – Direct Memory Access",
              resources: [
                { title: "Embedded Linux – bootlin", url: "https://bootlin.com/docs/", type: "docs" }
              ]
            },
            {
              id: "emb-p3-t5", name: "Embedded Linux Basics", description: "Raspberry Pi, Yocto", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Embedded Linux basics – Raspberry Pi, Yocto intro",
              resources: [
                { title: "Embedded Linux Tutorials", url: "https://www.youtube.com/results?search_query=Embedded+Linux+Raspberry+Pi+Yocto", type: "video" }
              ]
            },
            {
              id: "emb-p3-t6", name: "Device Drivers", description: "Concepts & creation", timeEstimate: "1 week", difficulty: "Advanced", details: "Device drivers concept",
              resources: [
                { title: "Device Drivers Intro", url: "https://www.youtube.com/results?search_query=Device+drivers+embedded+linux", type: "video" }
              ]
            },
            {
              id: "emb-p3-t7", name: "CAN Bus & OTA", description: "Automotive & updates", timeEstimate: "1 week", difficulty: "Advanced", details: "CAN bus – automotive communication protocol. OTA firmware updates",
              resources: [
                { title: "CAN Bus Tutorial", url: "https://www.youtube.com/results?search_query=CAN+bus+automotive+communication", type: "video" }
              ]
            },
            {
              id: "emb-p3-t8", name: "Unit Testing", description: "Unity framework", timeEstimate: "1 week", difficulty: "Advanced", details: "Unit testing embedded C – Unity framework",
              resources: [
                { title: "Unit Testing Embedded C", url: "https://www.youtube.com/results?search_query=Unit+testing+embedded+C+Unity+framework", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "pcb-circuit-design", slug: "pcb-circuit-design", name: "PCB & Circuit Design",
      description: "Design the hardware that embedded software runs on.",
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Zap",
      tags: ["PCB Design", "KiCad", "Electronics"],
      resources: [
        { title: "Phil's Lab – PCB Design & Electronics", url: "https://www.youtube.com/@PhilsLab", type: "course" },
        { title: "KiCad Official Documentation", url: "https://docs.kicad.org/", type: "docs" },
        { title: "All About Electronics – Circuit Theory", url: "https://www.youtube.com/@AllAboutElectronics", type: "video" },
        { title: "Khan Academy – Electrical Engineering", url: "https://www.khanacademy.org/science/electrical-engineering", type: "course" },
        { title: "PCB Design & Electronics Tamil Tutorial", url: "https://www.youtube.com/results?search_query=PCB+design+electronics+tamil+tutorial+kicad", type: "video" },
      ],
      phases: [
        {
          id: "pcb-p1", title: "Electronics Fundamentals", description: "Circuit theory and components",
          topics: [
            {
              id: "pcb-p1-t1", name: "Ohm's & Kirchhoff's Laws", description: "Voltage and current", timeEstimate: "1 week", difficulty: "Beginner", details: "Ohm's Law, Kirchhoff's Voltage and Current Laws",
              resources: [
                { title: "Electronics Basics", url: "https://www.youtube.com/@AllAboutElectronics", type: "video" }
              ]
            },
            {
              id: "pcb-p1-t2", name: "Basic Components", description: "Resistors, Capacitors", timeEstimate: "1 week", difficulty: "Beginner", details: "Resistors, Capacitors, Inductors – behavior in circuits",
              resources: [
                { title: "Electronics Tamil Tutorial", url: "https://www.youtube.com/results?search_query=basic+electronics+tamil+tutorial+engineering", type: "video" }
              ]
            },
            {
              id: "pcb-p1-t3", name: "Diodes & Transistors", description: "BJT and MOSFET basics", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Diodes and transistors – BJT and MOSFET basics",
              resources: [
                { title: "Khan Academy EE", url: "https://www.khanacademy.org/science/electrical-engineering", type: "course" }
              ]
            },
            {
              id: "pcb-p1-t4", name: "Op-Amp Fundamentals", description: "Comparators, inverting", timeEstimate: "1 week", difficulty: "Intermediate", details: "Op-Amp fundamentals – inverting, non-inverting, comparator",
              resources: [
                { title: "EveryCircuit Simulator", url: "https://everycircuit.com/", type: "tool" }
              ]
            },
            {
              id: "pcb-p1-t5", name: "Voltage Dividers", description: "Current mirrors", timeEstimate: "1 week", difficulty: "Intermediate", details: "Voltage dividers and current mirrors",
              resources: [
                { title: "Voltage Dividers Search", url: "https://www.youtube.com/results?search_query=Voltage+dividers+current+mirrors", type: "video" }
              ]
            },
            {
              id: "pcb-p1-t6", name: "AC vs DC Circuits", description: "Frequency, impedance", timeEstimate: "1 week", difficulty: "Intermediate", details: "AC vs DC circuits – frequency, impedance",
              resources: [
                { title: "AC vs DC Circuits Search", url: "https://www.youtube.com/results?search_query=AC+vs+DC+circuits+impedance", type: "video" }
              ]
            },
            {
              id: "pcb-p1-t7", name: "Reading Datasheets", description: "Component specs", timeEstimate: "1 week", difficulty: "Beginner", details: "Reading datasheets",
              resources: [
                { title: "Reading Datasheets Search", url: "https://www.youtube.com/results?search_query=How+to+read+datasheets+electronics", type: "video" }
              ]
            },
            {
              id: "pcb-p1-t8", name: "Lab Equipment", description: "Multimeter and oscilloscope", timeEstimate: "1 week", difficulty: "Beginner", details: "Using a multimeter and oscilloscope",
              resources: [
                { title: "Oscilloscope Tutorial", url: "https://www.youtube.com/results?search_query=How+to+use+oscilloscope+multimeter", type: "video" }
              ]
            }
          ]
        },
        {
          id: "pcb-p2", title: "Schematic & PCB Layout", description: "KiCad, layout rules, and SPICE",
          topics: [
            {
              id: "pcb-p2-t1", name: "KiCad Intro", description: "Schematic capture", timeEstimate: "1 week", difficulty: "Intermediate", details: "KiCad – schematic capture and PCB layout tool",
              resources: [
                { title: "KiCad Full Course", url: "https://www.youtube.com/@PhilsLab", type: "video" }
              ]
            },
            {
              id: "pcb-p2-t2", name: "Reading Schematics", description: "Creating and reading", timeEstimate: "1 week", difficulty: "Beginner", details: "Creating and reading schematics",
              resources: [
                { title: "PCB Design Tamil", url: "https://www.youtube.com/results?search_query=PCB+design+kicad+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "pcb-p2-t3", name: "Footprints & Libraries", description: "Component models", timeEstimate: "1 week", difficulty: "Intermediate", details: "Footprints and component libraries",
              resources: [
                { title: "KiCad Official Docs", url: "https://docs.kicad.org/", type: "docs" }
              ]
            },
            {
              id: "pcb-p2-t4", name: "PCB Layout Rules", description: "Traces, clearance, vias", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "PCB layout rules – trace width, clearance, vias",
              resources: [
                { title: "LTSpice Tutorial", url: "https://www.analog.com/en/resources/media-center/videos/tech-talks/ltspice.html", type: "tool" }
              ]
            },
            {
              id: "pcb-p2-t5", name: "Signal Integrity", description: "Return paths, crosstalk", timeEstimate: "1 week", difficulty: "Advanced", details: "Signal integrity – return paths, crosstalk",
              resources: [
                { title: "Signal Integrity Basics", url: "https://www.youtube.com/results?search_query=Signal+integrity+PCB+design+crosstalk", type: "video" }
              ]
            },
            {
              id: "pcb-p2-t6", name: "Power Delivery Network", description: "PDN design", timeEstimate: "1 week", difficulty: "Advanced", details: "Power delivery network design",
              resources: [
                { title: "PDN Design Search", url: "https://www.youtube.com/results?search_query=Power+delivery+network+design+PCB", type: "video" }
              ]
            },
            {
              id: "pcb-p2-t7", name: "Gerber Files & DFM", description: "Manufacturing docs", timeEstimate: "1 week", difficulty: "Intermediate", details: "Gerber files and design for manufacturing (DFM)",
              resources: [
                { title: "Gerber Files DFM", url: "https://www.youtube.com/results?search_query=Gerber+files+design+for+manufacturing", type: "video" }
              ]
            },
            {
              id: "pcb-p2-t8", name: "SPICE Simulation", description: "LTSpice basics", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "SPICE simulation – LTSpice basics",
              resources: [
                { title: "LTSpice Basics Search", url: "https://www.youtube.com/results?search_query=LTSpice+simulation+tutorial", type: "video" }
              ]
            }
          ]
        },
        {
          id: "pcb-p3", title: "Advanced Design & Prototyping", description: "High-speed design, fabrication, and bring-up",
          topics: [
            {
              id: "pcb-p3-t1", name: "High-Speed PCB Design", description: "Differential pairs", timeEstimate: "2 weeks", difficulty: "Advanced", details: "High speed PCB design – differential pairs, impedance control",
              resources: [
                { title: "High Speed PCB Design", url: "https://www.youtube.com/@RobertFeranec", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t2", name: "RF & Antenna Basics", description: "Radio frequency basics", timeEstimate: "1 week", difficulty: "Advanced", details: "RF and antenna design basics",
              resources: [
                { title: "Power Electronics Tamil", url: "https://www.youtube.com/results?search_query=power+electronics+tamil+tutorial+engineering", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t3", name: "Power Electronics", description: "Buck/boost, MOSFETs", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Power electronics – buck/boost converters, MOSFETs",
              resources: [
                { title: "Phil's Lab – Advanced PCB", url: "https://www.youtube.com/@PhilsLab", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t4", name: "PCB Stackup", description: "Layer planning", timeEstimate: "1 week", difficulty: "Advanced", details: "PCB stackup and layer planning",
              resources: [
                { title: "JLCPCB", url: "https://jlcpcb.com/", type: "tool" }
              ]
            },
            {
              id: "pcb-p3-t5", name: "EMC/EMI", description: "Considerations and filtering", timeEstimate: "1 week", difficulty: "Advanced", details: "EMC/EMI considerations and filtering",
              resources: [
                { title: "EMC/EMI Basics", url: "https://www.youtube.com/results?search_query=EMC+EMI+considerations+PCB", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t6", name: "Ordering PCBs", description: "JLCPCB, PCBWay", timeEstimate: "1 week", difficulty: "Beginner", details: "Ordering PCBs – JLCPCB, PCBWay workflow",
              resources: [
                { title: "Ordering PCBs Search", url: "https://www.youtube.com/results?search_query=Ordering+PCBs+JLCPCB+PCBWay", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t7", name: "SMD Soldering", description: "Rework techniques", timeEstimate: "1 week", difficulty: "Intermediate", details: "SMD soldering and rework techniques",
              resources: [
                { title: "SMD Soldering Tutorial", url: "https://www.youtube.com/results?search_query=SMD+soldering+rework+techniques", type: "video" }
              ]
            },
            {
              id: "pcb-p3-t8", name: "Board Bring-Up", description: "Power sequencing", timeEstimate: "1 week", difficulty: "Advanced", details: "Bringing up a new board – power sequencing, bring-up checklist",
              resources: [
                { title: "Board Bring-Up Guide", url: "https://www.youtube.com/results?search_query=Bringing+up+a+new+PCB+board", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "fpga-digital-logic", slug: "fpga-digital-logic", name: "FPGA & Digital Logic",
      description: "Design hardware circuits with code. The bridge between software and silicon.",
      difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Layers",
      tags: ["FPGA", "Verilog", "Digital Logic"],
      resources: [
        { title: "Nandland – FPGA & Verilog Courses", url: "https://www.nandland.com/", type: "course" },
        { title: "HDLBits – Verilog Practice Problems", url: "https://hdlbits.01xz.net/wiki/Main_Page", type: "tool" },
        { title: "Neso Academy – Digital Electronics Playlist", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm", type: "course" },
        { title: "MIT OCW – Computation Structures", url: "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/", type: "course" },
        { title: "FPGA & Digital Logic Tamil Tutorial", url: "https://www.youtube.com/results?search_query=FPGA+verilog+digital+logic+tamil+tutorial", type: "video" },
      ],
      phases: [
        {
          id: "fpga-p1", title: "Digital Logic Foundations", description: "Gates, algebra, and sequential circuits",
          topics: [
            {
              id: "fpga-p1-t1", name: "Number Systems", description: "Binary, hex, two's comp", timeEstimate: "1 week", difficulty: "Beginner", details: "Number systems – binary, hex, two's complement",
              resources: [
                { title: "Digital Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm", type: "course" }
              ]
            },
            {
              id: "fpga-p1-t2", name: "Logic Gates", description: "AND, OR, NAND", timeEstimate: "1 week", difficulty: "Beginner", details: "Logic gates – AND, OR, NOT, NAND, NOR, XOR",
              resources: [
                { title: "Digital Logic Tamil", url: "https://www.youtube.com/results?search_query=digital+electronics+logic+gates+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "fpga-p1-t3", name: "Boolean Algebra", description: "De Morgan's theorem", timeEstimate: "1 week", difficulty: "Intermediate", details: "Boolean algebra and De Morgan's theorem",
              resources: [
                { title: "Logic.ly Simulator", url: "https://logic.ly/", type: "tool" }
              ]
            },
            {
              id: "fpga-p1-t4", name: "Combinational Circuits", description: "Mux, demux", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Combinational circuits – mux, demux, encoder, decoder",
              resources: [
                { title: "Nandgame", url: "https://nandgame.com/", type: "tool" }
              ]
            },
            {
              id: "fpga-p1-t5", name: "Adders", description: "Half adder, full adder", timeEstimate: "1 week", difficulty: "Intermediate", details: "Adders – half adder, full adder, ripple carry",
              resources: [
                { title: "Adders Tutorial", url: "https://www.youtube.com/results?search_query=Half+adder+full+adder+digital+logic", type: "video" }
              ]
            },
            {
              id: "fpga-p1-t6", name: "Flip-Flops", description: "SR, D, JK, T", timeEstimate: "1 week", difficulty: "Intermediate", details: "Flip-flops – SR, D, JK, T",
              resources: [
                { title: "Flip-Flops Tutorial", url: "https://www.youtube.com/results?search_query=Flip-flops+SR+D+JK+T", type: "video" }
              ]
            },
            {
              id: "fpga-p1-t7", name: "Sequential Circuits", description: "Counters, registers", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Sequential circuits – counters, registers, shift registers",
              resources: [
                { title: "Sequential Circuits Search", url: "https://www.youtube.com/results?search_query=Sequential+circuits+counters+registers", type: "video" }
              ]
            },
            {
              id: "fpga-p1-t8", name: "Finite State Machines", description: "Moore and Mealy", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Finite State Machines (FSM) – Moore and Mealy",
              resources: [
                { title: "FSM Moore Mealy", url: "https://www.youtube.com/results?search_query=Finite+State+Machines+FSM+Moore+and+Mealy", type: "video" }
              ]
            }
          ]
        },
        {
          id: "fpga-p2", title: "HDL & FPGA Programming", description: "Verilog, VHDL, and FPGA workflow",
          topics: [
            {
              id: "fpga-p2-t1", name: "What is an FPGA", description: "LUTs, CLBs", timeEstimate: "1 week", difficulty: "Intermediate", details: "What is an FPGA – LUTs, CLBs, DSPs, I/O blocks",
              resources: [
                { title: "FPGA Full Course", url: "https://www.nandland.com/", type: "course" }
              ]
            },
            {
              id: "fpga-p2-t2", name: "Verilog Basics", description: "Modules, ports", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Verilog basics – modules, ports, always blocks",
              resources: [
                { title: "Verilog HDL Tamil", url: "https://www.youtube.com/results?search_query=verilog+HDL+FPGA+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "fpga-p2-t3", name: "VHDL Basics", description: "Entity, architecture", timeEstimate: "1 week", difficulty: "Intermediate", details: "VHDL basics – entity, architecture, signal vs variable",
              resources: [
                { title: "HDLBits Practice", url: "https://hdlbits.01xz.net/wiki/Main_Page", type: "tool" }
              ]
            },
            {
              id: "fpga-p2-t4", name: "Combinational Logic", description: "Verilog/VHDL", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Combinational logic in Verilog/VHDL",
              resources: [
                { title: "Nandland YouTube", url: "https://www.youtube.com/@nandland", type: "video" }
              ]
            },
            {
              id: "fpga-p2-t5", name: "Sequential Logic", description: "Clocked blocks", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Sequential logic – clocked always blocks",
              resources: [
                { title: "Sequential Logic Verilog", url: "https://www.youtube.com/results?search_query=Sequential+logic+clocked+always+blocks", type: "video" }
              ]
            },
            {
              id: "fpga-p2-t6", name: "Testbenches", description: "ModelSim / GTKWave", timeEstimate: "1 week", difficulty: "Intermediate", details: "Testbenches and simulation with ModelSim / GTKWave",
              resources: [
                { title: "Testbenches Simulation", url: "https://www.youtube.com/results?search_query=Testbenches+simulation+ModelSim", type: "video" }
              ]
            },
            {
              id: "fpga-p2-t7", name: "Vivado / Quartus", description: "Synthesis", timeEstimate: "1 week", difficulty: "Advanced", details: "Xilinx Vivado or Intel Quartus – synthesis and implementation",
              resources: [
                { title: "Vivado Quartus Tutorial", url: "https://www.youtube.com/results?search_query=Xilinx+Vivado+Intel+Quartus+tutorial", type: "video" }
              ]
            },
            {
              id: "fpga-p2-t8", name: "Implementing FSMs", description: "FSMs on FPGA", timeEstimate: "1 week", difficulty: "Advanced", details: "Implementing FSMs on FPGA. FPGA constraints – timing, pin assignment",
              resources: [
                { title: "Implementing FSMs FPGA", url: "https://www.youtube.com/results?search_query=Implementing+FSMs+on+FPGA", type: "video" }
              ]
            }
          ]
        },
        {
          id: "fpga-p3", title: "Advanced FPGA & VLSI Intro", description: "IP cores, advanced concepts, and VLSI",
          topics: [
            {
              id: "fpga-p3-t1", name: "AXI Bus Protocol", description: "Master/slave", timeEstimate: "1 week", difficulty: "Advanced", details: "AXI bus protocol – master/slave communication",
              resources: [
                { title: "FPGA Advanced", url: "https://www.fpga4fun.com/", type: "docs" }
              ]
            },
            {
              id: "fpga-p3-t2", name: "IP Cores", description: "Pre-built blocks", timeEstimate: "1 week", difficulty: "Advanced", details: "IP cores – integrating pre-built hardware blocks",
              resources: [
                { title: "VLSI Tamil", url: "https://www.youtube.com/results?search_query=VLSI+design+tamil+tutorial+engineering", type: "video" }
              ]
            },
            {
              id: "fpga-p3-t3", name: "Protocols in Verilog", description: "UART, SPI, I2C", timeEstimate: "2 weeks", difficulty: "Advanced", details: "UART, SPI, I2C implementation in Verilog",
              resources: [
                { title: "MIT OCW – Digital Systems", url: "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/", type: "course" }
              ]
            },
            {
              id: "fpga-p3-t4", name: "Pipelining", description: "Throughput optimization", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Pipelining and throughput optimization",
              resources: [
                { title: "Onlineedx VLSI", url: "https://www.edx.org/learn/vlsi", type: "course" }
              ]
            },
            {
              id: "fpga-p3-t5", name: "Clock Domain Crossing", description: "Synchronization", timeEstimate: "1 week", difficulty: "Advanced", details: "Clock domain crossing – synchronization techniques",
              resources: [
                { title: "Clock Domain Crossing", url: "https://www.youtube.com/results?search_query=Clock+domain+crossing+synchronization", type: "video" }
              ]
            },
            {
              id: "fpga-p3-t6", name: "Static Timing Analysis", description: "STA", timeEstimate: "1 week", difficulty: "Advanced", details: "Static Timing Analysis (STA)",
              resources: [
                { title: "Static Timing Analysis", url: "https://www.youtube.com/results?search_query=Static+Timing+Analysis+STA", type: "video" }
              ]
            },
            {
              id: "fpga-p3-t7", name: "High Level Synthesis", description: "HLS with Xilinx", timeEstimate: "1 week", difficulty: "Advanced", details: "HLS – High Level Synthesis with Xilinx HLS",
              resources: [
                { title: "High Level Synthesis Search", url: "https://www.youtube.com/results?search_query=High+Level+Synthesis+HLS", type: "video" }
              ]
            },
            {
              id: "fpga-p3-t8", name: "Intro to VLSI", description: "ASIC vs FPGA tradeoff", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Intro to VLSI – CMOS logic, standard cells. ASIC vs FPGA tradeoffs",
              resources: [
                { title: "VLSI Basics Search", url: "https://www.youtube.com/results?search_query=Intro+to+VLSI+CMOS+logic+ASIC+FPGA", type: "video" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
