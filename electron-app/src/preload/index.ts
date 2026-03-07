import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // System metrics
  /*   
  getCpuInfo: () => window.electron.ipcRenderer.invoke('get-cpu-info'),
  getMemInfo: () => window.electron.ipcRenderer.invoke('get-mem-info'),
  getDiskInfo: () => window.electron.ipcRenderer.invoke('get-disk-info'),
  getNetworkInfo: () => window.electron.ipcRenderer.invoke('get-network-info'),
  getOsInfo: () => window.electron.ipcRenderer.invoke('get-os-info'),
  getProcesses: () => window.electron.ipcRenderer.invoke('get-processes') */
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
