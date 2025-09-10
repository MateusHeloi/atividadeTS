class ArraySimples<T> {
  private arrayOriginal: T[];

  constructor(array: T[]) {
    this.arrayOriginal = array;
  }

  removeDuplicados(): T[] {
    const setDeUnicos = new Set(this.arrayOriginal);
    return Array.from(setDeUnicos);
  }
}


const arrayDeNumeros = new ArraySimples([1, 2, 2, 3, 4, 4, 5]);
console.log('Array original de números:', [1, 2, 2, 3, 4, 4, 5]);
console.log('Array sem duplicatas:', arrayDeNumeros.removeDuplicados());

const arrayIguais = new ArraySimples([7, 7, 7, 7]);
console.log('\nArray com todos os elementos iguais:', [7, 7, 7, 7]);
console.log('Array sem duplicatas:', arrayIguais.removeDuplicados()); 

const arrayVazio = new ArraySimples([]);
console.log('\nArray vazio:', []);
console.log('Array sem duplicatas:', arrayVazio.removeDuplicados());

const arrayDeStrings = new ArraySimples(['maçã', 'banana', 'maçã', 'laranja']);
console.log('\nArray de strings:', ['maçã', 'banana', 'maçã', 'laranja']);
console.log('Array sem duplicatas:', arrayDeStrings.removeDuplicados()); 

const arrayMisto = new ArraySimples([1, '1', 2, '2', 1, '1']);
console.log('\nArray com tipos mistos:', [1, '1', 2, '2', 1, '1']);
console.log('Array sem duplicatas:', arrayMisto.removeDuplicados()); 