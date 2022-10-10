/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `users` (
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `designation` varchar(150) NOT NULL,
  `dob` date DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `user_id` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`first_name`, `last_name`, `email`, `designation`, `dob`, `active`, `user_id`) VALUES
('Jonh', 'Smith', 'john@gmail.com', 'DEV QA', '2022-05-05', 1, '7857');
INSERT INTO `users` (`first_name`, `last_name`, `email`, `designation`, `dob`, `active`, `user_id`) VALUES
('Pavan', 'S', 'Pavan@gmail.com', 'SE', '2022-04-04', 2, '2589');
INSERT INTO `users` (`first_name`, `last_name`, `email`, `designation`, `dob`, `active`, `user_id`) VALUES
('Peter', ' John', 'peter@gmail.com', 'QA', '2022-09-01', 1, '5858');
INSERT INTO `users` (`first_name`, `last_name`, `email`, `designation`, `dob`, `active`, `user_id`) VALUES
('David', ' Richard', 'david@gmail.com', 'PM', '2022-09-01', 2, '5860'),
('Abisek', 'K S', 'abisek@abisek.com', 'SE', '2022-10-20', 1, '6000');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;