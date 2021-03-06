'use strict';

const expect = require('chai').expect;
const getTmpDirPath = require('../../../../../lib/utils/fs/getTmpDirPath');

describe('#getTmpDirPath()', () => {
  it('should return a scoped tmp dir path', () => {
    const tmpDirPath = getTmpDirPath();
    expect(tmpDirPath).to.match(/tmpdirs-serverless/);
  });
});
