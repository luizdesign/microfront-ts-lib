import Debug from 'debug';
import { Renderer } from './renderer/template';
import { validateTemplateParameter } from './validators/template';

const DebugLifecycle = Debug('Micro:Lyfecycle');

const render = async (template: string): Promise<string> => {
  DebugLifecycle('Start template analisys');
  
  validateTemplateParameter(template);
  
  const response = Renderer(template);

  DebugLifecycle('Finish template analisys');

  return response;
}

export {
  render,
}
