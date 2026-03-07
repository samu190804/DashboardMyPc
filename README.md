# DashboardMyPc
Este es un proyecto de un Dashboard para monitorizar mi pc. Hecho con Electron y React.

## 1. Monitor de Recursos de Hardware (Core Metrics)

Este es el corazón de la app. Necesitas datos en tiempo real.

* CPU Load: Un gráfico de líneas que muestre el porcentaje de uso por núcleo.

* RAM Usage: Un medidor de "dona" (doughnut chart) que se ponga en rojo si pasas del 90%.

* GPU Monitor: Uso de memoria de video y temperatura (ideal si juegas o editas video).

* Librería clave: systeminformation (Node.js) + Chart.js o Recharts (Frontend).

## 2. Networking y Conectividad

Para saber si tu internet está fallando o si algo está consumiendo ancho de banda en segundo plano.

* Velocidad Actual: Gráfico de área para subida (Upload) y bajada (Download).

* Ping Checker: Un pequeño indicador que haga "ping" a Google o Cloudflare cada 5 segundos para medir latencia.

* IP Pública/Privada: Un widget simple de texto que puedas copiar con un click.

## 3. Gestión de Almacenamiento (Disk Health)

* Espacio en Discos: Barras de progreso por cada partición (C:, D:, o /dev/sda).

* IOPS (Input/Output): Ver qué tan rápido está escribiendo o leyendo el disco en ese momento.

* File Watcher: Un contador que te diga cuántos archivos nuevos se han creado en tu carpeta de "Descargas" hoy.

## 4. Control de Procesos (Task Manager Lite)

* Top 5 Procesos: Una lista de los procesos que más CPU están consumiendo actualmente.

* Botón de Pánico: Un botón junto a cada proceso para hacer un process.kill() desde el proceso Main de Electron.

## 5. Widgets de Productividad y Entorno

Ya que es tu dashboard personal, añade cosas que Grafana no suele tener por defecto:

* Weather Widget: Clima local basado en tu IP.

* Docker Container Status: Si programas, ver qué contenedores están corriendo y poder apagarlos desde ahí.

* Spotify "Now Playing": Usar la API de Spotify para mostrar qué escuchas mientras trabajas.