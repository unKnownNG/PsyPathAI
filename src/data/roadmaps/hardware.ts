import { Domain } from "../types";

export const hardwareDomain: Domain = {
  id: "hardware", slug: "hardware-embedded", name: "Hardware & Embedded",
  description: "Design electronics, program microcontrollers, and build low-level systems.",
  icon: "Cpu", color: "#eab308",
  subPaths: [
    { 
      id: "embedded", slug: "embedded-systems", name: "Embedded Systems", 
      description: "Program microcontrollers and build real-time operating systems.", 
      difficulty: "Advanced", estimatedTime: "6-10 months", icon: "Cpu", 
      tags: ["C/C++", "Microcontrollers", "RTOS"],
      phases: [
        { 
          id: "emb-p1", title: "Bare Metal Basics", description: "Writing close to the metal", 
          topics: [
            { 
              id: "emb-t1", name: "C Programming & Pointers", description: "Memory manipulation", timeEstimate: "3 weeks", difficulty: "Beginner", 
              details: "Structs, bitwise operations, volatile keyword, pointer arithmetic, and memory allocation in C.", 
              resources: [
                { title: "Learn C Programming", url: "https://www.programiz.com/c-programming", type: "docs" },
                { title: "Pointers in C", url: "https://www.youtube.com/watch?v=zuegQmMdy8M", type: "video" }
              ] 
            },
            {
              id: "emb-t2", name: "Microcontroller Architecture", description: "Registers & Timers", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Understanding CPU registers, GPIO, Interrupt Service Routines (ISRs), ADC/DAC, and Timers.",
              resources: [
                { title: "Embedded Systems Course (UT Austin)", url: "https://www.edx.org/course/embedded-systems-shape-the-world-microcontroller-i", type: "course" }
              ]
            }
          ] 
        },
        {
          id: "emb-p2", title: "Communication Protocols", description: "Talking to sensors",
          topics: [
            {
              id: "emb-t3", name: "Serial Protocols", description: "I2C, SPI, & UART", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Writing drivers for external sensors using standard embedded communication protocols.",
              resources: [
                { title: "I2C, SPI, UART Explained", url: "https://learn.sparkfun.com/tutorials/tags/communication", type: "article" }
              ]
            }
          ]
        },
        {
          id: "emb-p3", title: "Real-Time Systems", description: "Predictable execution",
          topics: [
            {
              id: "emb-t4", name: "RTOS Fundamentals", description: "FreeRTOS & Zephyr", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Task scheduling, mutexes, semaphores, message queues, and avoiding priority inversion.",
              resources: [
                { title: "FreeRTOS Tutorial", url: "https://www.freertos.org/tutorial/", type: "docs" }
              ]
            }
          ]
        }
      ],
    },
    { 
      id: "electronics", slug: "electronics", name: "Electronics Design", 
      description: "Design PCBs, simulate circuits, and understand analog/digital electronics.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Zap", 
      tags: ["PCB", "Circuits", "Altium"],
      phases: [
        { 
          id: "elec-p1", title: "Circuit Theory", description: "Electrons in motion", 
          topics: [
            { 
              id: "elec-t1", name: "Analog & Digital Basics", description: "Ohm's law to logic gates", timeEstimate: "4 weeks", difficulty: "Beginner", 
              details: "Resistors, capacitors, inductors, operational amplifiers (Op-Amps), logic gates, and flip-flops.", 
              resources: [
                { title: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/", type: "docs" },
                { title: "Crash Course Engineering", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeoVKA1GfA1T1GIf-W46aI", type: "video" }
              ] 
            }
          ] 
        },
        {
          id: "elec-p2", title: "PCB Layout & Design", description: "Creating physical boards",
          topics: [
            {
              id: "elec-t2", name: "ECAD Tools", description: "KiCad & Altium", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Schematic capture, component footprint creation, routing traces, and generating Gerber files for fabrication.",
              resources: [
                { title: "Getting to Blinky (KiCad)", url: "https://contextualelectronics.com/courses/getting-to-blinky/", type: "course" }
              ]
            }
          ]
        }
      ],
    },
    { 
      id: "fpga", slug: "fpga", name: "FPGA & Digital Logic", 
      description: "Program completely custom hardware using HDL.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Layers", 
      tags: ["Verilog", "VHDL", "Digital Design"],
      phases: [
        { 
          id: "fpga-p1", title: "Hardware Description", description: "Designing logic circuits", 
          topics: [
            { 
              id: "fpga-t1", name: "Verilog / VHDL Fundamentals", description: "Coding hardware", timeEstimate: "4 weeks", difficulty: "Intermediate", 
              details: "Combinational and sequential logic design, state machines (FSMs), and testbenches for simulation.", 
              resources: [
                { title: "Nand2Tetris", url: "https://www.nand2tetris.org/", type: "course" },
                { title: "ASIC World Verilog", url: "http://www.asic-world.com/verilog/veritut.html", type: "docs" }
              ] 
            }
          ] 
        }
      ],
    }
  ],
};
