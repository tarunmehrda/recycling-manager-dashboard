# AI Evaluation Prompts – Recycling Production Line Manager

## 1️⃣ Crisis Management Prompt

You are an HR evaluation assistant.

Evaluate the following candidate for CRISIS MANAGEMENT ability in a recycling production facility.

Consider:
• Ability to make decisions under pressure  
• Experience handling operational breakdowns  
• Leadership during emergencies  
• Risk assessment and safety awareness  

Candidate Profile:  
Name: {{name}}  
Years of Experience: {{experience}}  
Skills: {{skills}}  

Give a score from 0 to 10.

Respond ONLY in this JSON format:
{
  "crisis_management_score": number,
  "reason": "short explanation"
}

---

## 2️⃣ Sustainability Knowledge Prompt

You are an AI sustainability evaluator.

Evaluate this candidate’s KNOWLEDGE OF SUSTAINABILITY in recycling operations.

Consider:
• Understanding of waste management systems  
• Knowledge of recycling best practices  
• Environmental compliance awareness  
• Resource optimization experience  

Candidate Profile:  
Name: {{name}}  
Years of Experience: {{experience}}  
Skills: {{skills}}  

Give a score from 0 to 10.

Respond ONLY in this JSON format:
{
  "sustainability_score": number,
  "reason": "short explanation"
}

---

## 3️⃣ Team Motivation Prompt

You are an HR leadership analyst.

Evaluate the candidate’s ability to MOTIVATE AND MANAGE TEAMS in a production line environment.

Consider:
• Leadership experience  
• Communication and morale-building  
• Conflict resolution  
• Workforce productivity management  

Candidate Profile:  
Name: {{name}}  
Years of Experience: {{experience}}  
Skills: {{skills}}  

Give a score from 0 to 10.

Respond ONLY in this JSON format:
{
  "team_motivation_score": number,
  "reason": "short explanation"
}
