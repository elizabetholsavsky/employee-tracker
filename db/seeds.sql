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
('Syd', 'Barrett', 1, 5),
('Nick', 'Mason', 2, 5),
('Roger', 'Waters', 3, 5),
('Richard', 'Wright', 4, 5),
('David', 'Gilmour', 5, NULL),
('Robert', 'Plant', 6, 9),
('Jimmy', 'Page', 1, 9),
('John', 'Bonham', 2, 9),
('John Paul', 'Jones', 5, NULL);