INSERT INTO department (name)
VALUES 
('Production'), 
('Operations'), 
('Legal'), 
('Information Technology'), 
('Management'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Engineer', 100000, 1), 
('Accountant', 90000, 2), 
('Lawyer', 90000, 3), 
('IT Specialist', 70000, 4), 
('Project Manager', 120000, 5), 
('Sales', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Syd', 'Barrett', 1, NULL),
('Nick', 'Mason', 2, NULL),
('Roger', 'Waters', 3, NULL),
('Richard', 'Wright', 4, NULL),
('David', 'Gilmour', 5, 5),
('Robert', 'Plant', 6, NULL),
('Jimmy', 'Page', 1, NULL),
('John', 'Bonham', 2, NULL),
('John Paul', 'Jones', 5, 9);