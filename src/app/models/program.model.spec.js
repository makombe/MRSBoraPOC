"use strict";
var program_model_1 = require("./program.model");
describe('Model: Program', function () {
    var existingProgram = {
        uuid: 'uuid',
        display: 'the program',
        name: 'name',
        description: 'description'
    };
    it('should wrap openmrs program for display correctly', function () {
        var wrappedProgram = new program_model_1.Program(existingProgram);
        expect(wrappedProgram.uuid).toEqual(existingProgram.uuid);
        expect(wrappedProgram.display).toEqual(existingProgram.display);
        expect(wrappedProgram.name).toEqual(existingProgram.name);
        expect(wrappedProgram.description).toEqual(existingProgram.description);
    });
    // TODO implement these tests
    /*it('should generate update existing payload correctly',()=>{
  
    });
  
    it('should generate a new Program new payload correctly', ()=>{
  
  
    });
  
    it('should generate an existing Program payload correctly', ()=>{
  
    });*/
});
//# sourceMappingURL=program.model.spec.js.map