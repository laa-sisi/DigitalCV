const messages = {
  experience: `<h1><span class="job-title">Security Process Service Specialist</span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">January 2024 - currently.</span>

#Performing penetration tests of applications and systems.
#Performing a leading role for the analysis of security incidents
#Support in the field of IT security for projects and initiatives
#Support in the processes of creating security standards
#Analysis, verification, creation of procedures within the supported processes
  
      <h1><span class="job-title">Intern - IT Office</span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">July 2023 - December 2024.</span>

#Service Desk I Line
#Working with medical systems
#Computer network training
#Cybersecurity training
#Creating a frontend for simple projects

              <h1><span class="job-title">Salesperson</span></h1>
   <span class="timeOrg">Trespass</span>
   <span class="timeOrg">June 2022 – June 2023.</span>

#Worked in retail sales, providing customer service, meeting sales targets, and managing store transactions

        
    `,
  pentesting: `<h1><span class="job-title">Security Testing</span></h1>
        I specialize in gray box web application penetration testing using tools like Burp Suite, Metasploit, and Nmap. Following a logical pentesting workflow, including Reconnaissance & Information Gathering, Scanning & Vulnerability Detection, Exploitation & Attack, Password Cracking & Authentication Attacks, Post-Exploitation & Further Enumeration, and Reporting & Documentation. Assesing vulnerabilities in accordance with the CVSS standard, focusing on the most critical security risks to web applications as outlined in the OWASP Top 10 standard awareness document.
    `,
  incident: `<h1><span class="job-title">Incident Response</span></h1>
        Currently, I perform a leading role in identifying, analyzing, mitigating, and preventing security threats and incidents. Most of my work regarding incident response (IR) focuses on monitoring security alerts, logs, and network traffic for potential threats, investigating security incidents, creating detailed incident reports, timelines, and recommendations for future prevention, and conducting post-mortem reviews to improve incident response strategies. These tasks are a part of Incident Reporting & Documentation. I am familiar with security tools such as EDR, SIEM, and Forensics & Malware Analysis tools.
        
        
    `,
  about: `<h1><span class="job-title">About Me</span></h1>
        Fairly new to the industry, my journey with computer science started later than most, as I had little to no knowledge of the field before university. My first intuitive choice for a specialization was networking, and to this day, I dream of combining my passion for space and networking at NASA's Deep Space Network communications facilities.

Currently, I am working on my Engineering Thesis, analyzing the role and methods of a Red Team in enhancing an organization's security. I recognize the importance of continuous skill development in this ever-evolving field and actively pursue certifications and exams to stay ahead.

I value open and direct communication, believing that clarity and collaboration are key to success in cybersecurity.
                                                 ฅ^._.^ฅ      
                                                                           
    `,
};

function showMessage(key) {
  document.getElementById("screen").innerHTML =
    messages[key] || "<p>No content available.</p>";
}
