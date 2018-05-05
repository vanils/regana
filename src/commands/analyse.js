
const readFile = require('../utils/readFile');
const entitify = require('../utils/entitify');
const createId = require('../utils/createId');

/**
 * Analyse a file
 * @memberof commands
 */
const analyse = fileSrc => {

  const content = readFile(fileSrc);
  const entities = entitify(content);

  const { body } = entities.program;
  const segments = {};
  const exposes = {};
  const variables = {};
  const file = createId('File_');

  body.forEach(item => {
    if (item.type === 'VariableDeclaration') {
      const id = createId('VariableDeclaration_');
      const segment = {
        start: item.start,
        end: item.end,
        pointers: [],
        file,
        id
      };

      variables[item.declarations[0].id.name] = segment.id;
      segments[segment.id] = segment;
    }

    if (item.type === 'ExportNamedDeclaration') {
      const id = createId('ExportNamedDeclaration_');
      const segment = {
        start: item.start,
        end: item.end,
        pointers: [ variables[item.specifiers[0].exported.name] ],
        file,
        id
      };

      segments[segment.id] = segment;
      exposes[item.specifiers[0].exported.name] = segment.id;
    }
  });

  return JSON.stringify({
    segments,
    exposes,
    variables
  }, null, 2);
};

module.exports = analyse;