/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `companies` (
  `COMPANY_ID` varchar(150) NOT NULL,
  `COMPANY_NAME` varchar(150) NOT NULL,
  `COORDINATES` varchar(150) NOT NULL,
  `users` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `companies` (`COMPANY_ID`, `COMPANY_NAME`, `COORDINATES`, `users`) VALUES
('S78547', 'SAMSUNG', '2.2426, 53.4808', '[\"7889\", \"5846\" ]');
INSERT INTO `companies` (`COMPANY_ID`, `COMPANY_NAME`, `COORDINATES`, `users`) VALUES
('M98954', 'MOTOROLA', '10.2426, 60.4808', '[\"7889\", \"5846\" ,\"2949\",\"9998\",\"9659\",\"9380\"]');
INSERT INTO `companies` (`COMPANY_ID`, `COMPANY_NAME`, `COORDINATES`, `users`) VALUES
('R65954', 'REDMI', '20.2426, 53.4808', '[\"8575\",\"5544\",\"7458\"]');
INSERT INTO `companies` (`COMPANY_ID`, `COMPANY_NAME`, `COORDINATES`, `users`) VALUES
('RT785D55', 'Tesla', '10.2426, 40.4808', '[\"7889\"]'),
('I7878', 'Facebook', '5.2426, 45.4808', '[\"7889\", \"5846\" ]'),
('F87182S', ' APPLE', '28.6517178,77.2219388', '[\"7848\" ]'),
('HT8548D', 'Vivo', '28.6517178,77.2219388', '[\"9415\",\"4818\"]'),
('MY874598', ' Xiomi', '5.2426, 45.4808', '[\"8488\"]'),
('BH874598', ' Volvo ', '5.2426, 55.4808', '[\"5846\"]');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;