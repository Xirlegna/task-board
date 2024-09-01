import { ipcRenderer } from 'electron';

import { EventName } from '../../common/enum/EventName';

export const useAppEvent = () => {
  const close = () => ipcRenderer.send(EventName.APP_CLOSE);
  const minimize = () => ipcRenderer.send(EventName.APP_MINIMIZE);
  const resize = () => ipcRenderer.send(EventName.APP_RESIZE);

  return { close, minimize, resize };
};
