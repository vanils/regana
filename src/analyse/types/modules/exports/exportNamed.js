
const createId = require('../../../../utils/createId');

const analyseExportNamed = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  const exported = entity.specifiers[0].exported.name;

  scope.addSegment(id, start, end, {
    usesPointers: [exported],
    exposes: [exported]
  });

  return [id];
};

module.exports = analyseExportNamed;