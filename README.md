# 🧪 Taller: Sistema de Diseño Átomico en Angular

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación de un sistema de diseño átomico y librerias en Angular, mediante el uso de componentes standalone.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Proyecto en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos generar un compilado del projects para consumirlo desde el app
y ejecutar un proyecto de prueba consumiendo la libreria ubicada en projects

```npm run build:dev``` y ```npm run start``` o ```ng serve```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`

## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

## ⚙️ Generación de Archivos con Angular CLI

A continuación se presentan los comandos más utilizados para generar componentes standalone.

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente]```

#### Ejemplo:

```ng g c atoms/button```

#### Archivos Generados

```
src/app/atoms/button/
├── button.html
├── button.scss
├── button.spec.ts
└── button.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --flat```

#### Ejemplo:

```ng g c atoms/button/button.atom --flat```

#### Archivos Generados

```
src/app/atoms/button/
├──button.atom.html
├──button.atom.scss
├──button.atom.spec.ts
└──button.atom.ts
```

### 🎓 Observaciones Importantes

- En este taller se utilizan componentes standalone
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Revisar cobertura de pruebas unitarias y documentación

## ✅ Estado Del Taller

- Dependencias instaladas con `npm i`.
- Compilación validada con `npm run build`.
- Pruebas unitarias validadas con `npm run test -- --runInBand`.
- Showcase implementado y visible en rutas:
	- `/atoms`: ejemplos funcionales de 2 átomos (`BadgeAtom` y `ButtonAtom`).
	- `/molecules`: ejemplos funcionales de 2 moléculas (`ButtonGroupMolecule` y `NavLinkMolecule`).
	- `/organisms`: ejemplo funcional del organismo `NavbarOrganism`.

## 📌 Criterios De Evaluación (+0.1)

| Criterio | Estado | Evidencia |
|---|---|---|
| Aplicación correcta de la jerarquía Atomic Design | ✅ Cumple | Se implementan 2 átomos, 2 moléculas y 1 organismo en la librería y en el Showcase. |
| Estructura (scaffolding) organizada del sistema de diseño | ✅ Cumple | Estructura por capas: `core/interfaces`, `presentation/atoms`, `presentation/molecules`, `presentation/organisms`. |
| Renderizado correcto en el Showcase | ✅ Cumple | Rutas funcionales: `/atoms`, `/molecules` y `/organisms`. |
| Uso adecuado de interfaces y tipado fuerte | ✅ Cumple | Interfaces y type aliases tipados (`NavLink`, `NavbarConfig`, `ButtonGroupData`, `BadgeType`, `ButtonType`, etc.). |
| Funcionamiento general del proyecto | ✅ Cumple | Instalación, build, tests y ejecución local verificados. |
| Pruebas unitarias con cobertura superior al 80% usando Jest | ✅ Cumple | Cobertura actual: **100%** (`npm run test:coverage`). |
| Documentación técnica con cobertura superior al 80% usando Compodoc | ✅ Cumple | Cobertura documental actual: **100%** (`npm run compodoc`). |

### 🔎 Comandos De Verificación

- `npm run build`
- `npm run test:coverage`
- `npm run compodoc`

