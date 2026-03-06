# DashboardMypc

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Packages

```bash
# Para obtener los datos del sistema (en el proceso Main)
npm install systeminformation

# Para los gráficos (en el proceso Renderer)
npm install chart.js react-chartjs-2  # Si usas React
# o
npm install apexcharts                # Muy buena para dashboards

# Para el movimiento de los cuadros
npm install react-grid-layout         # El estándar para dashboards
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
