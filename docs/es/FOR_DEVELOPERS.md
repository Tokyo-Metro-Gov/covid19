# Para Desarrolladores

## 1. Cómo Configurar Entornos

Instale las siguientes aplicaciones para el ambiente de desarrollo.

| Nombre de la aplicación | Versión de la aplicación (Proporcionar sólo si se especifica) | Condiciones de instalación |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/es/)|14.16.0 o superior |Requerido|
|[Visual Studio Code](https://code.visualstudio.com/)| |si usas Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/es-ES/)| |Cuando se ejecuta este programa con `yarn`|
|[docker compose](https://docs.docker.com/compose/install/)| |Cuando se ejecuta este programa con `docker compose`|
|[Vagrant](https://www.vagrantup.com/)| |Cuando se ejecuta este programa con `Vagrant`|

### 1-1. Extensiones para Visual Studio Code

Para usar con Visual Studio Code, instale las siguientes extensiones.

| Extensiones | Condiciones de instalación |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|Cualquiera|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|Cualquiera|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|Cualquiera|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|Cualquiera|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|Cuando se desarrolla con Visual Studio Code y contenedores remotos|

---

## 2. Ejecución del programa

El comando se ejecuta en el directorio raíz de la copia de trabajo.

### 2-1. Usando `yarn`

#### 2-1-1. Instalación de dependenciass

```bash
# instalar dependencias
$ yarn install
```

#### 2-1-2. Ejecutar este programa

Después de ejecutar el siguiente comando, puedes revisar el programa en desarrollo accediendo a http://localhost:3000 .

##### 2-1-2-1. Normal

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. Más rápido

Puedes desactivar la auditoría de accesibilidad, lo cual hará más rápido a tu servidor local.

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

### 2-1-3. Solución de problemas

#### 2-1-3-1. Como resolver el error `Cannot find module ****`

Construye nuevamente la dependecia y ejecuta el programa.

### 2-2. Usando `docker compose`

#### 2-2-1. Instalar dependencias y ejecutar el programa

Después de ejecutar el siguiente comando, puedes revisar el programa en desarrollo accediendo a http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### 2-2-2. Solución de problemas

#### 2-2-2-1. Como resolver el error `Cannot find module ****`

Detener el programa y eejecutar el siguiente comando.
```bash
$ docker-compose run --rm app yarn install
```

### 2-3. Usando `Vagrant`

#### 2-3-1. Instalar dependencias y ejecutar el programa

Después de ejecutar el siguiente comando, puedes revisar el programa en desarrollo accediendo a http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Al desarrollar con Visual Studio Code y contenedores remotos

#### 2-4-1. Instalar dependencias y ejecutar el programa

Si seleccionas la raíz de este directorio como “Open Folder in Container” (como se uestra en la parte inferior izquierda [Inicio rápido: Prueba un contenedor de desarrollo (sitio externo)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), la construcción del ambiente iniciará.

Puedes revisar el programa en desarrollo accediendo a http://localhost:3000 después de construir el ambiente.

#### 2-4-2. Notas

- Si quieres cambiar las configuraciones, modifica `.devcontainer/devcontainer.json`. Consulta [Referencia a devcontainer.json](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) para más detalles.
- La extensión "ESLint" sólo es válida cuando se ejecuta un contenedor remoto. Por favor agrégalo a las `extensions` de `.devcontainer/devcontainer.json` si es necesario.
- Aquí puedes encontrar un procedimiento detallado [Administrando extensiones (sitio externo)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- Al reconstruir el ambiente de desarrollo, ejecuta “Rebuild Container” el cual se encuentra en la parte inferior izquierda.

---

## 3. Detectar ambiente de producción/otros

En el ambiente de producción, el valor `'production'` es asignado a la variable `process.env.GENERATE_ENV`, en el otro caso, el valor `'development'` es asignado.  
Por favor usa la variable para detectar qué ambiente es usado en tiempo de ejecución.


---

## 4. Implementación en entornos de preparación y producción

Cuando se actualiza alguna rama en la columna izquierda de la tabla inferior, la rama y el sitio web serán actualizados automáticamente.

| Rama | Una rama donde el HTML es construido y actualizado | Sitio web actualizado |
| ---- | ---- | ---- |
|`master`|`production`|El sitio de producción https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|El sitio de staging https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|El sitio de desarrollo https://dev-covid19-tokyo.netlify.app/|

---

## 5. Reglas para ramas

Los Pull Request se hacen únicamente para `development`.
Por favor usa las siguientes reglas de nombrado para la rama al enviar un Pull Request.

| Tipo de cambios | Reglas de nombrado para la rama |
| ---- | ---- |
|Feature implementation|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

### 5-1. Rama básica

| Propósito | Rama | URL de confirmación | Personas que pueden hace Pull Request | Observaciones |
| ---- | ---- | ---- | ---- | ---- |
| Desarrollo | development | https://dev-covid19-tokyo.netlify.app/ | Todos los desarrolladores | Rama base. Envía los Pull Request aquí |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Sólo administradores | Para confirmación final antes de producción. Prohibidos los Pull Request de quien no sea administrador |
| Producción | master | https://stopcovid19.metro.tokyo.lg.jp/ | Sólo administradores | Prohibidos los Pull Request de quien no sea administrador |

### 5-2. Rama usada por el sistema

| Propósito | Rama | URL de confirmación | Observaciones |
| ---- | -------- | ---- | ---- |
| HTML del sitio de producción | production | https://stopcovid19.metro.tokyo.lg.jp/ | Ubicación donde se localiza el HTML generado estáticamente |
| Sitio HTML de staging | gh-pages | https://stg-covid19-tokyo.netlify.app/ | Dónde encontrar el HTML generado estáticamente |
| Para el directorio de trabajo OGP | deploy / new_ogp | Ninguna | Para actualizar OGP |
