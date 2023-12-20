import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-keycloak-opener extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-keycloak-opener:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-keycloak-opener is activated!');
  }
};

export default plugin;
