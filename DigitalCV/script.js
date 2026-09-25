const messages = {
  Experience: `<h1><span class="job-title">Security Specialist </span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">January 2024 - August 2026</span>

#Overseeing end-to-end incident response activities, including documentation, investigation, resolution, reporting, and remediation processes. 

#Providing IT security expertise and engineering support for projects and initiatives, primarily involving the procurement and implementation of medical applications and devices.

#Conducting penetration testing and security assessments of desktop applications and systems in accordance with OWASP Top 10 guidelines.

#Leading the development and management of ICT security incident handling procedures, in compliance with the Polish National Cybersecurity System Act. 

#Performing continuous security monitoring, alert analysis, incident triage, and threat investigation to identify and respond to potential cybersecurity risks with.
  
      <h1><span class="job-title">Intern - IT Office</span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">July 2023 - December 2024.</span>

#Providing first-line technical support as part of the Service Desk team.

#Working with medical IT systems and applications.

#Completing training in computer networking and cybersecurity.

#Developing basic frontend projects and web interfaces.


              <h1><span class="job-title">Salesperson</span></h1>
   <span class="timeOrg">Trespass</span>
   <span class="timeOrg">June 2022 – June 2023.</span>

#Worked in retail sales, providing customer service, meeting sales targets, and managing store transactions

        
    `,
  Environments: `<h1><span class="job-title">Environments</span></h1>
        I specialize in gray box web application penetration testing using tools like Burp Suite, Metasploit, and Nmap. Following a logical pentesting workflow, including Reconnaissance & Information Gathering, Scanning & Vulnerability Detection, Exploitation & Attack, Password Cracking & Authentication Attacks, Post-Exploitation & Further Enumeration, and Reporting & Documentation. Assesing vulnerabilities in accordance with the CVSS standard, focusing on the most critical security risks to web applications as outlined in the OWASP Top 10 standard awareness document.
    `,
  Skills: `<h1><span class="job-title">Skills</span></h1>
        Currently, I perform a leading role in identifying, analyzing, mitigating, and preventing security threats and incidents. Most of my work regarding incident response (IR) focuses on monitoring security alerts, logs, and network traffic for potential threats, investigating security incidents, creating detailed incident reports, timelines, and recommendations for future prevention, and conducting post-mortem reviews to improve incident response strategies. These tasks are a part of Incident Reporting & Documentation. I am familiar with security tools such as EDR, SIEM, and Forensics & Malware Analysis tools.
        
        
    `,
  about: `<h1><span class="job-title">About Me</span></h1>
       I am a collaborative and team-oriented person who truly values working with others. Brainstorming is one of my favorite ways of approaching teamwork, as I enjoy exchanging ideas, learning from others, and contributing to finding effective solutions.

I prefer to work in an organized and structured way, with a strong focus on prioritization, completing tasks, and maintaining a high standard of quality. Rather than starting multiple tasks at once and leaving them unfinished, I prefer to focus on one task at a time, make sure it is completed properly, and then move on to the next one.

I also place great importance on a positive working atmosphere and building good relationships with my colleagues. I believe that a supportive and respectful environment makes collaboration more effective and makes everyday work more enjoyable.

IT and cybersecurity are among my main interests. In my free time, I continuously develop my knowledge through self-study, with a particular focus on areas of cybersecurity that differ from my professional responsibilities. I believe that maintaining a balance between professional work and personal interests helps me keep my passion for technology fresh and enjoyable.

I am looking to further develop my career on the technical side while also leveraging and expanding my existing technical background. I continuously work on developing my skills through self-study and enjoy participating in IT and cybersecurity events, which allows me to stay up to date with the latest developments and trends in the industry.

                                                 ฅ^._.^ฅ      
                                                                           
    `,
};

function showMessage(key) {
  document.getElementById("screen").innerHTML =
    messages[key] || "<p>No content available.</p>";
}
