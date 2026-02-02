-- Sample data for Recycling Production Manager Dashboard

-- Insert 40 candidates with realistic names and skills
INSERT INTO candidates (name, experience, skills, crisis_score, sustainability_score, motivation_score) VALUES
('Fredrick Wunsch', 7, '["Inventory Control","Lean Manufacturing","Environmental Regulations","Recycling Systems","Six Sigma","Logistics Coordination","OSHA Safety"]', 8.7, 6.5, 8.6),
('Tasha Jones', 5, '["Recycling Systems","Quality Assurance","Lean Manufacturing","Inventory Control","Six Sigma","ISO 14001"]', 9.3, 6.8, 7.9),
('Joy Strosin', 7, '["Process Optimization","Quality Assurance","Logistics Coordination","Inventory Control","ISO 14001"]', 9.1, 8.0, 6.5),
('Dr. Fernando Ernser', 2, '["Quality Assurance","Lean Manufacturing","Inventory Control","Supply Chain Pro"]', 6.5, 6.9, 9.0),
('Victor Conroy', 6, '["Logistics Coordination","Waste Management","Lean Manufacturing","Quality Assurance","Supply Chain Pro"]', 6.6, 7.8, 9.1),
('Sharon Friesen', 14, '["Team Leadership","Inventory Control","Environmental Regulations","Process Optimization","Logistics Coordination","Lean Expert"]', 8.2, 7.8, 8.2),
('Eloise Pagac', 10, '["Six Sigma","Team Leadership","Machine Operations","Recycling Systems","Lean Expert"]', 7.6, 7.3, 8.0),
('Adrienne Grady Sr.', 4, '["Process Optimization","Team Leadership","Six Sigma","Lean Manufacturing","ISO 14001"]', 8.0, 9.8, 7.0),
('Alexis Runolfsson', 11, '["Safety Compliance","Environmental Regulations","Lean Manufacturing","Six Sigma","Process Optimization","Recycling Systems","Supply Chain Pro"]', 7.5, 6.8, 9.5),
('Greg Toy DDS', 3, '["Logistics Coordination","Quality Assurance","Environmental Regulations","Machine Operations","Team Leadership","Inventory Control","Lean Expert"]', 9.1, 7.0, 9.7),
('Jared Dickinson', 3, '["Team Leadership","Safety Compliance","Machine Operations","Lean Manufacturing","Six Sigma","ISO 14001"]', 9.6, 8.7, 8.8),
('Mr. Fredrick Littel', 14, '["Waste Management","Process Optimization","Team Leadership","Inventory Control","Environmental Regulations","Lean Expert"]', 7.8, 6.6, 7.8),
('Lila Farrell', 9, '["Safety Compliance","Environmental Regulations","Recycling Systems","Quality Assurance","Process Optimization","ISO 14001"]', 8.9, 7.3, 7.7),
('Leigh Beatty', 11, '["Process Optimization","Logistics Coordination","Waste Management","Quality Assurance","Machine Operations","Six Sigma"]', 6.7, 8.4, 7.9),
('Laurence Heaney', 2, '["Machine Operations","Quality Assurance","Lean Manufacturing","Inventory Control","Recycling Systems","Waste Management"]', 8.4, 8.1, 9.4),
('Jamie Lehner', 14, '["Team Leadership","Environmental Regulations","Logistics Coordination","Machine Operations","Process Optimization","ISO 14001"]', 8.7, 9.4, 6.9),
('Emanuel Hills Jr.', 8, '["Quality Assurance","Process Optimization","Machine Operations","Waste Management","Lean Manufacturing","Six Sigma"]', 8.1, 10.0, 7.6),
('Irene Hodkiewicz', 5, '["Safety Compliance","Machine Operations","Waste Management","Quality Assurance","Environmental Regulations","Recycling Systems"]', 6.2, 9.9, 8.9),
('Debbie Pfeffer', 10, '["Team Leadership","Inventory Control","Process Optimization","Environmental Regulations","Supply Chain Pro"]', 9.0, 8.2, 8.0),
('Dr. Jimmie Price', 7, '["Safety Compliance","Environmental Regulations","Recycling Systems","Quality Assurance","Process Optimization","Lean Manufacturing"]', 9.5, 9.5, 9.1),
('Julian DuBuque', 4, '["Waste Management","Safety Compliance","Inventory Control","Logistics Coordination","Machine Operations","Quality Assurance","OSHA Safety"]', 7.1, 6.1, 7.0),
('Dixie Klocko', 3, '["Logistics Coordination","Machine Operations","Lean Manufacturing","Quality Assurance","Process Optimization","Six Sigma Green Belt"]', 7.0, 8.0, 8.9),
('Emmett Mosciski', 5, '["Quality Assurance","Process Optimization","Waste Management","Safety Compliance","Lean Expert"]', 6.4, 7.2, 6.8),
('Gina Satterfield-Glover', 3, '["Environmental Regulations","Recycling Systems","Lean Manufacturing","Process Optimization","Lean Expert"]', 6.4, 9.8, 7.7),
('Ernesto Stark', 9, '["Logistics Coordination","Environmental Regulations","Lean Manufacturing","Six Sigma","Waste Management","ISO 14001"]', 7.1, 6.5, 9.3),
('Edward Schmeler', 9, '["Waste Management","Six Sigma","Inventory Control","Team Leadership","Machine Operations","OSHA Safety"]', 8.9, 6.6, 8.1),
('Dr. Willard Hansen', 13, '["Inventory Control","Machine Operations","Logistics Coordination","Environmental Regulations","Lean Manufacturing","Supply Chain Pro"]', 6.8, 7.7, 8.2),
('Verna Murphy', 10, '["Quality Assurance","Recycling Systems","Team Leadership","Supply Chain Pro"]', 8.0, 9.3, 8.5),
('Kristine Baumbach', 6, '["Team Leadership","Inventory Control","Process Optimization","Environmental Regulations","Supply Chain Pro"]', 8.6, 7.7, 6.4),
('Evelyn Jacobson', 15, '["Safety Compliance","Machine Operations","Waste Management","Inventory Control","Environmental Regulations","Team Leadership","Supply Chain Pro"]', 6.8, 9.1, 7.2),
('Rachael Jacobi', 8, '["Process Optimization","Waste Management","Machine Operations","Quality Assurance","Safety Compliance","Lean Manufacturing"]', 6.6, 9.2, 8.5),
('Joe Murray', 10, '["Team Leadership","Inventory Control","Quality Assurance","Process Optimization","Environmental Regulations","Lean Manufacturing"]', 8.7, 8.0, 7.9),
('Della Boehm', 13, '["Machine Operations","Waste Management","Logistics Coordination","Quality Assurance","Process Optimization","Six Sigma"]', 9.6, 6.5, 9.3),
('Patti Ziemann-Dickinson', 6, '["Safety Compliance","Environmental Regulations","Recycling Systems","Quality Assurance","Process Optimization","Lean Manufacturing"]', 9.3, 8.7, 9.5),
('Ms. Lynda Kub-Dickens', 15, '["Team Leadership","Inventory Control","Process Optimization","Environmental Regulations","Supply Chain Pro"]', 7.3, 6.2, 7.2),
('Shawna Padberg', 5, '["Quality Assurance","Process Optimization","Waste Management","Safety Compliance","Lean Manufacturing","Six Sigma"]', 7.1, 7.9, 8.1),
('Al Huels III', 6, '["Machine Operations","Waste Management","Logistics Coordination","Quality Assurance","Process Optimization","Lean Manufacturing"]', 6.9, 8.3, 6.6),
('Rachel Lebsack', 15, '["Safety Compliance","Machine Operations","Waste Management","Inventory Control","Environmental Regulations","Team Leadership"]', 6.1, 8.7, 7.1),
('Willie Beahan', 9, '["Process Optimization","Waste Management","Machine Operations","Quality Assurance","Safety Compliance","Six Sigma"]', 7.5, 6.1, 9.9),
('Dr. Dwight Bergnaum', 14, '["Team Leadership","Environmental Regulations","Logistics Coordination","Machine Operations","Process Optimization","ISO 14001"]', 9.1, 6.2, 9.4);

-- Insert sample evaluations
INSERT INTO evaluations (candidate_id, evaluator_id, crisis_score, sustainability_score, motivation_score, notes) VALUES
(1, 'evaluator_001', 8.7, 6.5, 8.6, 'Strong crisis management skills with good sustainability knowledge'),
(2, 'evaluator_001', 9.3, 6.8, 7.9, 'Excellent crisis management but needs sustainability improvement'),
(3, 'evaluator_002', 9.1, 8.0, 6.5, 'Good overall performance with strong crisis handling'),
(4, 'evaluator_002', 6.5, 6.9, 9.0, 'Great motivation but needs crisis management training'),
(5, 'evaluator_003', 6.6, 7.8, 9.1, 'Highly motivated with decent sustainability knowledge');

-- Generate initial rankings based on total scores
CALL UpdateRankings();