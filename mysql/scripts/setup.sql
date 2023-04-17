CREATE TABLE `users` (
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `designation` varchar(150) NOT NULL,
  `dob` date DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `user_id` varchar(150) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`first_name`, `last_name`, `email`, `designation`, `dob`, `active`, `user_id`) VALUES
('Jonh', 'Smith', 'john@gmail.com', 'DEV QA', '2022-05-05', 1, '7857'),
('Pavan', 'S', 'Pavan@gmail.com', 'SE', '2022-04-04', 0, '2589'),
('Peter', ' John', 'peter@gmail.com', 'QA', '2022-09-01', 1, '5858'),
('David', ' Richard', 'david@gmail.com', 'PM', '2022-09-01', 0, '5860'),
('Abisek', 'K S', 'abisek@abisek.com', 'SE', '2022-10-20', 1, '6000');

CREATE TABLE `companies` (
  `COMPANY_ID` varchar(150) NOT NULL,
  `COMPANY_NAME` varchar(150) NOT NULL,
  `COORDINATES` varchar(150) NOT NULL,
  `users` varchar(255) DEFAULT NULL,
  `ADDRESS` varchar(255) NOT NULL DEFAULT 'NULL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `companies` (`COMPANY_ID`, `COMPANY_NAME`, `COORDINATES`, `users`, `ADDRESS`) VALUES
('S78547', 'SAMSUNG', '2.2426, 53.4808', '[\"7889\", \"5846\" ]', '31, Ram street, Chennai-600128'),
('M98954', 'MOTOROLA', '10.2426, 60.4808', '[\"7889\",\"5846\",\"2949\",\"9998\"]', '841, Sivan street, Chennai-657857'),
('R65954', 'REDMI', '20.2426, 53.4808', '[\"8575\",\"5544\",\"7458\"]', '235, North street, Chennai-682701'),
('RT785D55', 'Tesla', '10.2426, 40.4808', '[\"7889\"]', '45WE, Besar street, Mumbai-698247'),
('I7878', 'Facebook', '5.2426, 45.4808', '[\"7889\", \"5846\" ]', '33, Main street, Bangalore-501245'),
('F87182S', ' APPLE', '28.6517178,77.2219388', '[\"7848\" ]', '985, South street, Nepal-857425'),
('HT8548D', 'Vivo', '28.6517178,77.2219388', '[\"9415\",\"4818\"]', '65AQ, Besar street, Mumbai-698247'),
('MY874598', ' Xiomi', '5.2426, 45.4808', '[\"8488\"]', 'TE78, West street, Chennai-600258'),
('BH874598', ' Volvo ', '5.2426, 55.4808', '[\"5846\"]', 'MK78, North street, Chennai-704589');
