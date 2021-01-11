// replace A => T, T => A, G => C, C => G
function DNAStrand(dna) {
  return [...dna].map((item) => DNAStrand.pairs[item]).join("");
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};