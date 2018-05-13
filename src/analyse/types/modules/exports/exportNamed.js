
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
    inputs: [exported],
    exposes: [exported]
  });
};

module.exports = analyseExportNamed;