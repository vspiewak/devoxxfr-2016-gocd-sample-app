import {expect} from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Setup', () => {

  describe('Mocha + expect', () => {

    it('should run successfully', () => {

      expect(1).to.equal(1);

    });

  });

  describe('React + enzyme', () => {

    it('should run successfully', () => {

      const component = shallow(<span>1</span>);
      expect(component.text()).to.equal('1');

    });

  });

});
