# Buscador de Medicamentos con Scraper Avanzado

Este es un scraper avanzado como parte de un monorepo que incluye una configuración compartida de ESLint, tsconfig, 
y una base de datos gestionada con Prisma y Supabase. 
Este sistema consta de dos scrapers especializados: uno para extraer información de establecimientos farmacéuticos en Perú y otro para obtener precios de medicamentos de DIGEMID.

El scraper también procesa y convierte datos de medicamentos genéricos desde PDFs a un formato JSON, 
permitiendo una fácil integración y actualización de la base de datos. 
La interfaz de usuario para la visualización de estos datos está construida con Next.js 14, facilitando una experiencia de búsqueda intuitiva y eficiente para los usuarios.

Sin embargo, el scraper enfrenta desafíos debido a nuevas medidas de seguridad implementadas por DIGEMID, 
que incluyen protección contra scraping y bloqueadores de ataques DDoS. Para futuras actualizaciones, el proyecto necesitaría rotación de proxies y técnicas de extracción más naturales para evitar la detección.

Este proyecto destaca por su enfoque integral en la recolección y presentación de datos farmacéuticos, 
mostrando la capacidad de combinar tecnologías avanzadas para resolver problemas complejos en el ámbito de la información médica.
