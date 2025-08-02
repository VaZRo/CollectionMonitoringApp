import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  addCollection: (item) => ipcRenderer.invoke('db:add-collections', item),
  getCollections: () => ipcRenderer.invoke('db:get-collections'),
  deleteCollection: (id) => ipcRenderer.invoke('db:delete-collection', id),
  editCollection: (item) => ipcRenderer.invoke('db:edit-collection', item),
  ping: () => ipcRenderer.invoke('ping'), 
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
  window.electron = electronAPI
  window.api = api
}
