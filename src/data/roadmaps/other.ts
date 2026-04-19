import { Domain } from "../types";

export const cyberDomain: Domain = {
  id: "cyber", slug: "cybersecurity", name: "Cybersecurity",
  description: "Learn to protect networks, find vulnerabilities, and secure applications.",
  icon: "Shield", color: "#fca5a5",
  subPaths: [
    {
      id: "ethical-hacking", slug: "ethical-hacking", name: "Ethical Hacking",
      description: "Think like an attacker. Defend like a pro.",
      difficulty: "Advanced", estimatedTime: "5-7 months", icon: "Bug",
      tags: ["Kali Linux", "Pentesting", "Metasploit"],
      phases: [
        {
          id: "eh-p1", title: "Foundations", description: "Basics of Linux, Networking, and Recon",
          topics: [
            {
              id: "eh-p1-t1", name: "Ethical Hacking Intro", description: "Legality, bug bounty", timeEstimate: "1 week", difficulty: "Beginner", details: "What is ethical hacking – scope, legality, bug bounty",
              resources: [
                { title: "Ethical Hacking Full Course", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE", type: "video" },
                { title: "Ethical Hacking Tamil", url: "https://www.youtube.com/results?search_query=ethical+hacking+full+course+tamil", type: "video" }
              ]
            },
            {
              id: "eh-p1-t2", name: "Linux for Hackers", description: "File system, bash scripting", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Linux basics for hackers – file system, permissions, bash scripting",
              resources: [
                { title: "TryHackMe – Beginner Path", url: "https://tryhackme.com/path/outline/beginner", type: "tool" }
              ]
            },
            {
              id: "eh-p1-t3", name: "Networking Fundamentals", description: "TCP/IP, DNS, HTTP", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Networking fundamentals – TCP/IP, DNS, HTTP, ports, protocols",
              resources: [
                { title: "Networking Fundamentals", url: "https://www.youtube.com/results?search_query=Networking+fundamentals+ethical+hacking", type: "video" }
              ]
            },
            {
              id: "eh-p1-t4", name: "OSI Model", description: "How packets travel", timeEstimate: "1 week", difficulty: "Beginner", details: "OSI model and how packets travel",
              resources: [
                { title: "OSI Model", url: "https://www.youtube.com/results?search_query=OSI+model+tutorial", type: "video" }
              ]
            },
            {
              id: "eh-p1-t5", name: "Setting up a Lab", description: "VirtualBox, Kali Linux", timeEstimate: "1 week", difficulty: "Beginner", details: "Setting up a lab – VirtualBox, Kali Linux, Metasploitable",
              resources: [
                { title: "Kali Linux Setup Guide", url: "https://www.kali.org/docs/installation/", type: "docs" }
              ]
            },
            {
              id: "eh-p1-t6", name: "Reconnaissance", description: "Passive and active", timeEstimate: "1 week", difficulty: "Intermediate", details: "Reconnaissance – passive (OSINT) and active",
              resources: [
                { title: "Reconnaissance Tutorial", url: "https://www.youtube.com/results?search_query=Reconnaissance+tutorial+ethical+hacking", type: "video" }
              ]
            },
            {
              id: "eh-p1-t7", name: "Google Dorking", description: "Shodan basics", timeEstimate: "1 week", difficulty: "Intermediate", details: "Google Dorking and Shodan basics",
              resources: [
                { title: "Google Dorking", url: "https://www.youtube.com/results?search_query=Google+Dorking+Shodan+tutorial", type: "video" }
              ]
            },
            {
              id: "eh-p1-t8", name: "Footprinting Tools", description: "whois, nslookup, dig", timeEstimate: "1 week", difficulty: "Intermediate", details: "Footprinting tools – whois, nslookup, dig",
              resources: [
                { title: "Footprinting", url: "https://www.youtube.com/results?search_query=Footprinting+tools+whois+nslookup", type: "video" }
              ]
            }
          ]
        },
        {
          id: "eh-p2", title: "Exploitation Techniques", description: "Finding logic flaws and penetrating systems",
          topics: [
            {
              id: "eh-p2-t1", name: "Scanning & Enumeration", description: "Nmap, Netcat", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Scanning and enumeration – Nmap, Netcat",
              resources: [
                { title: "TCM Security Tutorials", url: "https://www.youtube.com/@TCMSecurityAcademy", type: "video" }
              ]
            },
            {
              id: "eh-p2-t2", name: "Vulnerability Scanning", description: "Nessus, OpenVAS", timeEstimate: "1 week", difficulty: "Intermediate", details: "Vulnerability scanning – Nessus, OpenVAS",
              resources: [
                { title: "Vulnerability Scanning", url: "https://www.youtube.com/results?search_query=Vulnerability+scanning+Nessus+OpenVAS", type: "video" }
              ]
            },
            {
              id: "eh-p2-t3", name: "Metasploit Framework", description: "Payloads, exploits", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Metasploit Framework – modules, payloads, exploits",
              resources: [
                { title: "Metasploit Tamil Tutorial", url: "https://www.youtube.com/results?search_query=metasploit+tutorial+tamil+ethical+hacking", type: "video" }
              ]
            },
            {
              id: "eh-p2-t4", name: "Password Attacks", description: "Brute force, dictionary", timeEstimate: "1 week", difficulty: "Intermediate", details: "Password attacks – brute force, dictionary, rainbow tables",
              resources: [
                { title: "Password Attacks", url: "https://www.youtube.com/results?search_query=Password+attacks+tutorial", type: "video" }
              ]
            },
            {
              id: "eh-p2-t5", name: "Cracking Hashes", description: "John the Ripper, Hashcat", timeEstimate: "1 week", difficulty: "Intermediate", details: "John the Ripper and Hashcat",
              resources: [
                { title: "Hash Cracking", url: "https://www.youtube.com/results?search_query=John+the+Ripper+Hashcat+tutorial", type: "video" }
              ]
            },
            {
              id: "eh-p2-t6", name: "Privilege Escalation", description: "Linux and Windows", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Privilege escalation – Linux and Windows techniques",
              resources: [
                { title: "TryHackMe – Jr Penetration Tester", url: "https://tryhackme.com/path/outline/jrpenetrationtester", type: "tool" }
              ]
            },
            {
              id: "eh-p2-t7", name: "Man-in-the-Middle Attacks", description: "ARP spoofing, SSL stripping", timeEstimate: "1 week", difficulty: "Advanced", details: "Man-in-the-Middle attacks – ARP spoofing, SSL stripping",
              resources: [
                { title: "MITM Attacks", url: "https://www.youtube.com/results?search_query=MITM+Attacks+ARP+spoofing", type: "video" }
              ]
            },
            {
              id: "eh-p2-t8", name: "Social Engineering", description: "Phishing concepts", timeEstimate: "1 week", difficulty: "Beginner", details: "Social engineering – phishing concepts",
              resources: [
                { title: "Social Engineering", url: "https://www.youtube.com/results?search_query=Social+engineering+phishing+tutorial", type: "video" }
              ]
            },
            {
              id: "eh-p2-t9", name: "Post-exploitation", description: "Persistence, lateral movement", timeEstimate: "1 week", difficulty: "Advanced", details: "Post-exploitation – persistence, lateral movement basics",
              resources: [
                { title: "HackTheBox – Practice Labs", url: "https://www.hackthebox.com/", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "eh-p3", title: "Advanced & CTF", description: "Complex exploits, bug bounty, and certifications",
          topics: [
            {
              id: "eh-p3-t1", name: "Buffer Overflows", description: "Memory exploitation", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Buffer overflow exploits",
              resources: [
                { title: "Buffer Overflow – TCM Security", url: "https://www.youtube.com/watch?v=qSnPayW6vmY", type: "video" }
              ]
            },
            {
              id: "eh-p3-t2", name: "Shellcoding Basics", description: "Custom payloads", timeEstimate: "1 week", difficulty: "Advanced", details: "Shellcoding basics",
              resources: [
                { title: "Shellcoding", url: "https://www.youtube.com/results?search_query=Shellcoding+tutorial+ethical+hacking", type: "video" }
              ]
            },
            {
              id: "eh-p3-t3", name: "Active Directory Attacks", description: "Kerberoasting, Pass-the-Hash", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Active Directory attacks – Kerberoasting, Pass-the-Hash",
              resources: [
                { title: "AD Attacks", url: "https://www.youtube.com/results?search_query=Active+Directory+attacks+Kerberoasting", type: "video" }
              ]
            },
            {
              id: "eh-p3-t4", name: "Wireless Hacking", description: "WPA2 cracking", timeEstimate: "1 week", difficulty: "Intermediate", details: "Wireless hacking – WPA2 cracking, evil twin",
              resources: [
                { title: "Wireless Hacking", url: "https://www.youtube.com/results?search_query=Wireless+hacking+WPA2", type: "video" }
              ]
            },
            {
              id: "eh-p3-t5", name: "CTF Strategy", description: "Capture The Flag competitions", timeEstimate: "1 week", difficulty: "Intermediate", details: "Capture The Flag (CTF) competition strategy",
              resources: [
                { title: "CTF Tamil Guide", url: "https://www.youtube.com/results?search_query=CTF+capture+the+flag+tamil+tutorial", type: "video" },
                { title: "PicoCTF", url: "https://picoctf.org/", type: "tool" }
              ]
            },
            {
              id: "eh-p3-t6", name: "Writing Pentest Reports", description: "Documentation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Writing penetration testing reports",
              resources: [
                { title: "Pentest Reports", url: "https://www.youtube.com/results?search_query=Writing+penetration+testing+reports", type: "video" }
              ]
            },
            {
              id: "eh-p3-t7", name: "Bug Bounty Hunting", description: "HackerOne, Bugcrowd", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Bug bounty hunting – HackerOne, Bugcrowd workflow",
              resources: [
                { title: "HackerOne Platform", url: "https://www.hackerone.com/", type: "tool" },
                { title: "PortSwigger Web Academy", url: "https://portswigger.net/web-security", type: "docs" }
              ]
            },
            {
              id: "eh-p3-t8", name: "Certifications", description: "CEH / OSCP roadmap", timeEstimate: "1 week", difficulty: "Intermediate", details: "CEH / OSCP certification roadmap",
              resources: [
                { title: "CEH / OSCP roadmap", url: "https://www.youtube.com/results?search_query=CEH+OSCP+certification+roadmap", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "network-security", slug: "network-security", name: "Network Security",
      description: "Secure the infrastructure everything runs on.",
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Wifi",
      tags: ["Networks", "Firewalls", "VPN"],
      phases: [
        {
          id: "ns-p1", title: "Networking & Security Basics", description: "TCP/IP, Firewalls, and Wireshark",
          topics: [
            {
              id: "ns-p1-t1", name: "TCP/IP Deep Dive", description: "Handshakes, headers", timeEstimate: "1 week", difficulty: "Intermediate", details: "TCP/IP deep dive – handshakes, headers, flags",
              resources: [
                { title: "Computer Networking Course", url: "https://www.youtube.com/watch?v=qiQR5rTSshw", type: "video" }
              ]
            },
            {
              id: "ns-p1-t2", name: "Subnetting", description: "CIDR notation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Subnetting and CIDR notation",
              resources: [
                { title: "Network Security Tamil", url: "https://www.youtube.com/results?search_query=network+security+tamil+tutorial+full+course", type: "video" }
              ]
            },
            {
              id: "ns-p1-t3", name: "Common Protocols", description: "DNS, DHCP, ARP", timeEstimate: "1 week", difficulty: "Intermediate", details: "Common protocols – DNS, DHCP, ARP, ICMP, FTP, SSH",
              resources: [
                { title: "Common Protocols", url: "https://www.youtube.com/results?search_query=Common+protocols+DNS+DHCP+ARP", type: "video" }
              ]
            },
            {
              id: "ns-p1-t4", name: "Firewalls", description: "Stateful vs stateless", timeEstimate: "1 week", difficulty: "Intermediate", details: "Firewalls – types, stateful vs stateless",
              resources: [
                { title: "Professor Messer – Network+", url: "https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/", type: "course" }
              ]
            },
            {
              id: "ns-p1-t5", name: "VPNs", description: "IPSec, SSL/TLS", timeEstimate: "1 week", difficulty: "Intermediate", details: "VPNs – how they work, IPSec, SSL/TLS VPN",
              resources: [
                { title: "VPNs", url: "https://www.youtube.com/results?search_query=VPNs+IPSec+SSL+TLS+VPN", type: "video" }
              ]
            },
            {
              id: "ns-p1-t6", name: "IDS vs IPS", description: "Detection and prevention", timeEstimate: "1 week", difficulty: "Intermediate", details: "IDS vs IPS – detection and prevention",
              resources: [
                { title: "IDS vs IPS", url: "https://www.youtube.com/results?search_query=IDS+vs+IPS+tutorial", type: "video" }
              ]
            },
            {
              id: "ns-p1-t7", name: "Wireshark Basics", description: "Packet capture", timeEstimate: "1 week", difficulty: "Intermediate", details: "Wireshark – packet capture and analysis basics",
              resources: [
                { title: "Wireshark Official Docs", url: "https://www.wireshark.org/docs/", type: "docs" }
              ]
            },
            {
              id: "ns-p1-t8", name: "Network Topology", description: "DMZ architecture", timeEstimate: "1 week", difficulty: "Intermediate", details: "Network topology and DMZ architecture",
              resources: [
                { title: "Network Topology", url: "https://www.youtube.com/results?search_query=Network+topology+DMZ+architecture", type: "video" }
              ]
            }
          ]
        },
        {
          id: "ns-p2", title: "Threats & Defense", description: "Mitigating network attacks and monitoring traffic",
          topics: [
            {
              id: "ns-p2-t1", name: "Common Network Attacks", description: "DDoS, DNS poisoning", timeEstimate: "1 week", difficulty: "Intermediate", details: "Common network attacks – DDoS, DNS poisoning, VLAN hopping",
              resources: [
                { title: "Network Attacks", url: "https://www.youtube.com/results?search_query=Network+attacks+DDoS+DNS+poisoning", type: "video" }
              ]
            },
            {
              id: "ns-p2-t2", name: "Intrusion Detection", description: "Snort setup", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Intrusion Detection with Snort",
              resources: [
                { title: "Snort IDS Tutorial", url: "https://www.youtube.com/results?search_query=snort+IDS+tutorial+beginners", type: "video" }
              ]
            },
            {
              id: "ns-p2-t3", name: "Firewall Rules", description: "iptables on Linux", timeEstimate: "1 week", difficulty: "Advanced", details: "Firewall rules and iptables on Linux",
              resources: [
                { title: "TryHackMe – SOC Level 1", url: "https://tryhackme.com/path/outline/soclevel1", type: "tool" }
              ]
            },
            {
              id: "ns-p2-t4", name: "Network Segmentation", description: "VLANs", timeEstimate: "1 week", difficulty: "Intermediate", details: "Network segmentation strategies",
              resources: [
                { title: "Network Segmentation", url: "https://www.youtube.com/results?search_query=Network+segmentation+strategies", type: "video" }
              ]
            },
            {
              id: "ns-p2-t5", name: "Zero Trust Architecture", description: "Identity-aware networks", timeEstimate: "1 week", difficulty: "Intermediate", details: "Zero Trust Network Architecture",
              resources: [
                { title: "Zero Trust Architecture", url: "https://www.youtube.com/results?search_query=Zero+Trust+Network+Architecture", type: "video" }
              ]
            },
            {
              id: "ns-p2-t6", name: "SIEM Systems", description: "Splunk basics", timeEstimate: "2 weeks", difficulty: "Advanced", details: "SIEM systems – Splunk basics",
              resources: [
                { title: "Splunk Tamil Tutorial", url: "https://www.youtube.com/results?search_query=splunk+SIEM+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "ns-p2-t7", name: "Log Analysis", description: "Anomaly detection", timeEstimate: "1 week", difficulty: "Advanced", details: "Log analysis and anomaly detection",
              resources: [
                { title: "Log Analysis", url: "https://www.youtube.com/results?search_query=Log+analysis+anomaly+detection", type: "video" }
              ]
            },
            {
              id: "ns-p2-t8", name: "TLS/SSL", description: "Certificates, PKI", timeEstimate: "1 week", difficulty: "Intermediate", details: "TLS/SSL – certificates, handshake, PKI",
              resources: [
                { title: "Cisco Networking Academy", url: "https://www.netacad.com/", type: "course" }
              ]
            }
          ]
        },
        {
          id: "ns-p3", title: "Advanced & Certifications", description: "Cloud network security, forensics, and incident response",
          topics: [
            {
              id: "ns-p3-t1", name: "BGP Hijacking", description: "Route security", timeEstimate: "1 week", difficulty: "Advanced", details: "BGP hijacking and route security",
              resources: [
                { title: "BGP Hijacking", url: "https://www.youtube.com/results?search_query=BGP+hijacking+route+security", type: "video" }
              ]
            },
            {
              id: "ns-p3-t2", name: "Network Forensics", description: "Analyzing attacks", timeEstimate: "1 week", difficulty: "Advanced", details: "Network forensics – capturing and analyzing attacks",
              resources: [
                { title: "Network Forensics Tamil", url: "https://www.youtube.com/results?search_query=network+forensics+security+tamil", type: "video" }
              ]
            },
            {
              id: "ns-p3-t3", name: "Cloud Network Security", description: "AWS VPC, Security Groups", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Cloud network security – AWS VPC, Security Groups",
              resources: [
                { title: "AWS Security Specialty", url: "https://www.youtube.com/watch?v=9CXfFJR78S0", type: "video" }
              ]
            },
            {
              id: "ns-p3-t4", name: "SDN Security", description: "Software Defined Networking", timeEstimate: "1 week", difficulty: "Advanced", details: "Software Defined Networking (SDN) security",
              resources: [
                { title: "Cybrary Security Courses", url: "https://www.cybrary.it/", type: "course" }
              ]
            },
            {
              id: "ns-p3-t5", name: "Pentesting a Network", description: "Full methodology", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Penetration testing a network – full methodology",
              resources: [
                { title: "Network Pentesting", url: "https://www.youtube.com/results?search_query=Penetration+testing+a+network", type: "video" }
              ]
            },
            {
              id: "ns-p3-t6", name: "CompTIA Security+", description: "Exam prep", timeEstimate: "2 weeks", difficulty: "Beginner", details: "CompTIA Security+ exam prep",
              resources: [
                { title: "CompTIA Security+ Professor Messer", url: "https://www.professormesser.com/security-plus/", type: "course" }
              ]
            },
            {
              id: "ns-p3-t7", name: "Cisco CCNA Security", description: "Security concepts", timeEstimate: "1 week", difficulty: "Intermediate", details: "Cisco CCNA Security concepts",
              resources: [
                { title: "CCNA Security", url: "https://www.youtube.com/results?search_query=Cisco+CCNA+Security+tutorial", type: "video" }
              ]
            },
            {
              id: "ns-p3-t8", name: "Incident Response", description: "Handling network breaches", timeEstimate: "1 week", difficulty: "Advanced", details: "Incident response for network breaches",
              resources: [
                { title: "Incident Response", url: "https://www.youtube.com/results?search_query=Incident+response+network+breaches", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "app-security", slug: "application-security", name: "Application Security",
      description: "Find and fix vulnerabilities before attackers do.",
      difficulty: "Advanced", estimatedTime: "5-7 months", icon: "Lock",
      tags: ["OWASP", "Burp Suite", "SAST/DAST"],
      phases: [
        {
          id: "as-p1", title: "Web Security Fundamentals", description: "How the web works and common vulnerabilities",
          topics: [
            {
              id: "as-p1-t1", name: "How the Web Works", description: "HTTP/HTTPS, cookies", timeEstimate: "1 week", difficulty: "Beginner", details: "How the web works – HTTP/HTTPS, cookies, sessions, headers",
              resources: [
                { title: "Web Architecture Sec tutorial", url: "https://www.youtube.com/results?search_query=How+the+web+works+security+HTTP", type: "video" }
              ]
            },
            {
              id: "as-p1-t2", name: "OWASP Top 10", description: "Core vulnerabilities", timeEstimate: "1 week", difficulty: "Beginner", details: "OWASP Top 10 – understanding each vulnerability",
              resources: [
                { title: "Web Application Security Course", url: "https://www.youtube.com/watch?v=F5KJVuii0Yw", type: "video" },
                { title: "OWASP Official Docs", url: "https://owasp.org/www-project-top-ten/", type: "docs" }
              ]
            },
            {
              id: "as-p1-t3", name: "SQL Injection", description: "Exploitation and prevention", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "SQL Injection – types, exploitation, prevention",
              resources: [
                { title: "OWASP Top 10 Tamil", url: "https://www.youtube.com/results?search_query=OWASP+top+10+tamil+web+security", type: "video" }
              ]
            },
            {
              id: "as-p1-t4", name: "Cross-Site Scripting (XSS)", description: "Stored, reflected", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Cross-Site Scripting (XSS) – stored, reflected, DOM-based",
              resources: [
                { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", type: "tool" }
              ]
            },
            {
              id: "as-p1-t5", name: "CSRF", description: "Cross-Site Request Forgery", timeEstimate: "1 week", difficulty: "Intermediate", details: "Cross-Site Request Forgery (CSRF)",
              resources: [
                { title: "CSRF Tutorial", url: "https://www.youtube.com/results?search_query=Cross-Site+Request+Forgery+CSRF", type: "video" }
              ]
            },
            {
              id: "as-p1-t6", name: "Authentication Flaws", description: "Weak passwords", timeEstimate: "1 week", difficulty: "Intermediate", details: "Authentication flaws – weak passwords, session fixation",
              resources: [
                { title: "Authentication Flaws", url: "https://www.youtube.com/results?search_query=Authentication+flaws+session+fixation", type: "video" }
              ]
            },
            {
              id: "as-p1-t7", name: "Security Misconfigs", description: "Basic deployment flaws", timeEstimate: "1 week", difficulty: "Beginner", details: "Security misconfigurations",
              resources: [
                { title: "Security Misconfigs", url: "https://www.youtube.com/results?search_query=Security+misconfigurations", type: "video" }
              ]
            },
            {
              id: "as-p1-t8", name: "Burp Suite Basics", description: "Intercepting requests", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Burp Suite basics – intercepting and modifying requests",
              resources: [
                { title: "Burp Suite Basics", url: "https://www.youtube.com/results?search_query=Burp+Suite+basics+intercept", type: "video" }
              ]
            }
          ]
        },
        {
          id: "as-p2", title: "Exploitation & Secure Coding", description: "Advanced attacks and code defense",
          topics: [
            {
              id: "as-p2-t1", name: "Advanced SQLi", description: "Blind, time-based", timeEstimate: "1 week", difficulty: "Advanced", details: "Advanced SQL injection – blind, time-based, out-of-band",
              resources: [
                { title: "Advanced SQLi", url: "https://www.youtube.com/results?search_query=Advanced+SQL+injection+blind+time-based", type: "video" }
              ]
            },
            {
              id: "as-p2-t2", name: "XXE", description: "XML External Entity", timeEstimate: "1 week", difficulty: "Advanced", details: "XXE – XML External Entity injection",
              resources: [
                { title: "XXE Tutorial", url: "https://www.youtube.com/results?search_query=XXE+XML+External+Entity+injection", type: "video" }
              ]
            },
            {
              id: "as-p2-t3", name: "SSRF", description: "Server Side Request Forgery", timeEstimate: "1 week", difficulty: "Advanced", details: "SSRF – Server Side Request Forgery",
              resources: [
                { title: "Burp Suite Full Course", url: "https://www.youtube.com/watch?v=G3hpAeoZ4ek", type: "video" }
              ]
            },
            {
              id: "as-p2-t4", name: "Insecure Deserialization", description: "Object injections", timeEstimate: "1 week", difficulty: "Advanced", details: "Insecure Deserialization",
              resources: [
                { title: "Web App Pentesting Tamil", url: "https://www.youtube.com/results?search_query=web+application+penetration+testing+tamil", type: "video" }
              ]
            },
            {
              id: "as-p2-t5", name: "JWT Attacks", description: "alg:none, secret cracking", timeEstimate: "1 week", difficulty: "Advanced", details: "JWT attacks – alg:none, secret brute force",
              resources: [
                { title: "JWT Attacks Guide", url: "https://www.youtube.com/results?search_query=JWT+attacks+security", type: "video" }
              ]
            },
            {
              id: "as-p2-t6", name: "File Upload Vulnerabilities", description: "Reverse shells", timeEstimate: "1 week", difficulty: "Intermediate", details: "File upload vulnerabilities",
              resources: [
                { title: "DVWA Practice", url: "https://github.com/digininja/DVWA", type: "tool" }
              ]
            },
            {
              id: "as-p2-t7", name: "Secure Coding Practices", description: "Input validation", timeEstimate: "1 week", difficulty: "Advanced", details: "Secure coding practices – input validation, output encoding",
              resources: [
                { title: "Secure Coding", url: "https://www.youtube.com/results?search_query=Secure+coding+practices", type: "video" }
              ]
            },
            {
              id: "as-p2-t8", name: "SAST and DAST", description: "Semgrep, ZAP tools", timeEstimate: "1 week", difficulty: "Intermediate", details: "SAST and DAST tools – Semgrep, OWASP ZAP",
              resources: [
                { title: "HackTheBox Web Challenges", url: "https://app.hackthebox.com/challenges", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "as-p3", title: "Advanced & Mobile App Security", description: "APIs, Mobile, DevSecOps",
          topics: [
            {
              id: "as-p3-t1", name: "API Security Testing", description: "REST and GraphQL", timeEstimate: "2 weeks", difficulty: "Advanced", details: "API security testing – REST and GraphQL vulnerabilities",
              resources: [
                { title: "API Security Course", url: "https://www.youtube.com/watch?v=CkVvB5aQLFE", type: "video" }
              ]
            },
            {
              id: "as-p3-t2", name: "OAuth 2.0 & OpenID", description: "Authentication flows", timeEstimate: "1 week", difficulty: "Advanced", details: "OAuth 2.0 and OpenID Connect attack surface",
              resources: [
                { title: "Mobile App Security Tamil", url: "https://www.youtube.com/results?search_query=mobile+app+security+android+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "as-p3-t3", name: "Android App Security", description: "APK reverse engineering", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Mobile app security – Android APK reverse engineering basics",
              resources: [
                { title: "OWASP Mobile Security Guide", url: "https://mas.owasp.org/MASTG/", type: "docs" }
              ]
            },
            {
              id: "as-p3-t4", name: "iOS App Security", description: "Binary analysis", timeEstimate: "1 week", difficulty: "Advanced", details: "iOS app security – binary analysis basics",
              resources: [
                { title: "iOS App Security", url: "https://www.youtube.com/results?search_query=iOS+app+security+binary+analysis", type: "video" }
              ]
            },
            {
              id: "as-p3-t5", name: "Threat Modeling", description: "STRIDE framework", timeEstimate: "1 week", difficulty: "Intermediate", details: "Threat modeling – STRIDE framework",
              resources: [
                { title: "TryHackMe Web Fundamentals", url: "https://tryhackme.com/path/outline/web", type: "tool" }
              ]
            },
            {
              id: "as-p3-t6", name: "DevSecOps", description: "Security in CI/CD", timeEstimate: "1 week", difficulty: "Advanced", details: "DevSecOps – integrating security into CI/CD",
              resources: [
                { title: "DevSecOps", url: "https://www.youtube.com/results?search_query=DevSecOps+integrating+security", type: "video" }
              ]
            },
            {
              id: "as-p3-t7", name: "Container Security", description: "Docker, Kubernetes", timeEstimate: "1 week", difficulty: "Advanced", details: "Container security – Docker and Kubernetes vulnerabilities",
              resources: [
                { title: "Container Security", url: "https://www.youtube.com/results?search_query=Container+security+Docker+Kubernetes", type: "video" }
              ]
            },
            {
              id: "as-p3-t8", name: "Bug Bounty Reports", description: "Writing good reports", timeEstimate: "1 week", difficulty: "Intermediate", details: "Bug bounty – writing good vulnerability reports",
              resources: [
                { title: "HackerOne Hacktivity", url: "https://hackerone.com/hacktivity", type: "docs" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const coreCsDomain: Domain = {
  id: "core-cs", slug: "core-cs", name: "Core CS",
  description: "Master computer science fundamentals — DSA, system design, databases, and OS.",
  icon: "Cpu", color: "#a78bfa",
  subPaths: [
    { 
      id: "dsa", slug: "dsa", name: "Data Structures & Algorithms", 
      description: "Interview-focused. Follow this order strictly — each phase builds on the previous.", 
      difficulty: "Intermediate", estimatedTime: "6-12 months", icon: "Code", 
      tags: ["LeetCode", "Two Pointers", "Sliding Window", "Dynamic Programming"],
      phases: [
        { 
          id: "dsa-p1", title: "Foundations", description: "Core data structures and complexity analysis", 
          topics: [
            { 
              id: "dsa-p1-t1", name: "Time & Space Complexity", description: "Big O, Omega, Theta notation", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Best / Average / Worst case, Analyzing loops and recursion, Space complexity and auxiliary space", 
              resources: [
                { title: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/", type: "tool" },
                { title: "DSA in Tamil – Placement Series (YouTube Search)", url: "https://www.youtube.com/results?search_query=DSA+tamil+placement+series", type: "video" }
              ] 
            },
            { 
              id: "dsa-p1-t2", name: "Arrays", description: "Traversal, insertion, deletion", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Prefix sums, Sliding window technique, Two pointer technique, Kadane's algorithm (max subarray)", 
              resources: [
                { title: "NeetCode 150", url: "https://neetcode.io/practice", type: "tool" },
                { title: "CS Fundamentals Visualizer", url: "https://visualgo.net/en", type: "tool" }
              ] 
            },
            { id: "dsa-p1-t3", name: "Strings", description: "String manipulation", timeEstimate: "1 week", difficulty: "Beginner", details: "Palindrome checks, Anagram detection, Pattern matching basics", resources: [{ title: "Strings Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Strings+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t4", name: "Linked Lists", description: "Singly and Doubly linked list", timeEstimate: "1 week", difficulty: "Beginner", details: "Reverse a linked list, Floyd's cycle detection, Merge two sorted lists, Find middle of linked list", resources: [{ title: "Linked Lists Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Linked+Lists+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t5", name: "Stacks", description: "Array and linked list implementation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Valid parentheses, Next Greater Element, Min Stack, Monotonic Stack pattern", resources: [{ title: "Stacks Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Stacks+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t6", name: "Queues", description: "Queue implementation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Circular queue, Deque (double-ended queue), Sliding window maximum using deque", resources: [{ title: "Queues Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Queues+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t7", name: "Hashing", description: "HashMap and HashSet usage", timeEstimate: "1 week", difficulty: "Intermediate", details: "Collision handling concepts, Two Sum pattern, Frequency counting, Subarray sum equals K", resources: [{ title: "Hashing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Hashing+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t8", name: "Recursion & Backtracking", description: "Recursion tree visualization", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Memoization intro, Subsets and permutations, N-Queens, Sudoku solver", resources: [{ title: "Recursion & Backtracking Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Recursion+%26+Backtracking+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "dsa-p2", title: "Core DSA", description: "Trees, Graphs, and Sorting — the heart of interviews", 
          topics: [
            { 
              id: "dsa-p2-t1", name: "Binary Trees", description: "Inorder, Preorder, Postorder traversal", timeEstimate: "2 weeks", difficulty: "Intermediate", 
              details: "Height and diameter of tree, Lowest Common Ancestor (LCA), Level order traversal (BFS), Zigzag traversal, Symmetric tree, Path sum problems", 
              resources: [
                { title: "Striver's Graph Series (YouTube)", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn", type: "video" },
                { title: "Graph Theory Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=graph+theory+DSA+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "dsa-p2-t2", name: "Binary Search Trees (BST)", description: "Insert, delete, search in BST", timeEstimate: "1 week", difficulty: "Intermediate", details: "Validate a BST, Kth smallest/largest, Inorder successor and predecessor, Convert sorted array to BST", resources: [{ title: "Binary Search Trees (BST) Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Binary+Search+Trees+(BST)+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t3", name: "Heaps & Priority Queue", description: "Min-heap and Max-heap", timeEstimate: "1 week", difficulty: "Intermediate", details: "Heap sort, Kth largest element, Merge K sorted lists, Top K frequent elements, Median from data stream", resources: [{ title: "Heaps & Priority Queue Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Heaps+%26+Priority+Queue+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t4", name: "Binary Search", description: "Classic binary search", timeEstimate: "1 week", difficulty: "Intermediate", details: "Search in rotated sorted array, Find first and last position, Binary search on answer, Aggressive cows", resources: [{ title: "Binary Search Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Binary+Search+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t5", name: "Sorting Algorithms", description: "Bubble, Selection, Insertion sort", timeEstimate: "1 week", difficulty: "Intermediate", details: "Merge Sort, Quick Sort and partitioning, Counting sort / Radix sort, Sort colors", resources: [{ title: "Sorting Algorithms Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Sorting+Algorithms+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t6", name: "Graphs – Basics", description: "Adjacency list vs matrix", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "BFS and DFS traversal, Detect cycle, Bipartite graph check, Topological sort", resources: [{ title: "Graphs – Basics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Basics+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t7", name: "Graphs – Shortest Path", description: "Dijkstra's algorithm", timeEstimate: "1 week", difficulty: "Advanced", details: "Bellman-Ford algorithm, Floyd-Warshall, 0/1 BFS", resources: [{ title: "Graphs – Shortest Path Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Shortest+Path+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t8", name: "Graphs – Advanced", description: "Disjoint Set Union (DSU)", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Minimum Spanning Tree, Strongly Connected Components, Bridges and Articulation Points", resources: [{ title: "Graphs – Advanced Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Advanced+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "dsa-p3", title: "Dynamic Programming & Advanced", description: "DP patterns + advanced topics", 
          topics: [
            { 
              id: "dsa-p3-t1", name: "Dynamic Programming – 1D", description: "Fibonacci and climbing stairs", timeEstimate: "2 weeks", difficulty: "Advanced", 
              details: "House robber I and II, Coin change (min coins), Longest Increasing Subsequence (LIS), Word break problem", 
              resources: [
                { title: "Striver's DP Series (YouTube)", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY", type: "video" },
                { title: "Dynamic Programming Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=dynamic+programming+tamil+tutorial+placement", type: "video" },
                { title: "LeetCode DP Study Plan", url: "https://leetcode.com/study-plan/dynamic-programming/", type: "tool" },
                { title: "CSES Problem Set – DP Section", url: "https://cses.fi/problemset/list/", type: "tool" }
              ] 
            },
            { id: "dsa-p3-t2", name: "Dynamic Programming – 2D", description: "0/1 Knapsack", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Subset sum, Longest Common Subsequence (LCS), Edit distance, Matrix chain multiplication, Unique paths in grid", resources: [{ title: "Dynamic Programming – 2D Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Dynamic+Programming+%E2%80%93+2D+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t3", name: "DP on Trees and Graphs", description: "Diameter of tree using DP", timeEstimate: "1 week", difficulty: "Advanced", details: "Maximum path sum in binary tree, DP on DAGs", resources: [{ title: "DP on Trees and Graphs Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=DP+on+Trees+and+Graphs+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t4", name: "Tries", description: "Trie insert, search, startsWith", timeEstimate: "1 week", difficulty: "Advanced", details: "Longest common prefix, Word search II, XOR problems using Trie", resources: [{ title: "Tries Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Tries+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t5", name: "Segment Trees & Fenwick Trees", description: "Range sum query", timeEstimate: "1 week", difficulty: "Advanced", details: "Range minimum query, Point updates, BIT for prefix sums", resources: [{ title: "Segment Trees & Fenwick Trees Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Segment+Trees+%26+Fenwick+Trees+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t6", name: "Greedy Algorithms", description: "Activity selection", timeEstimate: "1 week", difficulty: "Advanced", details: "Jump Game, Minimum platforms, Fractional Knapsack, Huffman encoding", resources: [{ title: "Greedy Algorithms Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Greedy+Algorithms+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t7", name: "Bit Manipulation", description: "AND, OR, XOR, NOT, shifts", timeEstimate: "1 week", difficulty: "Intermediate", details: "Check power of 2, Count set bits, Single number, Bitmask DP intro", resources: [{ title: "Bit Manipulation Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Bit+Manipulation+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t8", name: "Math & Number Theory", description: "GCD and LCM", timeEstimate: "1 week", difficulty: "Intermediate", details: "Prime sieve, Modular arithmetic, Combinatorics basics", resources: [{ title: "Math & Number Theory Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Math+%26+Number+Theory+tutorial+interview", type: "video" }] }
          ] 
        }
      ],
    },
    { 
      id: "sys-design", slug: "system-design", name: "System Design", 
      description: "Understand concepts and apply them to real-world design scenarios. Focus on being able to talk through trade-offs.", 
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Network", 
      tags: ["Scalability", "Microservices", "Architecture", "Distributed Systems"],
      phases: [
        { 
          id: "sd-p1", title: "Fundamentals", description: "Client-Server Architecture and networking basics", 
          topics: [
            { 
              id: "sd-p1-t1", name: "Client-Server Architecture", description: "IP, DNS, HTTP/HTTPS basics", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Understand the core request-response model and basic networking protocols.", 
              resources: [
                { title: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", type: "docs" },
                { title: "System Design Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+tamil+interview+2024", type: "video" }
              ] 
            },
            { id: "sd-p1-t2", name: "REST vs GraphQL", description: "API Paradigms", timeEstimate: "1 week", difficulty: "Intermediate", details: "Tradeoffs between REST and GraphQL.", resources: [{ title: "REST vs GraphQL Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=REST+vs+GraphQL+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t3", name: "System Metrics", description: "Latency, Throughput, Availability", timeEstimate: "1 week", difficulty: "Intermediate", details: "Latency, Throughput, Availability, Consistency.", resources: [{ title: "System Metrics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=System+Metrics+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t4", name: "Scaling", description: "Horizontal vs Vertical Scaling", timeEstimate: "1 week", difficulty: "Intermediate", details: "Understand how to add more power vs more machines.", resources: [{ title: "Scaling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Scaling+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t5", name: "Load Balancers", description: "Distributing traffic", timeEstimate: "1 week", difficulty: "Intermediate", details: "Hardware and software load balancers, algorithms like Round Robin.", resources: [{ title: "Load Balancers Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Load+Balancers+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t6", name: "CDN", description: "Content Delivery Networks", timeEstimate: "1 week", difficulty: "Intermediate", details: "Edge locations and pushing static content closer to users.", resources: [{ title: "CDN Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CDN+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t7", name: "Caching", description: "Caching strategies", timeEstimate: "1 week", difficulty: "Intermediate", details: "Caching types, TTL, eviction policies (LRU), Write-through/Write-back.", resources: [{ title: "ByteByteGo – System Design Basics", url: "https://www.youtube.com/@ByteByteGo", type: "video" }] }
          ] 
        },
        { 
          id: "sd-p2", title: "Core Concepts", description: "Data persistence and distributed patterns", 
          topics: [
            { 
              id: "sd-p2-t1", name: "Databases", description: "SQL vs NoSQL", timeEstimate: "1 week", difficulty: "Advanced", 
              details: "Databases – SQL vs NoSQL, when to use what.", 
              resources: [
                { title: "Gaurav Sen – System Design", url: "https://www.youtube.com/@gkcs", type: "video" },
                { title: "System Design Interview Book (Alex Xu)", url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF", type: "docs" }
              ] 
            },
            { id: "sd-p2-t2", name: "Database Scaling", description: "Replication and Sharding", timeEstimate: "1 week", difficulty: "Advanced", details: "Database Replication and Sharding techniques.", resources: [{ title: "Database Scaling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Database+Scaling+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t3", name: "Indexes", description: "Query Optimization", timeEstimate: "1 week", difficulty: "Advanced", details: "Indexes and Query Optimization strategies.", resources: [{ title: "Indexes Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Indexes+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t4", name: "Message Queues", description: "Kafka, RabbitMQ", timeEstimate: "1 week", difficulty: "Advanced", details: "Asynchronous communication and pub/sub patterns.", resources: [{ title: "Message Queues Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Message+Queues+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t5", name: "Consistent Hashing", description: "Distributed caching", timeEstimate: "1 week", difficulty: "Advanced", details: "Distributed hashing without massive key remapping.", resources: [{ title: "System Design Course Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+concepts+tamil", type: "video" }] },
            { id: "sd-p2-t6", name: "CAP Theorem", description: "Consistency, Availability, Partition Tolerance", timeEstimate: "1 week", difficulty: "Advanced", details: "The tradeoffs of distributed data stores.", resources: [{ title: "CAP Theorem Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CAP+Theorem+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t7", name: "Rate Limiting & Gateways", description: "API Gateway and Microservices basics", timeEstimate: "1 week", difficulty: "Advanced", details: "Token bucket, leaky bucket algorithms.", resources: [{ title: "Rate Limiting & Gateways Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Rate+Limiting+%26+Gateways+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t8", name: "Blob Storage", description: "S3 style object storage", timeEstimate: "1 week", difficulty: "Advanced", details: "Storing massive unstructured data efficiently.", resources: [{ title: "Blob Storage Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Blob+Storage+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "sd-p3", title: "Design Practice", description: "Real-world system design interviews", 
          topics: [
            { 
              id: "sd-p3-t1", name: "Design URL Shortener (Bitly)", description: "Practice classic problem", timeEstimate: "1 week", difficulty: "Advanced", 
              details: "Handling generating short links, databases for massive read arrays, analytics.", 
              resources: [
                { title: "ByteByteGo – Real System Designs", url: "https://www.youtube.com/@ByteByteGo", type: "video" },
                { title: "Exponent System Design Interview", url: "https://www.youtube.com/c/ExponentTV", type: "video" }
              ] 
            },
            { id: "sd-p3-t2", name: "Design Pastebin", description: "Data storage focus", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling strings of data and expiration.", resources: [{ title: "Design Pastebin Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Pastebin+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t3", name: "Design a Notification System", description: "Message delivery", timeEstimate: "1 week", difficulty: "Advanced", details: "Push notifications, SMS, async queues.", resources: [{ title: "Design a Notification System Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+a+Notification+System+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t4", name: "Design Twitter/Instagram Feed", description: "Timeline generation", timeEstimate: "1 week", difficulty: "Advanced", details: "Fanout on write vs fanout on read.", resources: [{ title: "Design Twitter/Instagram Feed Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Twitter%2FInstagram+Feed+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t5", name: "Design a Rate Limiter", description: "API Defenses", timeEstimate: "1 week", difficulty: "Advanced", details: "Redis techniques for rate limits.", resources: [{ title: "Design a Rate Limiter Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+a+Rate+Limiter+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t6", name: "Design Netflix", description: "Video streaming", timeEstimate: "1 week", difficulty: "Advanced", details: "CDN heavily, blob storage, transcoder services.", resources: [{ title: "Design Netflix Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Netflix+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t7", name: "Design Uber", description: "Location + matching", timeEstimate: "1 week", difficulty: "Advanced", details: "Geospatial queries and quadtrees.", resources: [{ title: "Design Uber Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Uber+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t8", name: "Design WhatsApp", description: "Chat + real-time", timeEstimate: "1 week", difficulty: "Advanced", details: "Websockets, presence service, end to end encryption.", resources: [{ title: "System Design Interview Prep Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+interview+questions+tamil", type: "video" }] }
          ] 
        }
      ],
    },
    { 
      id: "databases", slug: "databases", name: "Databases", 
      description: "Focus on SQL fundamentals and relational design. NoSQL and advanced topics are secondary for most student interviews.", 
      difficulty: "Intermediate", estimatedTime: "2-4 months", icon: "Database", 
      tags: ["SQL", "Relational", "NoSQL", "Optimization"],
      phases: [
        { 
          id: "db-p1", title: "SQL Fundamentals", description: "Core SQL querying", 
          topics: [
            { 
              id: "db-p1-t1", name: "What is a RDBMS", description: "Tables, rows, columns", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Understand relational DB structure.", 
              resources: [
                { title: "SQL Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", type: "video" },
                { title: "SQL Tamil Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=sql+tutorial+tamil+beginners", type: "video" }
              ] 
            },
            { id: "db-p1-t2", name: "CRUD Operations", description: "CREATE, INSERT, UPDATE, DELETE", timeEstimate: "1 week", difficulty: "Beginner", details: "Data manipulation language.", resources: [{ title: "CRUD Operations Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CRUD+Operations+tutorial+interview", type: "video" }] },
            { id: "db-p1-t3", name: "Filters", description: "SELECT with WHERE, ORDER BY, LIMIT", timeEstimate: "1 week", difficulty: "Beginner", details: "Querying specific data.", resources: [{ title: "Filters Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Filters+tutorial+interview", type: "video" }] },
            { id: "db-p1-t4", name: "Aggregate functions", description: "COUNT, SUM, AVG, MIN, MAX", timeEstimate: "1 week", difficulty: "Beginner", details: "Aggregating rows.", resources: [{ title: "SQLZoo – Interactive Practice", url: "https://sqlzoo.net/", type: "tool" }] },
            { id: "db-p1-t5", name: "Grouping", description: "GROUP BY and HAVING", timeEstimate: "1 week", difficulty: "Intermediate", details: "Filtering grouped data.", resources: [{ title: "Grouping Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Grouping+tutorial+interview", type: "video" }] },
            { id: "db-p1-t6", name: "JOINs", description: "INNER, LEFT, RIGHT, FULL OUTER", timeEstimate: "1 week", difficulty: "Intermediate", details: "Combining tables.", resources: [{ title: "JOINs Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=JOINs+tutorial+interview", type: "video" }] },
            { id: "db-p1-t7", name: "Subqueries", description: "Nested SELECT", timeEstimate: "1 week", difficulty: "Intermediate", details: "Queries inside queries.", resources: [{ title: "Subqueries Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Subqueries+tutorial+interview", type: "video" }] },
            { id: "db-p1-t8", name: "Constraints", description: "Primary Key, Foreign Key, Unique, NOT NULL", timeEstimate: "1 week", difficulty: "Intermediate", details: "Enforcing data integrity.", resources: [{ title: "W3Schools SQL", url: "https://www.w3schools.com/sql/", type: "docs" }] }
          ] 
        },
        { 
          id: "db-p2", title: "Database Design & Optimization", description: "Designing efficient schemas", 
          topics: [
            { 
              id: "db-p2-t1", name: "ER Diagrams", description: "Entity-Relationship Diagrams", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Visualizing database architecture.", 
              resources: [
                { title: "Database Design Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc", type: "video" },
                { title: "DBMS Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=database+management+system+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "db-p2-t2", name: "Normalization", description: "1NF, 2NF, 3NF, BCNF", timeEstimate: "1 week", difficulty: "Intermediate", details: "Reducing data redundancy.", resources: [{ title: "Normalization Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Normalization+tutorial+interview", type: "video" }] },
            { id: "db-p2-t3", name: "Indexing", description: "B-Tree, clustered vs non-clustered", timeEstimate: "1 week", difficulty: "Advanced", details: "Speeding up queries.", resources: [{ title: "Indexing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Indexing+tutorial+interview", type: "video" }] },
            { id: "db-p2-t4", name: "Transactions", description: "ACID properties", timeEstimate: "1 week", difficulty: "Advanced", details: "Atomicity, Consistency, Isolation, Durability.", resources: [{ title: "Transactions Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Transactions+tutorial+interview", type: "video" }] },
            { id: "db-p2-t5", name: "Isolation levels", description: "Read Uncommitted to Serializable", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling concurrency issues.", resources: [{ title: "Isolation levels Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Isolation+levels+tutorial+interview", type: "video" }] },
            { id: "db-p2-t6", name: "Views, Procedures, Triggers", description: "Database logic", timeEstimate: "1 week", difficulty: "Advanced", details: "Stored SQL logic.", resources: [{ title: "Views, Procedures, Triggers Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Views%2C+Procedures%2C+Triggers+tutorial+interview", type: "video" }] },
            { id: "db-p2-t7", name: "Query optimization", description: "EXPLAIN ANALYZE", timeEstimate: "1 week", difficulty: "Advanced", details: "Reading query plans.", resources: [{ title: "Use The Index Luke (Indexing Guide)", url: "https://use-the-index-luke.com/", type: "docs" }] },
            { id: "db-p2-t8", name: "Connection pooling", description: "Managing DB connections", timeEstimate: "1 week", difficulty: "Advanced", details: "Reusing persistent connections.", resources: [{ title: "Connection pooling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Connection+pooling+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "db-p3", title: "NoSQL & Real-World Usage", description: "Non-relational concepts", 
          topics: [
            { 
              id: "db-p3-t1", name: "NoSQL types", description: "Document, Key-Value, Column, Graph", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Different architectures for unstructured data.", 
              resources: [
                { title: "MongoDB Crash Course", url: "https://www.youtube.com/watch?v=ofme2o29ngU", type: "video" },
                { title: "NoSQL Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=nosql+mongodb+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "db-p3-t2", name: "MongoDB basics", description: "Documents, collections, CRUD", timeEstimate: "1 week", difficulty: "Intermediate", details: "JSON-like document store.", resources: [{ title: "MongoDB basics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=MongoDB+basics+tutorial+interview", type: "video" }] },
            { id: "db-p3-t3", name: "Redis", description: "Caching, pub/sub, data structures", timeEstimate: "1 week", difficulty: "Advanced", details: "In-memory datastore.", resources: [{ title: "Redis Explained", url: "https://www.youtube.com/watch?v=G1rOthIU-uo", type: "video" }] },
            { id: "db-p3-t4", name: "SQL vs NoSQL", description: "When to choose what", timeEstimate: "1 week", difficulty: "Intermediate", details: "Tradeoffs.", resources: [{ title: "SQL vs NoSQL Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=SQL+vs+NoSQL+tutorial+interview", type: "video" }] },
            { id: "db-p3-t5", name: "Database sharding", description: "Partitioning data", timeEstimate: "1 week", difficulty: "Advanced", details: "Splitting data across nodes.", resources: [{ title: "Database sharding Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Database+sharding+tutorial+interview", type: "video" }] },
            { id: "db-p3-t6", name: "Connecting DB to backend", description: "ORM vs raw queries", timeEstimate: "1 week", difficulty: "Intermediate", details: "Application layer integration.", resources: [{ title: "Connecting DB to backend Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Connecting+DB+to+backend+tutorial+interview", type: "video" }] },
            { id: "db-p3-t7", name: "Migrations", description: "Schema versioning", timeEstimate: "1 week", difficulty: "Advanced", details: "Updating DB structures without losing data.", resources: [{ title: "LeetCode SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", type: "tool" }] }
          ] 
        }
      ],
    },
    { 
      id: "os", slug: "operating-systems", name: "Operating Systems", 
      description: "Essential for systems roles and core CS interviews. Concepts > implementation at this level.", 
      difficulty: "Intermediate", estimatedTime: "2-4 months", icon: "Monitor", 
      tags: ["Linux", "Processes", "Memory", "Concurrency"],
      phases: [
        { 
          id: "os-p1", title: "Foundations", description: "OS Roles and Processes", 
          topics: [
            { 
              id: "os-p1-t1", name: "What is an OS", description: "Role and components", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Understand the kernel vs user space.", 
              resources: [
                { title: "OS Concepts – Neso Academy", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", type: "video" },
                { title: "Operating Systems Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=operating+systems+tamil+tutorial+full+course", type: "video" }
              ] 
            },
            { id: "os-p1-t2", name: "Process vs Thread", description: "Creation and lifecycle", timeEstimate: "1 week", difficulty: "Beginner", details: "Concurrency basics.", resources: [{ title: "Process vs Thread Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Process+vs+Thread+tutorial+interview", type: "video" }] },
            { id: "os-p1-t3", name: "Process states", description: "Ready, running, waiting, terminated", timeEstimate: "1 week", difficulty: "Beginner", details: "Lifecycle models.", resources: [{ title: "Process states Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Process+states+tutorial+interview", type: "video" }] },
            { id: "os-p1-t4", name: "CPU Scheduling", description: "FCFS, SJF, Round Robin, Priority", timeEstimate: "1 week", difficulty: "Intermediate", details: "How OS allocates CPU time.", resources: [{ title: "CPU Scheduling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CPU+Scheduling+tutorial+interview", type: "video" }] },
            { id: "os-p1-t5", name: "Context Switching", description: "Overhead of multiprocessing", timeEstimate: "1 week", difficulty: "Intermediate", details: "Saving and restoring state.", resources: [{ title: "Context Switching Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Context+Switching+tutorial+interview", type: "video" }] },
            { id: "os-p1-t6", name: "System calls", description: "fork, exec, wait", timeEstimate: "1 week", difficulty: "Intermediate", details: "Interfacing with the kernel.", resources: [{ title: "OS Three Easy Pieces (Free Book)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/", type: "docs" }] },
            { id: "os-p1-t7", name: "IPC", description: "Pipes, shared memory, message queues", timeEstimate: "1 week", difficulty: "Advanced", details: "Inter-Process Communication.", resources: [{ title: "IPC Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=IPC+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "os-p2", title: "Memory & Synchronization", description: "Managing resources concurrently", 
          topics: [
            { 
              id: "os-p2-t1", name: "Memory layout", description: "Stack, heap, code, data segments", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Where a program's data lives in RAM.", 
              resources: [
                { title: "Deadlock & Synchronization – Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p", type: "video" },
                { title: "Memory Management Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=memory+management+operating+system+tamil", type: "video" }
              ] 
            },
            { id: "os-p2-t2", name: "Virtual Memory", description: "Paging", timeEstimate: "1 week", difficulty: "Intermediate", details: "Abstracting memory addresses.", resources: [{ title: "Virtual Memory Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Virtual+Memory+tutorial+interview", type: "video" }] },
            { id: "os-p2-t3", name: "Page replacement", description: "LRU, FIFO, Optimal", timeEstimate: "1 week", difficulty: "Intermediate", details: "Algorithms for swap space.", resources: [{ title: "Page replacement Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Page+replacement+tutorial+interview", type: "video" }] },
            { id: "os-p2-t4", name: "Thrashing", description: "Constant page faults", timeEstimate: "1 week", difficulty: "Intermediate", details: "When memory gets too full.", resources: [{ title: "Thrashing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Thrashing+tutorial+interview", type: "video" }] },
            { id: "os-p2-t5", name: "Locks", description: "Mutex, Semaphores, Monitors", timeEstimate: "1 week", difficulty: "Advanced", details: "Synchronization constructs.", resources: [{ title: "Locks Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Locks+tutorial+interview", type: "video" }] },
            { id: "os-p2-t6", name: "Deadlock", description: "Conditions, prevention, detection", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling halting conditions.", resources: [{ title: "Deadlock Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Deadlock+tutorial+interview", type: "video" }] },
            { id: "os-p2-t7", name: "Crises in Concurrency", description: "Race Conditions, Producer-Consumer", timeEstimate: "1 week", difficulty: "Advanced", details: "Critical sections and Classic PC problem / Readers-Writers problem.", resources: [{ title: "OS Three Easy Pieces – Concurrency Chapter", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf", type: "docs" }] }
          ] 
        },
        { 
          id: "os-p3", title: "File Systems & I/O", description: "Permanent storage", 
          topics: [
            { 
              id: "os-p3-t1", name: "File system structure", description: "Inodes, blocks, directories", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "How files are structurally represented.", 
              resources: [
                { title: "File Systems – Hussein Nasser", url: "https://www.youtube.com/watch?v=KN8YgJnShPM", type: "video" },
                { title: "Linux Internals Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=linux+internals+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "os-p3-t2", name: "FAT vs ext4 vs NTFS", description: "FS implementations", timeEstimate: "1 week", difficulty: "Intermediate", details: "Common file systems.", resources: [{ title: "FAT vs ext4 vs NTFS Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=FAT+vs+ext4+vs+NTFS+tutorial+interview", type: "video" }] },
            { id: "os-p3-t3", name: "Disk scheduling", description: "SCAN, SSTF", timeEstimate: "1 week", difficulty: "Advanced", details: "Disk read algorithms.", resources: [{ title: "Disk scheduling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Disk+scheduling+tutorial+interview", type: "video" }] },
            { id: "os-p3-t4", name: "I/O buffering", description: "Caching and buffers", timeEstimate: "1 week", difficulty: "Advanced", details: "I/O interfaces.", resources: [{ title: "I/O buffering Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=I%2FO+buffering+tutorial+interview", type: "video" }] },
            { id: "os-p3-t5", name: "Interrupts and DMA", description: "Hardware I/O processing", timeEstimate: "1 week", difficulty: "Advanced", details: "Direct Memory Access basics.", resources: [{ title: "Interrupts and DMA Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Interrupts+and+DMA+tutorial+interview", type: "video" }] },
            { id: "os-p3-t6", name: "Kernel vs User space", description: "Privilege rings", timeEstimate: "1 week", difficulty: "Advanced", details: "Security isolation.", resources: [{ title: "Kernel vs User space Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Kernel+vs+User+space+tutorial+interview", type: "video" }] },
            { id: "os-p3-t7", name: "Linux internals basics", description: "/proc, signals", timeEstimate: "1 week", difficulty: "Advanced", details: "Practical linux mechanisms.", resources: [{ title: "Linux Command Line (Free Book)", url: "https://linuxcommand.org/tlcl.php", type: "docs" }] }
          ] 
        }
      ]
    }
  ],
};

export const emergingDomain: Domain = {
  id: "emerging", slug: "emerging-tech", name: "Emerging Tech",
  description: "Explore cutting-edge technologies — blockchain, game dev, AR/VR, and IoT.",
  icon: "Rocket", color: "#fb923c",
  subPaths: [
    { 
      id: "blockchain", slug: "blockchain", name: "Blockchain & Web3", 
      description: "Decentralized apps, smart contracts, and cryptography.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Link", 
      tags: ["Solidity", "Ethereum", "DeFi"],
      phases: [
        { 
          id: "bc-p1", title: "Web3 Basics", description: "Blockchain foundations", 
          topics: [
            { 
              id: "bc-t1", name: "Blockchain Fundamentals", description: "How blockchains work", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Consensus mechanisms (PoW, PoS), hashing, public/private keys, wallets, and transactions.", 
              resources: [
                { title: "Blockchain Demo", url: "https://andersbrownworth.com/blockchain/", type: "tool" },
                { title: "Ethereum Docs: Introduction", url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/", type: "docs" }
              ] 
            },
            {
              id: "bc-t2", name: "Smart Contracts", description: "Programming the chain", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Writing Solidity contracts, compilation, deployment using Hardhat/Foundry, and interacting with Web3.js / Ethers.js.",
              resources: [
                { title: "CryptoZombies (Learn Solidity)", url: "https://cryptozombies.io/", type: "course" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "game-dev", slug: "game-development", name: "Game Development", 
      description: "Create interactive 2D and 3D games with Unity, Unreal, or Godot.", 
      difficulty: "Intermediate", estimatedTime: "6-10 months", icon: "Gamepad2", 
      tags: ["Unity", "C#", "Game Design"],
      phases: [
        { 
          id: "gd-p1", title: "Engine & Prototyping", description: "Getting something on screen", 
          topics: [
            { 
              id: "gd-t1", name: "Unity & C# Scripting", description: "The industry standard", timeEstimate: "4 weeks", difficulty: "Beginner", 
              details: "Navigating the Unity editor, GameObjects, Prefabs, physics components, and writing C# behavior scripts.", 
              resources: [
                { title: "Unity Learn Pathway", url: "https://learn.unity.com/pathway/unity-essentials", type: "course" },
                { title: "Brackeys: How to make a game", url: "https://www.youtube.com/watch?v=IlKaB1etrik", type: "video" }
              ] 
            },
            {
              id: "gd-t2", name: "Game Mathematics", description: "Moving objects", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Vectors, quaternions for rotation, raycasting, and collision detection math.",
              resources: [
                { title: "Math for Game Devs", url: "https://www.youtube.com/watch?v=mHnFf7ZusJ8&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My", type: "video" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "ar-vr", slug: "ar-vr", name: "AR / VR", 
      description: "Build immersive augmented and virtual reality experiences.", 
      difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Glasses", 
      tags: ["Unity XR", "Spatial Computing"],
      phases: [
        { 
          id: "ar-p1", title: "XR Basics", description: "Immersive development", 
          topics: [
            { 
              id: "ar-t1", name: "Spatial Computing", description: "Interacting in 3D", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Head tracking, controllers, hand tracking, locomotion (teleportation vs continuous), and UI in world space.", 
              resources: [
                { title: "Unity XR Interaction Toolkit", url: "https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/index.html", type: "docs" },
                { title: "Valem XR Tutorials", url: "https://www.youtube.com/c/valem", type: "video" }
              ] 
            }
          ] 
        }
      ],
    }
  ],
};

export const careerDomain: Domain = {
  id: "career", slug: "career-paths", name: "Career & Soft Skills",
  description: "Guides on breaking in, acing interviews, open source, and freelancing.",
  icon: "Briefcase", color: "#e879f9",
  subPaths: [
    { 
      id: "opensource", slug: "open-source", name: "Open Source Contribution", 
      description: "Learn how to contribute to massive open source projects effectively.", 
      difficulty: "Beginner", estimatedTime: "1-3 months", icon: "GitPullRequest", 
      tags: ["Git", "Community", "Portfolio"],
      phases: [
        { 
          id: "oss-p1", title: "Getting Started", description: "Your first PR", 
          topics: [
            { 
              id: "oss-t1", name: "Finding & Evaluating Projects", description: "Where to start", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Searching for 'good first issues', understanding CONTRIBUTING.md files, and communicating with maintainers.", 
              resources: [
                { title: "First Contributions Repository", url: "https://github.com/firstcontributions/first-contributions", type: "tool" },
                { title: "Open Source Guide", url: "https://opensource.guide/how-to-contribute/", type: "article" }
              ] 
            }
          ] 
        }
      ],
    },
    { 
      id: "interview", slug: "interview-prep", name: "Interview Prep (FAANG)", 
      description: "Crack the grueling coding and behavioral interviews at top tech companies.", 
      difficulty: "Intermediate", estimatedTime: "3-6 months", icon: "Target", 
      tags: ["Problem Solving", "STAR Method"],
      phases: [
        { 
          id: "int-p1", title: "Interview Strategy", description: "The game plan", 
          topics: [
            { 
              id: "int-t1", name: "Algorithmic Patterns", description: "Don't memorize, internalize", timeEstimate: "6 weeks", difficulty: "Intermediate", 
              details: "Mastering the 15 core patterns (Sliding Window, Two Pointers, Fast & Slow pointers, Merge Intervals).", 
              resources: [
                { title: "Grokking the Coding Interview", url: "https://www.designgurus.io/course/grokking-the-coding-interview", type: "course" },
                { title: "NeetCode 150", url: "https://neetcode.io/practice", type: "tool" }
              ] 
            },
            {
              id: "int-t2", name: "Behavioral Interviews", description: "The STAR format", timeEstimate: "1 week", difficulty: "Beginner",
              details: "Situation, Task, Action, Result. Formulating stories about conflict, failure, and leadership.",
              resources: [
                { title: "Amazon Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", type: "article" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "freelance", slug: "freelancing", name: "Freelancing & Contract Work", 
      description: "Build a career as an independent developer or digital nomad.", 
      difficulty: "Beginner", estimatedTime: "2-4 months", icon: "Laptop", 
      tags: ["Portfolio", "Clients", "Business"],
      phases: [
        { 
          id: "fr-p1", title: "Independent Business", description: "Becoming a solo dev", 
          topics: [
            { 
              id: "fr-t1", name: "Positioning & Portfolio", description: "Getting clients", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Finding a niche, building case studies instead of toy projects, outreach, and writing proposals. Setting up LLCs and invoicing.", 
              resources: [
                { title: "Freelance Developer Guide", url: "https://daily.dev/blog/the-ultimate-guide-to-freelance-software-development", type: "article" },
                { title: "Pricing Frameworks", url: "https://medium.com/@swizec/hourly-billing-is-a-bad-idea-2d6db0ef6998", type: "article" }
              ] 
            }
          ] 
        }
      ],
    }
  ],
};
