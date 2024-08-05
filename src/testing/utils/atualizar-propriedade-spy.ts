export function atualizarPropriedadeSpy<T extends object, K extends keyof T>(
  objeto: T,
  propriedade: K,
  valor: T[K],
) {
  (
    Object.getOwnPropertyDescriptor(objeto, propriedade)?.get as jasmine.Spy
  ).and.returnValue(valor);
}
