-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 13 mai 2026 à 01:12
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `portfolio_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `tech_stack` varchar(255) DEFAULT NULL,
  `github_url` varchar(500) DEFAULT NULL,
  `demo_url` varchar(500) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `tech_stack`, `github_url`, `demo_url`, `image_url`, `created_at`, `updated_at`) VALUES
(40, 'RecipeBook', 'Plateforme de recettes interactives.', 'React, Node.js, MySQL', 'https://github.com/user/recipebook', 'https://recipebook.com', 'https://picsum.photos/200/309', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(42, 'TravelMap', 'Planification de voyages avec cartes.', 'Leaflet, React, Express', 'https://github.com/user/travelmap', 'https://travelmap.com', 'https://picsum.photos/200/311', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(43, 'CodeArena', 'Plateforme de défis de programmation.', 'Next.js, TypeScript, MongoDB', 'https://github.com/user/codearena', 'https://codearena.com', 'https://picsum.photos/200/312', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(44, 'MusicStream', 'Lecteur musical en streaming.', 'React Native, Firebase', 'https://github.com/user/musicstream', 'https://musicstream.com', 'https://picsum.photos/200/313', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(45, 'EventHub', 'Gestion et réservation d’événements.', 'Laravel, Vue.js, MySQL', 'https://github.com/user/eventhub', 'https://eventhub.com', 'https://picsum.photos/200/314', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(46, 'ShopEase', 'Mini plateforme e-commerce.', 'React, Redux, Stripe API', 'https://github.com/user/shopease', 'https://shopease.com', 'https://picsum.photos/200/315', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(47, 'EduLearn', 'Plateforme de cours en ligne.', 'Next.js, Prisma, PostgreSQL', 'https://github.com/user/edulearn', 'https://edulearn.com', 'https://picsum.photos/200/316', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(48, 'FoodDelivery', 'Application de livraison de repas.', 'Flutter, Firebase', 'https://github.com/user/fooddelivery', 'https://fooddelivery.com', 'https://picsum.photos/200/317', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(49, 'SmartHome', 'Dashboard domotique connecté.', 'React, MQTT, Node.js', 'https://github.com/user/smarthome', 'https://smarthome.com', 'https://picsum.photos/200/318', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(51, 'BookVerse', 'Bibliothèque numérique interactive.', 'React, GraphQL, Apollo', 'https://github.com/user/bookverse', 'https://bookverse.com', 'https://picsum.photos/200/320', '2026-05-07 09:15:29', '2026-05-07 09:15:29'),
(58, 'Nouveau Portfolio - Ressane', 'Exemple de PORTFOLIO', '', '', '', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/196728352/original/41fd8c7318ef7de684933650c73d6278f047e88b/create-your-digital-porfolio.jpg', '2026-05-11 21:39:16', '2026-05-11 21:39:16'),
(61, 'qazz', 'qssqsqazzazza', '', '', '', '', '2026-05-12 10:24:06', '2026-05-12 10:24:06');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `created_at`, `firstname`, `lastname`) VALUES
(1, 'admin@portfolio.fr', '$2a$12$B2ROTQTAbFkmiDcnYAM/5.nlhaTZXAOVLffT9KXbmERhWUb4E6ZEG', 'user', '2026-05-05 08:30:59', NULL, NULL),
(2, 'aedmin@portfolio.net', '$2b$10$h2jcFyjjOUpO8n23/tJTvu9lzPaGulCz9CoBQw4Xiy18sLp5f.n1O', 'admin', '2026-05-05 12:40:25', 'Ressane', 'Messioughi'),
(3, 'aedmin@portfolio.com', '$2b$10$29thB2dboZp5CAec7JsTpeqD3L0WTytSTt4XbNITfFCGRda34iyrm', 'user', '2026-05-05 12:40:46', 'Ressane2', 'Messioughi'),
(4, 'aedmin@portfolio.org', '$2b$10$F/iY7QCN7VDi3texJP9ld.SNTaO77GMDTHD6UTUFqtsCIj84D7pgK', 'admin', '2026-05-05 12:47:42', 'Arnaud', 'Messioughi'),
(5, 'Seniro@gmail.com', '$2b$10$1jaUJP8JTTBbFlfWRrOQV.ubwTASUnyKUkIzH7NqTI88EyOvfEUQe', 'admin', '2026-05-05 12:50:21', 'Arnaud', 'Chabalier');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
