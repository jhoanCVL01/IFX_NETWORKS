# IFX_NETWORKS_EXCERSISE

Aplicación web para la gestión de Entidades y Empleados. Este proyecto está dividido en un **backend** desarrollado con **.NET Core WebAPI** y un **frontend** con **Angular**. Permite llevar un registro de entidades y empleados, incluyendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## 📋 **Tabla de Contenidos**


1. [Requisitos del Sistema](#requisitos-del-sistema)
2. [Instalación](#instalación)
    - [Backend](#instalación-del-backend)
    - [Frontend](#instalación-del-frontend)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Ejecusión](#ejecusion)


---

## 💻 **Requisitos del Sistema**

Asegúrate de tener instaladas las siguientes herramientas:

- **Node.js**: >= 18.x
- **Angular CLI**: >= 16.x
- **.NET SDK**: >= 6.0
- **Git**: Para clonar el repositorio
- **Visual Studio / Visual Studio Code**: Opcional, pero recomendado para desarrollo.

---

## 🚀 **Instalación**

### **Instalación del Backend**

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/jhoanCVL01/SchoolExersice.git](https://github.com/jhoanCVL01/IFX_NETWORKS.git)
   cd IFX_NETWORKS

2. **Restaurar Dependencias:**
   ```bash
   dotnet restore

2. **Ajustar AppSettings:**
   ```bash
   Cambiar connection strings con la cadena correspondiente al servidor de BD en ambiente local
   
4. **Migrar la Base de Datos (opcional recomendado sql server):**
   ```bash
   dotnet ef database update

### **Instalación del Frontend**

1. **Navegar a la carpeta del frontend:**
   ```bash
   cd ClienteaAPP

1. **Instalar las dependencias:**
   ```bash
   npm install
   
3. **Ajustar Ruta Api en Clientapp/src/app/auth/auth.service.ts,Clientapp/src/app/empleados/empleados.service.ts,Clientapp/src/app/entidades/entidades.service.ts:**
   ```bash
   private baseUrl = 'https://localhost:7235/api' (Cambiar por puerto de ejecucion de api)


## 🛠️ **Tecnologías Utilizadas**

- **Node.js**: >= 18.x
- **Angular CLI**: >= 16.x
- **.NET SDK**: >= 8.0
- **Git**: Para clonar el repositorio
- **Visual Studio / Visual Studio Code**: Opcional, pero recomendado para desarrollo.

##  **Ejecusión**

- **BackEnd**: Compilar Ejecutar en visual studio
- **Angular**: abrir en vs Code ubicacion del recurso ClientAPP e ingresar comando ng serve
- **Sitio Publico**: https://ifxangularapp-gqdeacdpexh7gzhp.canadacentral-01.azurewebsites.net/
  -- **Credenciales**: Usuario: admin Contraseña: admin 
