
const readFile = require('../utils/readFile');
const entitify = require('../utils/entitify');
const createId = require('../utils/createId');
const Scope = require('../models/Scope');

/**
 * Analyse a file
 * @memberof commands
 */
const analyse = fileSrc => {

  const content = readFile(fileSrc);
  const entities = entitify(content);
  const { body } = entities.program;

  const rootScope = new Scope(entities.start, entities.end, { file: createId('File') });

  body.forEach(item => {

    const {
      start,
      type,
      end
    } = item;

    const id = createId(type);

    if (item.type === 'VariableDeclaration') {
      const pointer = item.declarations[0].id.name;
      rootScope.addSegment(id, start, end, { pointer });
    }

    if (item.type === 'ExportNamedDeclaration') {
      const exported = item.specifiers[0].exported.name;
      rootScope.addSegment(id, start, end, {
        inputs: [exported],
        exposes: [exported]
      });
    }
  });

  return JSON.stringify(rootScope, null, 2);
};

module.exports = analyse;