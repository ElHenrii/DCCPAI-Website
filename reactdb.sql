-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2024 at 02:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `product_category` varchar(36) NOT NULL,
  `product_isCacao` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `product_category`, `product_isCacao`) VALUES
(1, 'Tablet', 1),
(2, 'Powder', 1),
(3, 'Butter', 1),
(4, 'Wine', 1),
(5, 'Tablea', 1),
(6, 'Chips', 0),
(7, 'Dessert', 0),
(8, 'Candy', 0),
(19, 'Categoery01', 1),
(20, 'Category#20', 0),
(21, 'Category#22', 1),
(22, 'Category#23', 0),
(23, 'Test#21True', 0),
(24, 'Category#24', 1),
(25, 'DataConfirm#1', 1),
(26, 'Category#25', 1),
(27, 'UserData', 1),
(28, 'TestNew2', 1),
(29, 'TestV2', 0),
(30, '42142', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_old`
--

CREATE TABLE `tbl_category_old` (
  `product_id` int(11) NOT NULL,
  `product_category` varchar(36) NOT NULL,
  `product_isCacao` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category_old`
--

INSERT INTO `tbl_category_old` (`product_id`, `product_category`, `product_isCacao`) VALUES
(1, 'Chocolate Tablet', 1),
(2, 'Cacao Powder', 1),
(3, 'Cacao Butter', 1),
(4, 'Cacao Wine', 1),
(5, 'Tablea', 1),
(6, 'Chips', 0),
(7, 'Durian Dessert', 0),
(15, 'Category Test#7', 1),
(17, 'Category Test#9', 1),
(18, 'Category Test#10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_product_id`
--

CREATE TABLE `tbl_category_product_id` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_display`
--

CREATE TABLE `tbl_display` (
  `product_id` int(11) NOT NULL,
  `display` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(36) NOT NULL,
  `product_description` text NOT NULL,
  `product_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `category_id` int(11) NOT NULL,
  `display` tinyint(1) NOT NULL DEFAULT 1,
  `available` tinyint(1) NOT NULL DEFAULT 1,
  `product_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`product_id`, `product_name`, `product_description`, `product_price`, `category_id`, `display`, `available`, `product_deleted`) VALUES
(1, 'Dennys Chocola Tablet 1', 'Dennys Chocol1ate Tablet', 245.00, 0, 0, 1, 1),
(2, 'Los Polos Hermanos Powder', 'Made from the fined ground Cacao', 300.00, 0, 1, 0, 1),
(3, 'Sky\'s Butter1234566', 'A Golden of a butter made from Cacao123', 300.00, 0, 0, 1, 0),
(4, 'GrandFather\'s Wine2', 'Fresh from the ground of Davao City21', 21.00, 0, 1, 0, 0),
(5, 'Tablea Coffee12', 'Relaxing and Chilling beverage for a night walk', 0.00, 0, 1, 0, 0),
(6, 'Dean\'s Chippy Spicy', 'A Spicy Chips from Davao City', 1.00, 0, 1, 0, 1),
(7, 'Le Durian Candy1234', 'Made from the best city to make Durian Dessert', 606060.00, 0, 1, 0, 0),
(23, 'A Generic Dessert', 'A Generic Dessert from a Generic City', 100.00, 0, 1, 0, 1),
(24, 'A Generic Powder', 'A Generic Powder', 0.00, 0, 1, 0, 0),
(71, 'Bobby\'s Honey23', 'Fresh from the hives of Davao', 30.00, 0, 1, 0, 1),
(73, 'A Generic Data Information', 'A Generic Data Information', 0.00, 0, 1, 0, 0),
(76, 'ProductX', 'ProductX', 300.00, 0, 1, 0, 0),
(77, 'Henry\'s ProductX', 'Made from the Material Of X', 9999.00, 0, 1, 0, 0),
(80, 'Henry\'s 3rd Product3', 'ProductX', 300.00, 0, 1, 0, 0),
(89, 'Henry\'s 3rd Product3', 'Made from the Material Of X', 300.00, 0, 1, 0, 0),
(90, 'LeHenri', 'LeHenri', 123.00, 0, 1, 0, 0),
(113, 'NEwDataWow', 'NEwDataWow', 300.00, 3, 1, 1, 0),
(114, 'ImageTester#1', 'ImageTester#1', 350.00, 1, 1, 1, 0),
(115, 'NewUploadings', 'ProductX', 300.00, 2, 1, 1, 0),
(116, 'DCCPAI', 'DCCPAI', 300.00, 1, 1, 1, 0),
(117, 'TestNew1', 'TestNew1', 432.00, 1, 1, 1, 0),
(118, 'TestNew2', 'handleCategoryChange', 300.00, 28, 1, 0, 0),
(119, 'TestV2', 'TestV2', 350.00, 29, 0, 1, 0),
(120, '24142', '4124', 24.00, 30, 1, 1, 1),
(121, 'DCCPAI PRODUCT#2', 'DCCPAI PRODUCT#2', 300.00, 5, 1, 1, 0),
(122, 'DCCPAI PRODUCT#3', 'DCCPAI PRODUCT#3', 300.00, 1, 1, 1, 0),
(124, 'DCCPAI PRODUCT#45', 'DCCPAI PRODUCT#4', 123.00, 6, 1, 1, 0),
(125, 'DCCPAI PRODUCT#5', 'ProductX', 350.00, 3, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_old`
--

CREATE TABLE `tbl_product_old` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(36) NOT NULL,
  `product_description` text NOT NULL,
  `product_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product_old`
--

INSERT INTO `tbl_product_old` (`product_id`, `product_name`, `product_description`, `product_price`) VALUES
(1, 'Dennys Chocola Tablet ', 'Dennys Chocolate Tablet', 0.00),
(2, 'Los Polos Hermanos Powder', 'Made from the fined ground Cacao', 250.00),
(3, 'Sky\'s Butter', 'A Golden of a butter made from Cacao', 300.00),
(4, 'GrandFather\'s Wine', 'Fresh from the ground of Davao City', 200.00),
(5, 'Tablea Coffee', 'Relaxing and Chilling beverage for a night walk', 0.00),
(6, 'Dean\'s Chippy Spicy', 'A Spicy Chips from Davao City', 1.00),
(7, 'Le Durian Candy', 'Made from the best city to make Durian Dessert', 0.00),
(23, 'A Generic Dessert', 'A Generic Dessert from a Generic City', 100.00),
(24, 'A Generic Powder', 'A Generic Powder', 0.00),
(71, 'Bobby\'s Honey', 'Fresh from the hives of Davao', 30.00),
(73, 'A Generic Data Information', 'A Generic Data Information', 0.00),
(76, 'ProductX', 'ProductX', 300.00),
(77, 'Henry\'s ProductX', 'Made from the Material Of X', 9999.00),
(80, 'Henry\'s 3rd Product3', 'ProductX', 300.00),
(83, 'Category#2', 'Category Test', 300.00),
(87, 'Category Test#7', 'Category Test#7', 123.00),
(88, 'Category Test#9', 'Category Test#9', 1003.00),
(89, 'Henry\'s 3rd Product3', 'Made from the Material Of X', 300.00);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_owner`
--

CREATE TABLE `tbl_product_owner` (
  `product_owner_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product_owner`
--

INSERT INTO `tbl_product_owner` (`product_owner_id`, `product_id`) VALUES
(0, 1),
(0, 2),
(3, 90),
(0, 91),
(0, 92),
(0, 93),
(0, 94),
(0, 95),
(0, 96),
(0, 97),
(0, 98),
(0, 99),
(0, 100),
(0, 101),
(0, 102),
(0, 103),
(0, 104),
(1, 105),
(0, 106),
(0, 107),
(0, 108),
(0, 109),
(0, 110),
(0, 111),
(0, 112),
(0, 113),
(0, 114),
(0, 115),
(1, 116),
(1, 117),
(0, 118),
(0, 119),
(0, 120),
(1, 121),
(1, 122),
(1, 123),
(1, 124),
(1, 125);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_owner_name`
--

CREATE TABLE `tbl_product_owner_name` (
  `product_owner_id` int(11) NOT NULL,
  `product_owner_name` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product_owner_name`
--

INSERT INTO `tbl_product_owner_name` (`product_owner_id`, `product_owner_name`) VALUES
(0, 'DCCPAI'),
(1, 'MembersMerchant'),
(2, 'SalesDaw'),
(3, 'LeEnterprise'),
(4, 'HenrysDomain');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `username` varchar(24) NOT NULL,
  `password` varchar(24) NOT NULL,
  `user_access` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `owner_id`, `username`, `password`, `user_access`) VALUES
(1, 0, 'admin', '1234', 0),
(2, 1, 'dccpai', '1234', 1),
(3, 1, 'staff', '1234', 2),
(14, 3, 'ElHenri', '123', 1),
(15, 3, 'HenryStaff', '1234', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD UNIQUE KEY `product_id_2` (`category_id`),
  ADD KEY `product_id` (`category_id`),
  ADD KEY `product_id_3` (`category_id`);

--
-- Indexes for table `tbl_category_old`
--
ALTER TABLE `tbl_category_old`
  ADD UNIQUE KEY `product_id_2` (`product_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_id_3` (`product_id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `tbl_product_old`
--
ALTER TABLE `tbl_product_old`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `tbl_product_owner`
--
ALTER TABLE `tbl_product_owner`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_owner_id` (`product_owner_id`);

--
-- Indexes for table `tbl_product_owner_name`
--
ALTER TABLE `tbl_product_owner_name`
  ADD UNIQUE KEY `product_owner_id` (`product_owner_id`),
  ADD KEY `product_id` (`product_owner_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_category_old`
--
ALTER TABLE `tbl_category_old`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT for table `tbl_product_old`
--
ALTER TABLE `tbl_product_old`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
