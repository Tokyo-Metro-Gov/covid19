# Sitio web del Grupo de trabajo COVID-19 de Chiba

Resumen de sitios lanzados en diversas regiones
https://hackmd.io/9TTyyjchR8ufuMd9z08Rcg?view

Sitios en la prefectura de Chiba
https://www.pref.chiba.lg.jp/index.html

Haz una Sitio web del Grupo de trabajo, ¡vamos!

### [日本語](./README.md) | [English](./README_EN.md) | Spanish

## Cómo Contribuir

Todas las contribuciones son bienvenidas.!
Por favor, consulte [Cómo contribuir](./.github/CONTRIBUTING_ES.md) para obtener más detalles.

## Grupo de Slack
Se comparte información básica en Civic Tech Zen Chiba's Slack.
Por favor, únase a nosotros a través del enlace de invitación.

https://join.slack.com/t/civictechzenchiba/shared_invite/zt-dnurg6f9-tta8UTbhd0fP58dFiBzOMQ

## Código de Conducta

Por favor, consulte el [Código de conducta para desarrolladores](./.github/CODE_OF_CONDUCT_ES.md) para más detalles.

## Licencia
Este software se publica bajo la [licencia MIT](./LICENSE.txt).

## Para Desarrolladoras

### Cómo Configurar Entornos

- Versión requerida de Node.js: 10.19.0 o superior
- Le recomendamos que use Docker-Compose ya que sigue recibiendo errores de eslint.
- La versión de desarrollo se está covid19-chiba development.
- Una herramienta relacionada es [covid19-chiba-tools](https://github.com/civictechzenchiba/covid19-chiba-tools). Ver también.

**Use yarn**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Implementación en entornos de desarrollo y producción

Cuando se actualiza la rama `development`, los archivos HTML se construirán automáticamente en la rama` dev-pages`,
y luego el sitio de desarrollo (https://development-civictechzenchiba-covid19.netlify.com/) también se actualizará.

Cuando se actualiza la rama `master`, los archivos HTML se construirán automáticamente en la rama de `production`,
y luego el sitio de producción (https://covid19.civictech.chiba.jp/) también se actualizará.

### Regla de rama

Petición de tirar está permitida sólo para el `development`.

#### Rama básica
| Propósito | Rama | URL de confirmación | Observaciones |
| ---- | -------- | ---- | ---- |
| Desarrollo | development | https://development-civictechzenchiba-covid19.netlify.com/ | la rama de la base. Básicamente envía una solicitudes de extracción aquí |
| Producción | master | https://covid19.civictech.chiba.jp/ | Se prohíben las solicitudes de extracción que no sean de administradores |
