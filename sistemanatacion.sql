-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 05-06-2016 a las 15:45:24
-- Versión del servidor: 5.1.41
-- Versión de PHP: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sistemanatacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenador`
--

CREATE TABLE IF NOT EXISTS `entrenador` (
  `id` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `entrenador`
--

INSERT INTO `entrenador` (`id`, `nombre`, `telefono`, `direccion`) VALUES
('1006723454', 'Claudia solorzano', '3123423423', 'Calle 6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenamiento`
--

CREATE TABLE IF NOT EXISTS `entrenamiento` (
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `duracion` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `entrenamiento`
--

INSERT INTO `entrenamiento` (`codigo`, `nombre`, `descripcion`, `tipo`, `duracion`) VALUES
('1', 'Entramiento basico', 'Basado en personas que hasta ahora inician en el deporte', 'basico', '18 semanas'),
('2', 'Entramiento intermedio', 'Basado en personas que llevan cierto vagaje en el deporte', 'intermedio', '18 semanas'),
('3', 'Entrenamiento avanzado', 'Basado en personas que tienen un nivel alto o profesional en el deporte', 'avanzado', '16 semanas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrena_estilo`
--

CREATE TABLE IF NOT EXISTS `entrena_estilo` (
  `cod_entrena_estilo` varchar(50) NOT NULL,
  `cod_entrena` varchar(50) NOT NULL,
  `cod_estilo` varchar(50) NOT NULL,
  `ejercicio` varchar(50) NOT NULL,
  `series` varchar(50) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `detalle` varchar(300) NOT NULL,
  `sesion` varchar(50) NOT NULL,
  `descanso_serie` varchar(20) NOT NULL,
  `recurso` varchar(300) NOT NULL,
  PRIMARY KEY (`cod_entrena_estilo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `entrena_estilo`
--

INSERT INTO `entrena_estilo` (`cod_entrena_estilo`, `cod_entrena`, `cod_estilo`, `ejercicio`, `series`, `duracion`, `detalle`, `sesion`, `descanso_serie`, `recurso`) VALUES
('1', '1', '1', 'Calentamiento', '1x200', '200 metros', '200 metros estilo libre a ritmo moderado y estirando músculos.', '1', '5 minutos', ''),
('2', '1', '1', 'Patada de crol', '3x100', '300 metros', 'Tres series de patada crol con brazos en tabla', '1', '3 minutos', ''),
('3', '1', '1', 'Brazos de crol', '3x100', '300 metros', 'Tres series de brazos crol sujetando pull-over con piernas', '1', '3 minutos', ''),
('4', '1', '1', 'Piernas y 1 brazo', '2x100', '200 metros', 'Piernas y brazo de crol manteniendo brazo izquierdo extendido', '1', '3 minutos', ''),
('5', '1', '1', 'Piernas y 1 brazo', '2x100', '200 metros', 'Piernas y brazo de crol manteniendo brazo derecho extendido', '1', '3 minutos', ''),
('6', '1', '1', 'Crol completo', '4x100', '400 metros', '4 series de 100 metros de crol completo a ritmo alto', '1', '10 minutos', ''),
('7', '1', '1', 'Calentamiento', '1x200', '200 metros', '200 metros estilo libre a ritmo moderado y estirando músculos.', '2', '5 minutos', ''),
('8', '1', '3', 'Patada', '4x50', '200 metros', 'Patada de mariposa con brazos en tabla estirados.', '2', '2 minutos', ''),
('9', '1', '3', 'Mariposa completa', '4x50', '200 metros', 'Mariposa completa a ritmo medio.', '2', '2 minutos', ''),
('10', '1', '2', 'Pies espalda', '2x100', '200 metros', 'Pies de espalda con pull-over debajo de la nuca y brazos sujetando el pull.', '2', '2 minutos', ''),
('11', '1', '2', 'Brazos', '3x100', '300 metros', 'Brazos con pull-over entre las piernas y batiendo pies ligeramente.', '2', '3 minutos', ''),
('12', '1', '2', 'Espalda completa', '3x100', '300 metros', '3 series de 100 metros de espalda completa a ritmo alto.', '2', '10 minutos', ''),
('13', '1', '1', 'Calentamiento', '1x200', '200 metros', '200 metros estilo libre a ritmo moderado y estirando músculos.', '3', '5 minutos', ''),
('14', '1', '1,2,3,4', 'Combinada 4 estilos', '4x100', '400 metros', 'Dos series de 100 m cambiando de estilo cada 25 m.', '3', '2 minutos', ''),
('15', '1', '4', 'Patada', '3x100', '300 metros', 'Patada de mariposa con brazos en tabla estirados.', '3', '2 minutos', ''),
('16', '1', '4', 'Brazos', '2x100', '200 metros', 'Brazos de braza con pull-over entre las piernas.', '3', '2 minutos', ''),
('17', '1', '1', 'Ritmo descanso', '1x200 ', '200 metros', '200 metros estilo libre a ritmo lento y estirando músculos.', '3', '10 segundos', ''),
('18', '2', '1', 'Calentamiento', '1x300', '300 metros', 'Intensidad de 60% a 70%', '1', '3 minutos', ''),
('19', '2', '3', 'Mariposa completa', '8x25', '200 metros', 'Mariposa completa a ritmo medio', '1', '30 segundos', ''),
('20', '2', '1', 'Croll a ritmo sostenido', '1x50', '50 metros', 'Metros de afloje', '1', 'Sin descanso', ''),
('21', '2', '2', 'Espalda completa', '8x25', '200 metros', '8 series de 25 metros de espalda completa a ritmo alto.', '1', '40 segundos', ''),
('22', '2', '1', 'Croll a ritmo sostenido', '1x50', '50 metros', 'Metros de afloje', '1', 'sin descanso', ''),
('23', '2', '4', 'Brazos', '3x100', '300 metros', 'Brazos de braza con pull-over entre las piernas.', '1', '45 segundos', ''),
('24', '2', '1', 'Calentamiento', '1x300', '300 metros', '300 metros estilo libre a ritmo moderado y estirando músculos.', '2', '3 minutos', ''),
('25', '2', '1', 'Croll', '4x150', '600 metros', '4 x 150 en crol descansado 20 segundos entre repetición. Control de respiración – respirando cada 5 brazadas', '2', '20 segundos', ''),
('26', '2', '4', 'Brazos', '4x150', '600 metros', '150 metros braza a un ritmo de un 80% de tu velocidad máxima y descansa 2 minutos', '2', '2 minutos', ''),
('27', '2', '2', 'Espalda completa', '3x100', '300 metros', '100 metros espalda a un ritmo de un 80% y descansa 1 minuto.', '2', '1 minuto', ''),
('28', '2', '3', 'Mariposa completa', '4x100', '400 metros', 'Mariposa completa a ritmo medio.', '2', '2 minutos', ''),
('29', '2', '1', 'Ritmo descanso', '1x200', '200 metros', '200 metros estilo libre a ritmo lento y estirando músculos.', '2', 'sin descanso', ''),
('30', '2', '1', 'Calentamiento', '1x300', '300 metros', '300 metros estilo libre a ritmo moderado y estirando músculos.', '3', '3 minutos', ''),
('31', '2', '1,2,3', 'Estilos combinados', '4x150', '600 metros', 'combinado individual cada 2 minutos', '3', '2 minutos', ''),
('32', '2', '4', 'Brazos', '4x100', '400 metros', 'Brazos de braza con pull-over entre las piernas.', '3', '1 minuto', ''),
('33', '2', '4', 'Patada', '4x100', '400 metros', 'Patada de mariposa con brazos en tabla estirados.', '3', '1 minuto', ''),
('34', '2', '1', 'Ritmo descanso', '1x200', '200 metros', '200 metros estilo libre a ritmo lento y estirando músculos.', '3', 'sin descanso', ''),
('35', '3', '1', 'Calentamiento', '2x200', '400 metros', '400 metros estilo libre a ritmo moderado y estirando músculos.', '1', '1 minuto', ''),
('36', '3', '1', 'Crol completo', '5x150', '750 metros', '5 series de 150 metros de crol completo a ritmo alto', '1', '40 segundos', ''),
('37', '3', '3', 'Mariposa completa', '6x100', '600 metros', 'Mariposa completa a ritmo fuerte.', '1', '40 segundos', ''),
('38', '3', '2', 'Pies espalda y brazos (alternado)', '4x100', '400 metros', 'Movimientos alternados en el estilo', '1', '40 segundos', ''),
('39', '3', '4', 'Patada y brazos (alternados)', '4x100', '400 metros', 'Movimientos alternados', '1', '40 segundos', ''),
('40', '3', '1', 'Ritmo descanso', '1x300', '300 metros', '300 metros estilo libre a ritmo lento y estirando músculos.', '1', 'sin descanso', ''),
('41', '3', '1', 'Calentamiento', '2x200', '400 metros', '400 metros estilo libre a ritmo moderado y estirando músculos.', '2', '40 segundos', ''),
('42', '3', '', '', '', '', '', '2', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estilo`
--

CREATE TABLE IF NOT EXISTS `estilo` (
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `estilo`
--

INSERT INTO `estilo` (`codigo`, `nombre`, `descripcion`) VALUES
('1', 'Estilo libre', 'Libre'),
('2', 'Estilo espalda', 'Espalda'),
('3', 'Estilo mariposa', 'Mariposa'),
('4', 'Braza', 'braza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_avance`
--

CREATE TABLE IF NOT EXISTS `historial_avance` (
  `cod_avance` int(11) NOT NULL AUTO_INCREMENT,
  `cod_estudiante` varchar(50) NOT NULL,
  `cod_entrena` varchar(50) NOT NULL,
  `cod_estilo` varchar(50) NOT NULL,
  `ejercicio` varchar(50) NOT NULL,
  `series` varchar(50) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `comentario` varchar(50) NOT NULL,
  `sesion` varchar(50) NOT NULL,
  `descanso_serie` varchar(50) NOT NULL,
  `semana` varchar(20) NOT NULL,
  PRIMARY KEY (`cod_avance`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `historial_avance`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nadadores`
--

CREATE TABLE IF NOT EXISTS `nadadores` (
  `id` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `edad` varchar(50) NOT NULL,
  `estatura` varchar(50) NOT NULL,
  `practicado_antes` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `codentrena` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `nadadores`
--

INSERT INTO `nadadores` (`id`, `nombre`, `edad`, `estatura`, `practicado_antes`, `usuario`, `contrasena`, `codentrena`) VALUES
('1121927868', 'Sergio Murillo', '20', '1.23 ', 'no', 'sergio', 'unillanos', '2');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
