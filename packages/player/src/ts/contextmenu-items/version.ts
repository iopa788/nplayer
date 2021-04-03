import { ContextMenuItem } from '../parts/contextmenu';

export const versionContextMenuItem: ContextMenuItem = {
  id: 'version',
  html: `RPlayer v${__VERSION__}`,
  disabled: true,
};
