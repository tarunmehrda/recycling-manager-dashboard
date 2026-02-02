const { faker } = require('@faker-js/faker');
const fs = require('fs');

const skillsPool = [
  "Lean Manufacturing",
  "Waste Management",
  "Process Optimization",
  "Team Leadership",
  "Safety Compliance",
  "Six Sigma",
  "Recycling Systems",
  "Inventory Control",
  "Machine Operations",
  "Quality Assurance",
  "Environmental Regulations",
  "Logistics Coordination"
];

const certifications = [
  "ISO 14001",
  "Six Sigma Green Belt",
  "OSHA Safety",
  "Lean Expert",
  "Supply Chain Pro"
];

let sql = "INSERT INTO candidates (name, experience, skills) VALUES\n";

for (let i = 0; i < 40; i++) {
  const name = faker.person.fullName().replace(/'/g, "''");
  const experience = faker.number.int({ min: 2, max: 15 });

  const skills = faker.helpers.arrayElements(
    skillsPool,
    faker.number.int({ min: 3, max: 6 })
  );

  const cert = faker.helpers.arrayElement(certifications);
  skills.push(cert);

  sql += `('${name}', ${experience}, '${JSON.stringify(skills)}')`;
  sql += i < 39 ? ",\n" : ";\n";
}

fs.writeFileSync("sample_candidates.sql", sql);
console.log("✅ 40 Candidates Generated -> sample_candidates.sql");
