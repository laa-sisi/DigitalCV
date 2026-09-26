const messages = {
  Experience: `<h1><span class="job-title">Security Specialist </span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">January 2024 - August 2026</span>

#Overseeing end-to-end incident response activities, including documentation, investigation, resolution, reporting, and remediation processes. 

#Providing IT security expertise and engineering support for projects and initiatives, primarily involving the procurement and implementation of medical applications and devices.

#Conducting penetration testing and security assessments of desktop applications and systems in accordance with OWASP Top 10 guidelines.

#Leading the development and management of ICT security incident handling procedures, in compliance with the Polish National Cybersecurity System Act. 

#Performing continuous security monitoring, alert analysis, incident triage, and threat investigation to identify and respond to potential cybersecurity risks
  
      <h1><span class="job-title">Intern - IT Office</span></h1>
   <span class="timeOrg">PZU Zdrowie.</span>
   <span class="timeOrg">July 2023 - December 2024.</span>

#Providing first-line technical support as part of the Service Desk team.

#Working with medical IT systems and applications.

#Completing training in computer networking and cybersecurity.

#Developing basic frontend projects and web interfaces.


              <h1><span class="job-title">Salesperson</span></h1>
   <span class="timeOrg">Trespass.</span>
   <span class="timeOrg">June 2022 – June 2023.</span>

#Worked in retail sales, providing customer service, meeting sales targets, and managing store transactions.

        
    `,
  Environments: `<h1><span class="job-title">Environments</span></h1>
#Wireshark

#Nmap

#Network reconnaissance

#Burp Suite

#OWASP ZAP

#MobSF

#Metasploit

#Linux

#Windows

#Shodan

#MojeCert

#Microsoft Office

#Microsoft Teams

#SharePoint

#OneDrive / Google Drive

#Ticketing Systems
    `,
  Skills: `<h1><span class="job-title">Skills</span></h1>
#OSINT 

#Passive Reconnaissance

#Active Reconnaissance

#Threat Intelligence Gathering

#Attack Surface Analysis

#Service & Network Enumeration

#Vulnerability Identification

#Traffic Analysis

#Desktop Application Testing

#Google Dorks

#Active Directory Basics

#Teamwork & Communication Skills

#Procedure Writing
        
        
    `,
  about: `<h1><span class="job-title">About Me</span></h1>

       I am a collaborative and team-oriented person who truly values working with others. Brainstorming is one of my favorite ways of approaching teamwork, as I enjoy exchanging ideas, learning from others, and contributing to finding effective solutions.

Personally I prefer to work in an organized and structured way, with a strong focus on prioritization, completing tasks, and maintaining a high standard of quality. Rather than starting multiple tasks at once and leaving them unfinished, I prefer to focus on one task at a time, make sure it is completed properly, and then move on to the next one.

I also place great importance on a positive working atmosphere and building good relationships with my colleagues. I believe that a supportive and respectful environment makes collaboration more effective and makes everyday work more enjoyable.

IT and cybersecurity are among my main interests. In my free time, I continuously develop my knowledge through self-study, with a particular focus on areas of cybersecurity that differ from my professional responsibilities. I believe that maintaining a balance between professional work and personal interests helps me keep my passion for technology fresh and enjoyable.

I grew up in a bilingual household, which has allowed me to develop strong communication skills in both Polish and English. I am comfortable communicating in both languages verbally, and I am able to adapt my communication style to different audiences and situations.

I am looking to further develop my career on the technical side while also leveraging and expanding my existing technical background. I continuously work on developing my skills through self-study and enjoy participating in IT and cybersecurity events, which allows me to stay up to date with the latest developments and trends in the industry.

You can find me on tryhackme at <a class="profile-link" href="https://tryhackme.com/p/olacola" target="_blank" rel="noopener noreferrer">https://tryhackme.com/p/olacola</a>.
As well as on github under <a class="profile-link" href="https://github.com/laa-sisi" target="_blank" rel="noopener noreferrer">https://github.com/laa-sisi</a>.

                                                 ฅ^._.^ฅ      
                                                                           
    `,
};

function showMessage(key) {
  document.getElementById("screen").innerHTML =
    messages[key] || "<p>No content available.</p>";
}
