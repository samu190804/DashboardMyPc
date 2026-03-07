import { ElectronAPI } from '@electron-toolkit/preload'

interface CpuInfo {
  load: number
  cpu: string
  speed: number
  cores: number
}

interface MemInfo {
  total: number
  used: number
  free: number
  usedPercent: number
}

interface DiskInfo {
  fs: string
  mount: string
  size: number
  used: number
  usedPercent: number
}

interface NetworkStats {
  iface: string
  rx: number
  tx: number
}

interface NetworkInterface {
  name: string
  ip: string
  mac: string
}

interface NetworkInfo {
  stats: NetworkStats[]
  interfaces: NetworkInterface[]
}

interface OsInfo {
  platform: string
  distro: string
  release: string
  uptime: number
}

interface ProcessInfo {
  pid: number
  name: string
  cpu: number
  mem: number
}

interface Api {
  getCpuInfo: () => Promise<CpuInfo | null>
  getMemInfo: () => Promise<MemInfo | null>
  getDiskInfo: () => Promise<DiskInfo[] | null>
  getNetworkInfo: () => Promise<NetworkInfo | null>
  getOsInfo: () => Promise<OsInfo | null>
  getProcesses: () => Promise<ProcessInfo[] | null>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
