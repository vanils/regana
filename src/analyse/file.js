
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
    if (item.type === 'VariableDeclaration') {
      const id = createId(item.type);
      const segment = {
        start: item.start,
        end: item.end,
        uses: [],
        id
      };

      rootScope.pointers[item.declarations[0].id.name] = segment.id;
      rootScope.segments[segment.id] = segment;
    }

    if (item.type === 'ExportNamedDeclaration') {
      const id = createId(item.type);
      const segment = {
        start: item.start,
        end: item.end,
        uses: [ rootScope.pointers[item.specifiers[0].exported.name] ],
        id
      };

      rootScope.segments[segment.id] = segment;
      rootScope.exposes[item.specifiers[0].exported.name] = segment.id;
    }
  });

  return JSON.stringify(rootScope, null, 2);
};

module.exports = analyse;