/* tslint:disable:no-unused-variable */
"use strict";
// import { TestBed, async, inject, describe, it, expect } from '@angular/core/testing';
var address_model_1 = require("./address.model");
describe('Model: PersonAddress', function () {
    var existingPersonAddress = {
        uuid: 'uuid',
        display: 'the person',
        address1: 'address1',
        address2: 'address2',
        address3: 'address3',
        address4: 'address4',
        address5: 'address5',
        address6: 'address6',
        preferred: 'the preferred address',
        cityVillage: 'cityVillage',
        stateProvince: 'stateProvince',
        countyDistrict: 'countyDistrict',
    };
    it('should wrap openmrs PersonAddress for display correctly', function () {
        var wrappedPersonAddress = new address_model_1.PersonAddress(existingPersonAddress);
        expect(wrappedPersonAddress.uuid).toEqual(existingPersonAddress.uuid);
        expect(wrappedPersonAddress.display).toEqual(existingPersonAddress.display);
        expect(wrappedPersonAddress.address1).toEqual(existingPersonAddress.address1);
        expect(wrappedPersonAddress.address2).toEqual(existingPersonAddress.address2);
        expect(wrappedPersonAddress.address3).toEqual(existingPersonAddress.address3);
        expect(wrappedPersonAddress.preferred).toEqual(existingPersonAddress.preferred);
        expect(wrappedPersonAddress.address4).toEqual(existingPersonAddress.address4);
        expect(wrappedPersonAddress.address5).toEqual(existingPersonAddress.address5);
        expect(wrappedPersonAddress.address6).toEqual(existingPersonAddress.address6);
        expect(wrappedPersonAddress.cityVillage).toEqual(existingPersonAddress.cityVillage);
        expect(wrappedPersonAddress.stateProvince).toEqual(existingPersonAddress.stateProvince);
        expect(wrappedPersonAddress.countyDistrict).toEqual(existingPersonAddress.countyDistrict);
    });
});
//# sourceMappingURL=address.model.spec.js.map