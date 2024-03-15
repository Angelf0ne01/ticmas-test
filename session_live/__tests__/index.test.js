const sum = require('../index');

//Describe
//It o Test
describe("sum",()=>{

    //si el la suma de 2 valores es correcto
    it("suma de 2 valores",()=>{
        //arage
        const parametroA=1
        const parametroB=2
        //act
        const resultado= sum(parametroA, parametroB)
        //asert
        expect(resultado).toBe(3);
    })

    //si no le paso nada deberia arrojame un error
    it("si no paso nada deberia arroja un error",()=>{
        expect(sum(null, null)).toBe("Argumentos invalidos");
    })
})