-- Recycling Production Manager Dashboard - Database Schema

-- Candidates table
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    experience INT NOT NULL,
    skills JSON,
    crisis_score DECIMAL(3,2) DEFAULT 0.00,
    sustainability_score DECIMAL(3,2) DEFAULT 0.00,
    motivation_score DECIMAL(3,2) DEFAULT 0.00,
    total_score DECIMAL(4,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Evaluations table
CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    evaluator_id VARCHAR(100) NOT NULL,
    evaluation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    crisis_score DECIMAL(3,2) NOT NULL,
    sustainability_score DECIMAL(3,2) NOT NULL,
    motivation_score DECIMAL(3,2) NOT NULL,
    notes TEXT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

-- Rankings table
CREATE TABLE rankings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    rank_position INT NOT NULL,
    total_score DECIMAL(4,2) NOT NULL,
    ranking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

-- Trigger to update total score when individual scores change
DELIMITER //
CREATE TRIGGER update_total_score 
BEFORE UPDATE ON candidates
FOR EACH ROW
BEGIN
    SET NEW.total_score = ROUND((NEW.crisis_score + NEW.sustainability_score + NEW.motivation_score), 2);
END//
DELIMITER ;

-- Stored procedure to update rankings
DELIMITER //
CREATE PROCEDURE UpdateRankings()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE candidate_id_var INT;
    DECLARE total_score_var DECIMAL(4,2);
    DECLARE rank_counter INT DEFAULT 1;
    
    -- Clear existing rankings
    DELETE FROM rankings;
    
    -- Declare cursor for candidates ordered by total score
    DECLARE candidate_cursor CURSOR FOR 
        SELECT id, total_score 
        FROM candidates 
        ORDER BY total_score DESC, name ASC;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN candidate_cursor;
    
    read_loop: LOOP
        FETCH candidate_cursor INTO candidate_id_var, total_score_var;
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        INSERT INTO rankings (candidate_id, rank_position, total_score) 
        VALUES (candidate_id_var, rank_counter, total_score_var);
        
        SET rank_counter = rank_counter + 1;
    END LOOP;
    
    CLOSE candidate_cursor;
END//
DELIMITER ;