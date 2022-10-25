import Debug from 'debug';
import ParameterException from "../exceptions/parameter-exception";

const DebugLifecycle = Debug('Micro:Lyfecycle');
const DebugTemplateParamterValidation = Debug('Micro:TemplateParameterValidation');

const validateTemplateParameter = (template: string): void => {
  DebugLifecycle('Validating the template paramter');

  if (!template) {
    DebugTemplateParamterValidation('The template parameter was not provided');
    
    throw new ParameterException('The template parameter is mandatory');
  }

  const type: string = typeof template;
  if (type !== 'string') {
    DebugTemplateParamterValidation('The template parameter must be a string');

    throw new ParameterException(`The template parameter must be a string, "${type}" given`);
  }

  DebugTemplateParamterValidation('The template parameter was validated with success');
}

export {
  validateTemplateParameter,
};
