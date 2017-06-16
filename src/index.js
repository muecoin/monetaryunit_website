import index from './templates/index.hbs';

export default () => {
  const model = {
    title: 'Test'    
  };

  return index(model);
}
