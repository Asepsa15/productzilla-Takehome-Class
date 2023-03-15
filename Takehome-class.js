class Person {
  constructor() {
    this.name = "";
    this.age = 0;
    this.gender = "";
    this.height = 0;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setHeight(height) {
    this.height = height;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  getHeight() {
    return this.height;
  }
}

class Student extends Person {
  constructor() {
    super();
    this.NIM = "";
    this.nilai = [];
  }

  setNIM(NIM) {
    this.NIM = NIM;
  }

  getNIM() {
    return this.NIM;
  }

  tambahNilai(nilai) {
    this.nilai.push(nilai);
  }

  rataRataNilai() {
    let total = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      total += this.nilai[i];
    }
    return total / this.nilai.length;
  }

  getPredikat() {
    const rataRata = this.rataRataNilai();
    let predikat = "";
    if (rataRata >= 90) {
      predikat = "A";
    } else if (rataRata >= 85) {
      predikat = "B+";
    } else if (rataRata >= 65) {
      predikat = "B";
    } else if (rataRata >= 55) {
      predikat = "C+";
    } else if (rataRata >= 45) {
      predikat = "C";
    } else if (rataRata >= 35) {
      predikat = "D";
    } else {
      predikat = "E";
    }
    return predikat;
  }
}

// membuat objek Person
const person= new Person();
person.setName("Asep saripudin");
person.setAge(20);
person.setGender("laki-laki");
person.setHeight(177);

// mengakses properti Person
console.log(`Nama: ${person.getName()}`);
console.log(`Umur: ${person.getAge()}`);
console.log(`Jenis Kelamin: ${person.getGender()}`);
console.log(`Tinggi: ${person.getHeight()}`);

// membuat objek student
const student = new Student();

// set data student
student.setName("Asep saripudin");
student.setNIM("123456789");

// tambah nilai
student.tambahNilai(80);
student.tambahNilai(85);
student.tambahNilai(90);

// ganti output nilai
const nilai = student.nilai;
const nilaiStr = nilai.join(", ");
const rataRata = student.rataRataNilai();
const predikat = student.getPredikat();

console.log(`---------------------------`);
console.log(`Nama: ${student.getName()}`);
console.log(`NIM: ${student.getNIM()}`);
console.log(`Nilai: ${nilaiStr}`);
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat}`);
